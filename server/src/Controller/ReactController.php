<?php

namespace App\Controller;
use App\Entity\User;
use App\Security\EmailVerifier;


use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mime\Address;



#[Route('/api')]
class ReactController extends AbstractController
{
    private EmailVerifier $emailVerifier;

    public function __construct(EmailVerifier $emailVerifier)
    {
        $this->emailVerifier = $emailVerifier;
    }

    #[Route('/register', name: 'app_homepresonalizada_index', methods: ['POST'])]
    public function indexpersonalizada(Request $request, ValidatorInterface $validator, ManagerRegistry $doctrine): JsonResponse
    {

        $data = json_decode($request->getContent(), true);

        $user = new User();
        $user -> setEmail($data['email']);
        $user -> setName($data['name']);
        $user -> setPassword(password_hash($data['password'], PASSWORD_DEFAULT));

        $em = $doctrine->getManager();
        $em -> persist($user);
        $em -> flush();

        $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
        (new TemplatedEmail())
            ->from(new Address('mariamoria4040@gmail.com', 'Verificación del login F5'))
            ->to($user->getEmail())
            ->subject('Por favor confirme su correo')
            ->htmlTemplate('registration/confirmation_email.html.twig')
            ->context([
                'userName' => $user->getName(), // Pasar el nombre del usuario a la plantilla
                // ...
            ])
        );

        return new JsonResponse(['success' => true]);
    }
}



