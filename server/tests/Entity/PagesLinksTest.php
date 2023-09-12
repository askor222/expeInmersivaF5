<?php

namespace App\Tests\Entity;

use App\Entity\PagesLinks;
use PHPUnit\Framework\TestCase;

class PagesLinksTest extends TestCase
{
    public function testId(): void
    {
        $pageLink = new PagesLinks();
        $this->assertNull($pageLink->getId());
    }

    public function testName(): void
    {
        $pageLink = new PagesLinks();
        $this->assertNull($pageLink->getName());

        $name = 'Test Page Link';
        $pageLink->setName($name);
        $this->assertEquals($name, $pageLink->getName());
    }

    public function testLink(): void
    {
        $pageLink = new PagesLinks();
        $this->assertNull($pageLink->getLink());

        $link = 'https://example.com';
        $pageLink->setLink($link);
        $this->assertEquals($link, $pageLink->getLink());
    }

    public function testChainingMethods(): void
    {
        $pageLink = new PagesLinks();
        
        $name = 'Test Page Link';
        $link = 'https://example.com';

        $pageLink->setName($name)
            ->setLink($link);

        $this->assertEquals($name, $pageLink->getName());
        $this->assertEquals($link, $pageLink->getLink());
    }
}