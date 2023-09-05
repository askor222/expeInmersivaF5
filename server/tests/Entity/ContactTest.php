<?php

namespace App\Test\Entity;
use App\Entity\Contact;
use PHPUnit\Framework\TestCase;

class ContactTest extends TestCase
{
    public function testGetId(): void
    {
        $contact = new Contact();
        $this->assertNull($contact->getId());
    }

    public function testGetName(): void
    {
        $contact = new Contact();
        $this->assertNull($contact->getName());

        $name = 'John Doe';
        $contact->setName($name);

        $this->assertSame($name, $contact->getName());
    }

    public function testGetEmail(): void
    {
        $contact = new Contact();
        $this->assertNull($contact->getEmail());

        $email = 'john@example.com';
        $contact->setEmail($email);

        $this->assertSame($email, $contact->getEmail());
    }

    public function testGetMessage(): void
    {
        $contact = new Contact();
        $this->assertNull($contact->getMessage());

        $message = 'This is a test message.';
        $contact->setMessage($message);

        $this->assertSame($message, $contact->getMessage());
    }

    public function testFluentSetters(): void
    {
        $contact = new Contact();

        $name = 'John Doe';
        $email = 'john@example.com';
        $message = 'This is a test message.';

        $contact
            ->setName($name)
            ->setEmail($email)
            ->setMessage($message);

        $this->assertSame($name, $contact->getName());
        $this->assertSame($email, $contact->getEmail());
        $this->assertSame($message, $contact->getMessage());
    }
}
