<?php

namespace App\Tests\Form;

use App\Entity\Contact;
use App\Form\ContactType;
use Symfony\Component\Form\Test\TypeTestCase;

class ContactTypeTest extends TypeTestCase
{
    public function testSubmitValidData(): void
    {
        $formData = [
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'message' => 'Hello, this is a test message.',
        ];

        $model = new Contact();
        $form = $this->factory->create(ContactType::class, $model);

        $expectedEntity = new Contact();
        $expectedEntity->setName($formData['name']);
        $expectedEntity->setEmail($formData['email']);
        $expectedEntity->setMessage($formData['message']);

        $form->submit($formData);

        $this->assertTrue($form->isSynchronized());
        $this->assertEquals($expectedEntity, $model);
    }

    public function testFormView(): void
    {
        $formData = [
            'name' => 'John Doe',
            'email' => 'johndoe@example.com',
            'message' => 'Hello, this is a test message.',
        ];

        $model = new Contact();
        $model->setName($formData['name']);
        $model->setEmail($formData['email']);
        $model->setMessage($formData['message']);

        $form = $this->factory->create(ContactType::class, $model);

        $view = $form->createView();
        $children = $view->children;

        $this->assertArrayHasKey('name', $children);
        $this->assertArrayHasKey('email', $children);
        $this->assertArrayHasKey('message', $children);

        $this->assertNotNull($view);
        $this->assertNotNull($children['name']);
        $this->assertNotNull($children['email']);
        $this->assertNotNull($children['message']);
    }
}
