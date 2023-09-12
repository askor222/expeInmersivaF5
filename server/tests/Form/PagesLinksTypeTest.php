<?php
namespace App\Tests\Form;

use App\Entity\PagesLinks;
use App\Form\PagesLinksType;
use Symfony\Component\Form\Test\TypeTestCase;

class PagesLinksTypeTest extends TypeTestCase
{
    public function testSubmitValidData(): void
    {
        $formData = [
            'name' => 'Test Name',
            'link' => 'Test Link',
        ];

        $objectToCompare = new PagesLinks();
        $objectToCompare->setName('Test Name');
        $objectToCompare->setLink('Test Link');

        $form = $this->factory->create(PagesLinksType::class, $objectToCompare);

        $object = new PagesLinks();
        $object->setName('Test Name');
        $object->setLink('Test Link');

        $form->submit($formData);

        $this->assertTrue($form->isSynchronized());
        $this->assertEquals($object, $objectToCompare);
    }
}

