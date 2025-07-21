import React from 'react'
import Banner from '../layouts/Banner'
import Categories from '../layouts/Categories'
import TrendyProducts from '../layouts/TrendyProducts'
import DealOffWeek from '../layouts/DealOffWeek'
import DealTimer from '../layouts/DealTimer'
import LimitedAdition from '../layouts/LimitedAdition'
import Instagram from '../layouts/Instagram'
import Icons from '../layouts/Icons'

const Home = () => {
  return (
    <>
      <Banner/>
      <Categories/>
      <TrendyProducts/>
      <DealOffWeek/>
      <DealTimer/>
      <LimitedAdition/>
      <Instagram/>
      <Icons/>
    </>
  )
}

export default Home