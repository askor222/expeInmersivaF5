<?php

namespace App\Controller;

use App\Entity\AssetsLinks;
use App\Form\AssetsLinksType;
use App\Repository\AssetsLinksRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/assetslinks')]
class AssetsLinksController extends AbstractController
{
    #[Route('/', name: 'app_assets_links_index', methods: ['GET'])]
    public function index(AssetsLinksRepository $assetsLinksRepository): Response
    {
        return $this->render('assets_links/index.html.twig', [
            'assets_links' => $assetsLinksRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_assets_links_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $assetsLink = new AssetsLinks();
        $form = $this->createForm(AssetsLinksType::class, $assetsLink);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($assetsLink);
            $entityManager->flush();

            return $this->redirectToRoute('app_assets_links_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('assets_links/new.html.twig', [
            'assets_link' => $assetsLink,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_assets_links_show', methods: ['GET'])]
    public function show(AssetsLinks $assetsLink): Response
    {
        return $this->render('assets_links/show.html.twig', [
            'assets_link' => $assetsLink,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_assets_links_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, AssetsLinks $assetsLink, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(AssetsLinksType::class, $assetsLink);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_assets_links_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('assets_links/edit.html.twig', [
            'assets_link' => $assetsLink,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_assets_links_delete', methods: ['POST'])]
    public function delete(Request $request, AssetsLinks $assetsLink, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$assetsLink->getId(), $request->request->get('_token'))) {
            $entityManager->remove($assetsLink);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_assets_links_index', [], Response::HTTP_SEE_OTHER);
    }
}
