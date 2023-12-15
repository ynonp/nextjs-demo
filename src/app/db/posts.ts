"use server"

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function createPost(author: string, text: string) {
  const res = await prisma.post.create({
    data: {
      author,
      text,
    }
  })
  
  return res;
}