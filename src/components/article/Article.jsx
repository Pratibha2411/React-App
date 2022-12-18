import React from 'react';
import './article.css';
const Article = () => {
  return (
    <div className="card-body article-body"> 
    <h5 className='card-title text-center display-4 fw-semibold article-heading'>Find your next home</h5>
    <p className='card-text text-center lead fw-normal article-para'>We have seven locations across London, all with their personality and character. Together we can find the perfect home for you.</p>
    <div>
        <button type='button' className='article-btn'>Get Started</button>
    </div> 
</div>
  )
}

export default Article