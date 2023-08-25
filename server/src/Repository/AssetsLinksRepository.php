<?php

namespace App\Repository;

use App\Entity\AssetsLinks;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<AssetsLinks>
 *
 * @method AssetsLinks|null find($id, $lockMode = null, $lockVersion = null)
 * @method AssetsLinks|null findOneBy(array $criteria, array $orderBy = null)
 * @method AssetsLinks[]    findAll()
 * @method AssetsLinks[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AssetsLinksRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AssetsLinks::class);
    }

//    /**
//     * @return AssetsLinks[] Returns an array of AssetsLinks objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('a.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?AssetsLinks
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
