import React from 'react'
import Banner from '../layouts/Banner'
import Categories from '../layouts/Categories'
import TrendyProducts from '../layouts/TrendyProducts'
import DealOffWeek from '../layouts/DealOffWeek'
import DealTimer from '../layouts/DealTimer'

const Home = () => {
  return (
    <>
      <Banner/>
      <Categories/>
      <TrendyProducts/>
      <DealOffWeek/>
      <DealTimer/>
    </>
  )
}

export default Home