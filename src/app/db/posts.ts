"use server"

import { PrismaClient } from '@prisma/client'
import { getSession } from '@auth0/nextjs-auth0';
const prisma = new PrismaClient()

export async function createPost(text: string) {
  const session = await getSession();
  const author = session?.user?.name || "[Guest User]";

  const res = await prisma.post.create({
    data: {
      author,
      text,
    }
  })
  
  return res;
}