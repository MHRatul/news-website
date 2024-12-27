import { getNewsSearch } from '@/api'
import { removeDuplicateData } from '@/utils'
import RandomArticle from './RandomArticle'


const RandomNews = async () => {
try{
    const randomNews = await getNewsSearch("random news")
    const filterArticles = removeDuplicateData(randomNews)

  return (
    <div className='mt-4 w-[450px] border-1 border-gray-300'>
        <h1 className='pl-2 text-2xl font-bold underline'>Random News</h1>
        {filterArticles.map((article, idx) => (
          <div key={`${article?.title}-${idx}`}>
            <RandomArticle data={article} />
          </div>
        ))}
    </div>
  )
}
  catch (error) {
    console.error("Error fetching random news:", error);
    return <div>Error loading news. Please try again later.</div>;
  }
}


export default RandomNews