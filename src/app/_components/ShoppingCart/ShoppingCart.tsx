"use client"
import { useState } from 'react'
import { ShoppingBag, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import { Button } from "@/components/ui/button"

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingBag className="h-4 w-4" />
          <span className="sr-only">Open cart</span>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed right-0 top-0 h-full w-full max-w-sm bg-white p-6 shadow-lg focus:outline-none">
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
            <ShoppingBag className="h-16 w-16 text-gray-400" />
            <p className="text-xl font-semibold">Your cart is empty!</p>
            <p className="text-sm text-gray-500">Looks like you haven't added anything to your cart yet</p>
            <Button onClick={() => setIsOpen(false)}>Start Shopping</Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}