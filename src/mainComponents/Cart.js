import React from 'react'
import Header from '../components/Homepage/Alljs/Header';
import NewsLetter from '../components/Homepage/Alljs/NewsLetter';
import Footer from '../components/Homepage/Alljs/Footer';
import HeroHeader from '../components/aboutpage/jsx/HeroHeader';
import CardDetail from '../components/cartpage/jsx/CardDetail';
import CartCoupon from '../components/cartpage/jsx/CartCoupon';

const Cart = () => {
  return (
    <>
       <Header/>
       <HeroHeader/>
       <CardDetail/>
       <CartCoupon/>
       <NewsLetter/>
       <Footer/>
    </>
  )
}

export default Cart;