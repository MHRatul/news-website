import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchInput from './SearchInput'

const Header = () => {
  return (
    <nav className='flex  justify-between items-center py-1'>
        <Link href='/'>
         <div className='relative w-[200px] h-[50px]'>
            <Image src="/img/logo (1000 x 200 px).png" alt="logo" fill  className='object-contain'/>
         </div>
        </Link>
        <SearchInput/>
    </nav>
  )
}

export default Header