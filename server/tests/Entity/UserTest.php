<?php

namespace App\Tests\Entity;

use App\Entity\User;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

class UserTest extends TestCase
{
    public function testUser(): void
    {
        $user = new User();

        // Establecer y obtener el email
        $user->setEmail('user@example.com');
        $this->assertSame('user@example.com', $user->getEmail());

        // Establecer y obtener el nombre
        $user->setName('John Doe');
        $this->assertSame('John Doe', $user->getName());

        // Establecer y obtener el password
        $user->setPassword('password');
        $this->assertSame('password', $user->getPassword());

        // Establecer y obtener el rol
        $user->setRoles(['ROLE_USER', 'ROLE_ADMIN']);
        $this->assertEquals(['ROLE_USER', 'ROLE_ADMIN'], $user->getRoles());

        // Establecer y obtener la verificación
        $user->setIsVerified(true);
        $this->assertTrue($user->isVerified());

        // Comprobar interfaces implementadas
        $this->assertInstanceOf(UserInterface::class, $user);
        $this->assertInstanceOf(PasswordAuthenticatedUserInterface::class, $user);

        // Comprobar si getUsername y getUserIdentifier son iguales
        $this->assertSame($user->getUserIdentifier(), $user->getUsername());
    }
}
