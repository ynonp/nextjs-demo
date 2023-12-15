import { readdir } from 'node:fs/promises';
import Link from 'next/link';
import { existsSync } from 'node:fs';

export default async () => {  
  const pages = [
    {href: '/', text: 'home'},
    ...(await readdir('./src/app', { withFileTypes: true }))
    .filter(f => f.isDirectory)
    .filter(f => existsSync(`${f.path}/${f.name}/page.tsx`))
    .map(f => (
      {href: '/' + f.name, text: f.name}
    ))
  ]
    
  return (
    <nav className='flex my-4 border-4 border-indigo-200 border-l-indigo-500'>
      {pages.map(page => (
        <div className='flex-1 px-2'>
          <Link href={page.href} >{page.text}</Link>
        </div>))}
    </nav>
  )
}