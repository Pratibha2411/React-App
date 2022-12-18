import React from 'react';

import { Footer, Carousel, Searchbar, Features, Faqs, Header, Hero } from './containers';
import { Article, CTA, Navbar, PropertyZero, PropertyOne, PropertyTwo, About } from './components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
{/* <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css" /> */}

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
        <PropertyZero />  
        <PropertyOne />  
        <PropertyTwo />  
        <About />
        <Hero />
        <Carousel />
        <Faqs />
        <CTA />
        <Features />
        <Footer />
    </div>
    )
};
<script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
export default App;
