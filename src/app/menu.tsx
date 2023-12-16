import Menu from './components/menu';
import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

export default async function ServerMenu() {  
  const pages = (await readdir('./src/app', { withFileTypes: true }))
  .filter(f => f.isDirectory)
  .filter(f => existsSync(`${f.path}/${f.name}/page.tsx`))
  .map(f => (
    {href: '/' + f.name, text: f.name}
  ))

  return <Menu items={[
    {href: "/", text: "home"},
    ...pages
  ]} />
}