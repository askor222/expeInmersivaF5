<?php

namespace App\Command;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface; // Asegúrate de importar esta clase
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class SetAdminRolesCommand extends Command
{
    protected static $defaultName = 'app:user:set-admin-roles';

    public function __construct(private UserRepository $userRepository, private EntityManagerInterface $entityManager)
    {
        parent::__construct();
    }

    protected function configure()
    {
        $this->setDescription('Set admin roles for a user.');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $user = $this->userRepository->findOneByEmail('email@gmail.com');

        if ($user) {
            $user->setRoles(['ROLE_ADMIN']);
            $this->entityManager->persist($user);
            $this->entityManager->flush();

            $output->writeln('User roles updated to Admin successfully.');
        } else {
            $output->writeln('User not found.');
        }

        return Command::SUCCESS;
    }
}
