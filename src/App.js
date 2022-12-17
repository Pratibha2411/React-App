import React from 'react';

import { Footer, Carousel, Searchbar, Features, Faqs, Header, Hero } from './containers';
import { Article, CTA, Navbar, Feature, About } from './components';

import './App.css';

const App = () => {
  return(
    <div className='App'>
      <div className='gradient-bg'>
        <Navbar />
      </div>
        <Searchbar />  
        <Header />
        <Article />
        <CTA />
        <Feature />  
        <About />
        <Hero />
        <Carousel />
        <Faqs />
        <Features />
        <Footer />
    </div>
    )
};
export default App;
