import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewsArticle from '../../component/NewsArticle/NewsArticle';
import './Home.css'


export default function Home() {

  const [news, setNews]=useState([]);

  const [searchQuery, setSearchQuery]= useState('Delhi')

  const loadNews = async ()=>{
    try{
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2025-02-28&to=2025-02-28&sortBy=popularity&apiKey=70444052d2d2459c99023e4532137427`);

      setNews(response.data.articles);
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect (()=>{
    loadNews()
  },)

  useEffect(()=>{
    loadNews()
  },[searchQuery])

  return (
    <div>
      <div>
        <input type='search' className='input-search' placeholder='Enter any news' onChange={(e)=>{
          setSearchQuery(e.target.value)
        }}/>
      </div>
    

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
