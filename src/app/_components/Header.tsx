import { Search, ShoppingCart, Instagram, Phone } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-4 sticky top-0">
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl font-bold">O</div>
        <div className="flex-1 mx-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="What are you looking for?"
              className="w-full pl-10 pr-4"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="login">
          <Button variant="ghost">Login</Button>
          </Link>
          <Button variant="outline" className="flex items-center">
            <ShoppingCart className="mr-2" size={20} />
            <span>0 EGP</span>
          </Button>
        </div>
      </div>
      <nav className="flex justify-between items-center">
        <ul className="flex space-x-4">
          <li><a href="home" className="hover:text-gray-600">Home</a></li>
          <li><a href="shop" className="hover:text-gray-600">Shop</a></li>
          <li><a href="contact" className="hover:text-gray-600">Contact</a></li>
        </ul>
        <div className="flex space-x-2">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Phone size={20} />
          </a>
        </div>
      </nav>
    </header>
  )
}