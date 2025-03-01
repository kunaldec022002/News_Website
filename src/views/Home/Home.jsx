import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsArticle from '../../component/NewsArticle/NewsArticle';
import './Home.css'

export default function Home() {

  const [news, setNews]=useState([]);

  const loadNews = async ()=>{
    try{
      const response = await axios.get("https://newsapi.org/v2/everything?q=apple&from=2025-02-28&to=2025-02-28&sortBy=popularity&apiKey=70444052d2d2459c99023e4532137427");

      setNews(response.data.articles);
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect (()=>{
    loadNews()
  },[])

  return (
    <div>
      <h2>Home section</h2>

      <div className='news-container'>
        {
           news.map((newsArticle,index)=>{
            const {author,title,description,url,urlToImage,publishedAt}= newsArticle

            return(
              <NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} key={index}/>
            )
           })
        }
      </div>
      
    </div>
  )
}
