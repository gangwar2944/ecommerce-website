import React from 'react';
import Header from '../components/Homepage/Alljs/Header';
import Pagination from '../components/shoppage/jsx/Pagination';
import NewsLetter from '../components/Homepage/Alljs/NewsLetter';
import Footer from '../components/Homepage/Alljs/Footer';
import BlogPage from '../components/blogpage/jsx/BlogPage';
import BlogHeader from '../components/blogpage/jsx/BlogHeader';

const Blog = () => {
  return (
    <div>
       <Header/>
       <BlogHeader/>
       <BlogPage/>
       <Pagination/>
       <NewsLetter/>
       <Footer/>
    </div>
  )
}

export default Blog;