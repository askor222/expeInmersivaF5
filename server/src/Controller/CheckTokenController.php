<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CheckTokenController extends AbstractController
{
    #[Route('/check/token', name: 'app_check_token')]
    public function index(): Response
    {
        return $this->render('check_token/index.html.twig', [
            'controller_name' => 'CheckTokenController',
        ]);
    }
}
