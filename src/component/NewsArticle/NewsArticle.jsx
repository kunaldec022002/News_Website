import React from 'react'
import './NewsArticle.css'

 function NewsArticle({author,title,description,url,urlToImage,publishedAt}) {
  return (
    <div>
      

      <div className='news-article-card'>
        <img src={urlToImage} className='news-article-img' alt='url-img'/>
        <h1 className='article-title'>{title}</h1>

        <div className='article-info'>
          <p className='article-author'>{author}</p>
          <p className='article-publishedAt'>{publishedAt}</p>
        </div>

        <p className='article-description'>{description}</p>
        <a href={url} target='_blank' rel="noreferrer" className='btn-read-more'>Read More</a>
      </div>
      
    </div>
  )
}

export default NewsArticle;
