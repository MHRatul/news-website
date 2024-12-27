import { getNewsSearch } from '@/api'
import Article from '@/components/Article'
import { removeDuplicateData } from '@/utils'


const World = async () => {
    const newsBusiness = await getNewsSearch('business')
    const filterArticles = removeDuplicateData(newsBusiness)
  return (
    <div className='w-[700px]'>
        {filterArticles.map((article,idx) =>(
            <div key={`${article?.title}-${idx}`}>
                <Article data={article}/>
            </div>
        ))}
    </div>
  )
}

export default World