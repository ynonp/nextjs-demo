import { PrismaClient } from '@prisma/client'
import NewPost from './newpost';
const prisma = new PrismaClient()

export default async () => {
  const posts = await prisma.post.findMany();

  return (
    <main className='p-2'>
      <NewPost />
      <ul>
        {posts.map(post => (
          <li><b>{post.author}</b> {post.text}</li>
        ))}
      </ul>
    </main>
  )
}