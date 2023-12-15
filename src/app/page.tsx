import Counter from './counter'
export default function Home() {
  console.log('page');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Counter />
      <Counter />
      <Counter />
    </main>
  )
}
