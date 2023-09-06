<?php

namespace App\Tests\Form;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class RegistrationFormTypeTest extends KernelTestCase
{
    public function testFormCreation(): void
    {
        self::bootKernel();
        $container = self::$container;
        $form = $container->get('form.factory')->create(\App\Form\RegistrationFormType::class);
        $this->assertInstanceOf(\Symfony\Component\Form\FormInterface::class, $form);
    }
}
