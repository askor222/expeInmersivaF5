<?php

namespace App\Tests\Form;

use App\Entity\AssetsLinks;
use App\Form\AssetsLinksType;
use Symfony\Component\Form\Test\TypeTestCase;

class AssetsLinksTypeTest extends TypeTestCase
{
    public function testSubmitValidData(): void
    {
        $formData = [
            'name' => 'Example Name',
            'link' => 'https://example.com',
        ];

        $objectToCompare = new AssetsLinks();
        $form = $this->factory->create(AssetsLinksType::class, $objectToCompare);

        $object = new AssetsLinks();
        $object->setName($formData['name']);
        $object->setLink($formData['link']);

        // Enviar datos al formulario
        $form->submit($formData);

        $this->assertTrue($form->isSynchronized());
        $this->assertEquals($object, $objectToCompare);
    }

    public function testFormView(): void
    {
        $formData = [
            'name' => 'Example Name',
            'link' => 'https://example.com',
        ];

        $form = $this->factory->create(AssetsLinksType::class);

        $view = $form->createView();
        $children = $view->children;

        foreach (array_keys($formData) as $key) {
            $this->assertArrayHasKey($key, $children);
        }
    }
}
