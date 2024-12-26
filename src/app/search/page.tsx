"use client"

import { news } from '@/types'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect} from 'react'

const Search = () => {
  const [newsData, setNewsData] = useState<any>([])
  const [loading, setLoading] = useState<boolean> (false)
  const searchParams = useSearchParams()
  const search = searchParams ? searchParams.get('q') : null

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    const getNews = async () => {
        try{
            setLoading(true)
            const response = await fetch(`https://newsapi.org/v2/ecerything?
            apiKey=${process.env.NEXT_PUBLIC_API_TOKEN_NEWS}&q=${search}&
            pageSize=10`,{cache: 'no-store'})
            const responseToJson = await response.json()
            const randomArticle:news[] = responseToJson?.articles
            const filterArticles = randomArticle.filter(article => article?.
            source?.id !== null)
            setLoading(false)
            setNewsData (filterArticles)

        }
    }
    return()=>{
    }
  }, [search])


  return (
    <div>Search</div>
  )
}

export default Search