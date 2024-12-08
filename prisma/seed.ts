import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function createUsers() {
  const user = await client.user.create({
    data: {
        username: 'user2',
        password: 'password123456',
        firstName: 'John',
        lastName: 'Doe',
        todo: {
            createMany: {
                data: [
                    { title: 'Post 1', description: 'Content 3', done: false },
                    { title: 'Post 2', description: 'Content 4', done: true },
                ],
            },
        },
    }
  })
  console.log(`Created user: ${user.username}`);
}

async function main() {
  await createUsers();
  await client.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
