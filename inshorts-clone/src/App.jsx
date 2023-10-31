import { useEffect, useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import NewsArticleContent from './components/NewsArticleContent'
import NewsArticle from './components/NewsArticle'
import dotenv from "dotenv"
import Footer from './components/Footer'

function App() {
  // dotenv.config()

  const [categories, setCategories]= useState("General")
  const [totalResults, setTotalResults] = useState(0);
  const [loadMore, setLoadMore] = useState(10);

  const [newsData, setNewsData] = useState([])

  const fetchData = async()=>{
    try {
      const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=e3c36284ba434515900678bb21b0c1e2&category=${categories}&pageSize=${loadMore}`)
      const res = await data.json();
      setNewsData(res.articles)
      setTotalResults(res.articles.length)
    } catch (error) {
      console.log(error);
    }
  }

  console.log(import.meta.env.VITE_API_KEY);

  useEffect(()=>{
    fetchData();
  },[categories, totalResults, loadMore])

  return (
    <>
      <Navbar setCategories={setCategories} />
      <NewsArticleContent data={newsData} loadMore={loadMore} setLoadMore={setLoadMore} totalResults={totalResults} />
      <Footer />
    </>
  )
}

export default App
