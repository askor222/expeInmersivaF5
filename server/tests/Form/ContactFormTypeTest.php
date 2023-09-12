<?php

namespace App\Tests\Form;

use App\Form\ContactFormType;
use Symfony\Component\Form\Test\TypeTestCase;

class ContactFormTypeTest extends TypeTestCase
{
    public function testSubmitValidData(): void
    {
        $formData = [
            'field_name' => 'some_value', // Reemplaza 'some_value' con un valor válido según tu formulario actual
        ];

        $form = $this->factory->create(ContactFormType::class);

        $form->submit($formData);

        $this->assertTrue($form->isSynchronized());
        $this->assertTrue($form->isValid());

        // Realiza más aserciones según lo necesario para tu formulario actual
        // Por ejemplo, puedes verificar que los datos se hayan configurado correctamente en el objeto de datos.
    }
}
