<?php

namespace App\Tests\Form;

use App\Form\ChangePasswordFormType;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class ChangePasswordFormTypeTest extends KernelTestCase
{
    public function testFormCreation()
    {
        self::bootKernel();

        $form = self::$container->get('form.factory')->create(ChangePasswordFormType::class);

        $this->assertInstanceOf(ChangePasswordFormType::class, $form->getConfig()->getType()->getInnerType());
    }
}
