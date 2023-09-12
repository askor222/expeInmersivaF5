<?php

namespace App\Tests\Form;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use App\Form\ResetPasswordRequestFormType;

class ResetPasswordRequestFormTypeTest extends KernelTestCase
{
    public function testFormCreation()
    {
        self::bootKernel();
        $container = self::$container;
        $form = $container->get(ResetPasswordRequestFormType::class);

        $this->assertInstanceOf(ResetPasswordRequestFormType::class, $form);
    }
}
