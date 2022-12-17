import React from 'react';
import './article.css';
const Article = () => {
  return (
    <div className='container'>
      <h1 className='article-heading'>Find your next home</h1>
      <p className='article-para'>We have seven locations across London, all with their personality and character. Together we can find the perfect home for you. </p>
      <button className='article-btn search-btn header-btn' type='button'>Get Started</button>
    </div>
  )
}

export default Article