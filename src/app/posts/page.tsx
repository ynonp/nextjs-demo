import { PrismaClient } from '@prisma/client'
import NewPost from './newpost';
const prisma = new PrismaClient()

export default async function PostsPage() {
  const posts = await prisma.post.findMany();

  return (
    <main className='p-2'>      
      <NewPost />
      <p>Found {posts.length} posts</p>
      <ul>
        {posts.map(post => (
          <li key={post.id}><b>{post.author}</b> {post.text}</li>
        ))}
      </ul>
    </main>
  )
}