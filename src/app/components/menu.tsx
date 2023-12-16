"use client";
import Link from 'next/link';
import type { Route } from 'next'
import { usePathname } from 'next/navigation'


export default function Menu<T extends string>({ items }: {
  items: Array<{href: Route<T>, text: string}>
}) {
  const pathname = usePathname()
  return (
    <nav className='flex my-4 border-4 border-indigo-200 border-l-indigo-500'>
      {items.map(item => (
      <div className='flex-1 px-2' key={item.href}>
      <Link href={item.href} >{item.text}</Link>
      {pathname == item.href &&
      <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
      }      
    </div>
      ))}
    </nav>
  )
}
