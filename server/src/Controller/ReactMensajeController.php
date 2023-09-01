<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Repository\ContactRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;

#[Route('/contact')]
class ReactMensajeController extends AbstractController
{
    private ContactRepository $contactRepository;
    private MailerInterface $mailer;

    public function __construct(ContactRepository $contactRepository, MailerInterface $mailer)
    {
        $this->contactRepository = $contactRepository;
        $this->mailer = $mailer;
    }

    #[Route('/message', name: 'app_contact_message', methods: ['POST'])]
    public function sendMessage(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $contact = new Contact();

        $contact->setName($data['name']);
        $contact->setEmail($data['email']);
        $contact->setMessage($data['message']);

        $em = $doctrine->getManager();
        $em->persist($contact);
        $em->flush();

        // Envía el correo de confirmación al usuario
        $confirmationEmail = (new TemplatedEmail())
        ->from(new Address('mariamoria4040@gmail.com', 'Verificación del mensaje F5'))
        ->to($contact->getEmail())
        ->subject('Confirmación de mensaje recibido')
        ->htmlTemplate('contact/confirmation_contact.html.twig')
        ->context([
            'Name' => $data['name'], // Pasa el contenido del mensaje a la plantilla
        ]);

        $this->mailer->send($confirmationEmail);

        return new JsonResponse(['success' => true]);
    }
}
