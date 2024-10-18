'use client'

import { useState } from 'react'
import { Search, ShoppingCart, Instagram, Phone, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartTotal, setCartTotal] = useState(0)

  return (
    <header className="container mx-auto px-4 py-4 sticky top-0 bg-background z-10">
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
        <div className="flex items-center space-x-4 z-50">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Dialog.Root open={isCartOpen} onOpenChange={setIsCartOpen}>
            <Dialog.Trigger asChild>
              <Button variant="outline" className="flex items-center">
                <ShoppingCart className="mr-2" size={20} />
                <span>{cartTotal} EGP</span>
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />
              <Dialog.Content className="fixed z-50 right-0 top-0 h-full w-full max-w-sm bg-background p-6 shadow-lg focus:outline-none">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-lg font-semibold">Shopping Cart</Dialog.Title>
                  <Dialog.Close asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </Dialog.Close>
                </div>
                <div className="mt-8 flex flex-col items-center justify-center space-y-4">
                  <ShoppingCart className="h-16 w-16 text-gray-400" />
                  <p className="text-xl font-semibold">Your cart is empty!</p>
                  <p className="text-sm text-gray-500">Looks like you haven't added anything to your cart yet</p>
                  <Link href="/shop">
                  <Button onClick={() => setIsCartOpen(false)}>Start Shopping</Button>
                  </Link>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <nav className="flex justify-between items-center">
        <ul className="flex space-x-4">
          <li><Link href="/home" className="hover:text-gray-600">Home</Link></li>
          <li><Link href="/shop" className="hover:text-gray-600">Shop</Link></li>
          <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
        </ul>
        <div className="flex space-x-2">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <Phone size={20} />
            <span className="sr-only">Phone</span>
          </a>
        </div>
      </nav>
    </header>
  )
}