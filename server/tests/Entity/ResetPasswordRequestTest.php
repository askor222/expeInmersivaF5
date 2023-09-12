<?php

namespace App\Tests\Entity;

use App\Entity\ResetPasswordRequest;
use App\Entity\User;
use DateTime;
use PHPUnit\Framework\TestCase;

class ResetPasswordRequestTest extends TestCase
{
    public function testResetPasswordRequest(): void
    {
        // Crear un usuario ficticio solo para las pruebas
        $user = new User();

        // Resto del código de prueba
        $expiresAt = new DateTime();
        $selector = 'selector_value';
        $hashedToken = 'hashed_token_value';

        // Crear una instancia de ResetPasswordRequest
        $resetPasswordRequest = new ResetPasswordRequest($user, $expiresAt, $selector, $hashedToken);

        // Comprobar que los valores se asignan correctamente
        $this->assertNull($resetPasswordRequest->getId());
        $this->assertSame($user, $resetPasswordRequest->getUser());
        $this->assertSame($hashedToken, $resetPasswordRequest->getHashedToken());
        $this->assertSame($expiresAt, $resetPasswordRequest->getExpiresAt());
    }
}
