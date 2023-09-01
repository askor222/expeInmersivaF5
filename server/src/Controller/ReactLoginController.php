<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

// ...

#[Route(path: '/lolo', name: 'app_lolo')]
class ReactLoginController extends AbstractController
{
    #[Route('/login', name: 'app_login', methods: ['POST'])]
    public function login(Request $request, UserPasswordHasherInterface $passwordHasher, EntityManagerInterface $entityManager, JWTTokenManagerInterface $jwtManager, TokenStorageInterface $tokenStorage): JsonResponse
    {
        // Obtener los datos enviados desde el formulario React
        $data = json_decode($request->getContent(), true);

        // Buscar al usuario por su correo electrónico
        $userRepository = $entityManager->getRepository(User::class);
        $user = $userRepository->findOneBy(['email' => $data['email']]);

        // Verificar si el usuario existe y la contraseña es correcta
        if ($user && $passwordHasher->isPasswordValid($user, $data['password'])) {
            // Verificar si el usuario está verificado
            if ($user->isVerified()) {
                // Crear un token JWT para el usuario
                $token = $jwtManager->create($user);

                // Almacenar el token en el TokenStorage para que el usuario lo pueda utilizar en las siguientes solicitudes
                $tokenStorage->setToken(new UsernamePasswordToken($user, null, 'main', $user->getRoles()));

                // Devolver el token JWT en la respuesta
                return new JsonResponse(['message' => 'success', 'token' => $token]);
            } else {
                // Si el usuario no está verificado, devuelve una respuesta de "correo no verificado"
                return new JsonResponse(['message' => 'email_not_verified'], 401);
            }
        } else {
            // Devolver una respuesta de error (credenciales inválidas)
            return new JsonResponse(['message' => 'invalid_credentials'], 401);
        }
    }
}
