export const getNewsTopHeadlines= async() => {
    const newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_TOKEN_NEWS}`,
        {cache: 'no-store'}
    )
    return newsData.json()
}

export const getNewsSearch= async(keyword: string) => {
    const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.NEXT_PUBLIC_API_TOKEN_NEWS}&q=${keyword}&pageSize=10`,
        {cache: 'no-store'}

    );
    const contentType = newsData.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid JSON response");
    }

    return newsData.json()
}

export async function getServerSideProps() {
    try {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_TOKEN_NEWS}`);
      const data = await res.json();
      return { props: { data } };
    } catch (error) {
      console.error("Error in getServerSideProps:", error);
      return { props: { data: [] } }; // Return fallback data
    }
  }
