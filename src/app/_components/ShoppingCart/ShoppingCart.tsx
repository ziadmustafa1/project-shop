'use client'

import { useState, useEffect } from 'react'
import { ShoppingBag, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from "@/components/ui/button"
import { useApi } from '@/lib/useApi'

interface Product {
  _id: string;
  name: string;
  price: number;
}

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<Product[]>([])
  const { data: products, error, isLoading, fetchData } = useApi<Product[]>()

  useEffect(() => {
    fetchData('/api/products')
  }, [])

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product])
  }

  const removeFromCart = (productId:  string) => {
    setCartItems(cartItems.filter(item => item._id !== productId))
  }

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingBag className="h-4 w-4" />
          <span className="sr-only">Open cart</span>
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed right-0 top-0 h-full w-full max-w-sm bg-background p-6 shadow-lg focus:outline-none">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-semibold">Shopping Cart</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </Dialog.Close>
          </div>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : cartItems.length === 0 ? (
            <div className="mt-8 flex flex-col items-center justify-center space-y-4">
              <ShoppingBag className="h-16 w-16 text-gray-400" />
              <p className="text-xl font-semibold">Your cart is empty!</p>
              <p className="text-sm text-gray-500">Looks like you haven't added anything to your cart yet</p>
              <Button onClick={() => setIsOpen(false)}>Start Shopping</Button>
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                  <Button variant="ghost" size="sm" onClick={() => removeFromCart(item._id)}>Remove</Button>
                </div>
              ))}
              <div className="pt-4 border-t">
                <p className="text-lg font-semibold">Total: ${cartTotal.toFixed(2)}</p>
              </div>
              <Button className="w-full">Checkout</Button>
            </div>
          )}
          {products && products.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Available Products</h3>
              {products.map((product) => (
                <div key={product._id} className="flex items-center justify-between mb-2">
                  <span>{product.name}</span>
                  <span>${product.price.toFixed(2)}</span>
                  <Button variant="outline" size="sm" onClick={() => addToCart(product)}>Add to Cart</Button>
                </div>
              ))}
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}