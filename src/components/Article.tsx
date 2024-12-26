import { news } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const Article = ({data}:{data:news}) => {
  return (
    <div className='py-2 border-b border-gray-300 mb-4'>
        <div className='relative w-full h-[300px]'>
            <Image src={`${data?.urlToImage !== null ? data?.urlToImage : '/img/logo (1000 x 200 px).png'}`}
             alt={data?.title} fill sizes='(max-width: 768px) 0vw, (max-width: 1200px) 100vw, 100vw'
             className={`object-${data?.urlToImage !== null ? 'contain' : 'cover' }`}/>
        </div>
        <Link href={data?.url} legacyBehavior>
          <a target="_blank" className='font-bold text-lg'>
            {data?.title}
          </a>
        </Link>
        <div className='flex space-x-4 my-2'>
            {/* Tag */}
        </div>
    </div>
  )
}

export default Article