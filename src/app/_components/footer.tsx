import React from 'react'
import { Search, ShoppingCart, Instagram, Phone } from 'lucide-react'
export default function Footer() {
  return (
    <div className=''>
     <div className="text-6xl font-bold flex justify-center">O</div>
     <div>
     <ul className="flex space-x-4 mt-3">
          <li><a href="#" className="hover:text-gray-600">Home</a></li>
          <li><a href="#" className="hover:text-gray-600">Shop</a></li>
          <li><a href="#" className="hover:text-gray-600">Contact</a></li>
          <li><a href="#" className="hover:text-gray-600">privacy-policy</a></li>
        </ul>
     </div>
     <div className="flex justify-center mt-5 space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Phone size={20} />
          </a>
        </div>
    </div>
  )
}
