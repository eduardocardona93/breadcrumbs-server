import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Browser from '../components/Browser'
import { Link, useLocation } from 'react-router-dom'

const Home = () => {
  let location = useLocation();
  const currLocation = location.pathname ;

  return (
    <div className='layout'>
        <h1>File browser</h1>
        <Breadcrumbs currLocation={currLocation}></Breadcrumbs>
        <Browser currLocation={currLocation}></Browser>
    </div>
  )
}

export default Home