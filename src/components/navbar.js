import React from "react";
import Link from 'next/link';

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Me</Link>
      </li>
    </ul>
  )
} 