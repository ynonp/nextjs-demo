"use client";
import { useState } from 'react';
import Header from './header';

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log('counter');
  return (
    <div>
      <Header />
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
    </div>    
  )
}
