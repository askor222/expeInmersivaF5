<?php

namespace App\Repository;

use App\Entity\PagesLinks;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<PagesLinks>
 *
 * @method PagesLinks|null find($id, $lockMode = null, $lockVersion = null)
 * @method PagesLinks|null findOneBy(array $criteria, array $orderBy = null)
 * @method PagesLinks[]    findAll()
 * @method PagesLinks[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PagesLinksRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PagesLinks::class);
    }

//    /**
//     * @return PagesLinks[] Returns an array of PagesLinks objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?PagesLinks
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
