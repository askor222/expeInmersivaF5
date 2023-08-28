<?php

namespace App\Controller;

use App\Entity\PagesLinks;
use App\Form\PagesLinksType;
use App\Repository\PagesLinksRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/pageslinks')]
class PagesLinksController extends AbstractController
{
    #[Route('/', name: 'app_pages_links_index', methods: ['GET'])]
    public function index(PagesLinksRepository $pagesLinksRepository): Response
    {
        return $this->render('pages_links/index.html.twig', [
            'pages_links' => $pagesLinksRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_pages_links_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $pagesLink = new PagesLinks();
        $form = $this->createForm(PagesLinksType::class, $pagesLink);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($pagesLink);
            $entityManager->flush();

            return $this->redirectToRoute('app_pages_links_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('pages_links/new.html.twig', [
            'pages_link' => $pagesLink,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_pages_links_show', methods: ['GET'])]
    public function show(PagesLinks $pagesLink): Response
    {
        return $this->render('pages_links/show.html.twig', [
            'pages_link' => $pagesLink,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_pages_links_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, PagesLinks $pagesLink, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(PagesLinksType::class, $pagesLink);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_pages_links_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('pages_links/edit.html.twig', [
            'pages_link' => $pagesLink,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_pages_links_delete', methods: ['POST'])]
    public function delete(Request $request, PagesLinks $pagesLink, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$pagesLink->getId(), $request->request->get('_token'))) {
            $entityManager->remove($pagesLink);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_pages_links_index', [], Response::HTTP_SEE_OTHER);
    }
}
