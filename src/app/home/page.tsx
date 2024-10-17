import React from 'react'
import Card from '../_components/home/Card'
import Swiper from '../_components/home/Swiper'

export default function home() {
  return (
    <div>
      <Swiper/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <div>
        <h1 className='flex justify-center text-5xl py-10'>
        whats app
        </h1>
      </div>
    </div>
  )
}
