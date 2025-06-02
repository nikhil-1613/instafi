'use client'

import Link from 'next/link'
import { Heart, Search } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'

function Header() {
  return (
    <header className='fixed md:hidden bg-white top-0 flex items-center justify-between dark:bg-neutral-950
     w-full z-50 border-b border-zinc-300 dark:border-neutral-700 px-3 py-2 sm:-ml-6'>
      <Link href="/dashboard" className="font-semibold text-xl">
        Instafy
      </Link>

      <div className='flex items-center space-x-2'>
        <div className='flex items-center text-neutral-600 dark:text-neutral-400
         bg-zinc-400 dark:bg-neutral-800 gap-x-2 rounded px-3.5 py-1.5'>
          <Search className='h-4 w-4' />
          <input
            type="text"
            placeholder='Search for users'
            className='bg-transparent placeholder:text-neutral-600 
            dark:placeholder:text-neutral-400 flex-1 outline-none'
          />

        </div>
        <Button size="icon" variant="ghost">
          <Heart />
        </Button>
      </div>
    </header>
  )
}

export default Header
