"use client";
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPost
 } from "../db/posts"

export default () => {
  const router = useRouter();
  const textFieldRef = useRef<HTMLInputElement>(null);

  async function handleCreate(formData: FormData) {
    const text = formData.get('text') as string;
    const newPost = await createPost(text);
    console.log(newPost);
    if (textFieldRef.current) {
      textFieldRef.current.value = '';
    }
    router.refresh();
  }

  return (
    <form action={handleCreate}>
      <label>
        Text: 
        <input type="text" name="text" className="text-black" ref={textFieldRef} />
      </label>
      <input type="submit" value="Create" />
    </form>
  )
}