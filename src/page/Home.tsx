import React from 'react'
import Navbar from '../componens/Navbar'
import Footer from '../componens/Footer'
import Rating from '../componens/Rating'
import Card from '../componens/Card'
import Header from '../componens/Header'
import CardTour from '../componens/CardTour'
const Home = () => {

  return (
    <>
    <Navbar />
    <Header />
    <Card />
    <Rating />
    <Footer />
    {/* <CardTour /> */}
    {/* <div className='text-2xl flex font-bold'>home</div> */}
    </>
  )
}

export default Home