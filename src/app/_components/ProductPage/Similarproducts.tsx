import React from 'react'
import BestSellerGrid from '../home/Card'

export default function Similarproducts() {
  return (
    <div>
      <div className='flex justify-between border-b-2 mx-8'>
        <h1 className='p-5 text-xl font-bold'>Similar products</h1>
        <a className='p-5' href='shop'>See all products</a>
        </div>
      <div>
        <BestSellerGrid/>
      </div>
    </div>
  )
}
