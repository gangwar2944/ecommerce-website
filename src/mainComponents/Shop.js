import React from 'react';
import Header from "../components/Homepage/Alljs/Header";
import FeatureProduct from "../components/Homepage/Alljs/FeatureProduct";
import NewsLetter from "../components/Homepage/Alljs/NewsLetter";
import ShopHeader from "../components/shoppage/jsx/ShopHeader";
import Pagination from "../components/shoppage/jsx/Pagination"
import Footer from '../components/Homepage/Alljs/Footer';

const  Shop=()=> {
    return (
        <div>
            <Header/>
            <ShopHeader/>
            <FeatureProduct/>
            <Pagination/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
}

export default Shop;

