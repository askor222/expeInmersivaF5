<?php

namespace App\Test\Entity;

use App\Entity\AssetsLinks;
use PHPUnit\Framework\TestCase;

class AssetsLinksTest extends TestCase
{
    public function testId(): void
    {
        $assetsLink = new AssetsLinks();
        $this->assertNull($assetsLink->getId());
    }

    public function testName(): void
    {
        $assetsLink = new AssetsLinks();
        $this->assertNull($assetsLink->getName());

        $assetsLink->setName('Test Name');
        $this->assertEquals('Test Name', $assetsLink->getName());
    }

    public function testLink(): void
    {
        $assetsLink = new AssetsLinks();
        $this->assertNull($assetsLink->getLink());

        $assetsLink->setLink('http://example.com');
        $this->assertEquals('http://example.com', $assetsLink->getLink());
    }

    public function testSetName(): void
    {
        $assetsLink = new AssetsLinks();
        $assetsLink->setName('Test Name');
        $this->assertEquals('Test Name', $assetsLink->getName());
    }

    public function testSetLink(): void
    {
        $assetsLink = new AssetsLinks();
        $assetsLink->setLink('http://example.com');
        $this->assertEquals('http://example.com', $assetsLink->getLink());
    }
}