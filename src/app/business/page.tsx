import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import RandomArticle from '@/components/RandomArticle'
import { removeDuplicateData } from '@/utils'


const World = async () => {
    const newsWorld = await getNewsSearch('world')
    const filterArticles = removeDuplicateData(newsWorld)
  return (
    <div className='w-[700px]'>
        {filterArticles.map((article,idx) =>(
            <div key={`${article?.title}-${idx}`} className='mb-4 '>
                <RandomArticle data={article}/>
            </div>
        ))}
    </div>
  )
}

export default World