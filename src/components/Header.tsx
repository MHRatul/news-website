import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <nav className='flex justify-between items-center py-1'>
        <Link href='/'>
         <div className='relative w-[100px] h-[50px]'>
            <Image src="/img/logo (1000 x 200 px).png" alt="logo" fill sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw'  className='object-contain'/>
         </div>
        </Link>
        <SearchInput/>
    </nav>
  )
}

export default Header