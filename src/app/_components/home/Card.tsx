'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface Product {
  name: string;
  image: string;
  hoverImage: string;
  price: number;
  originalPrice: number;
  outOfStock?: boolean;
  onSale?: boolean;
}

const products: Product[] = [
  {
    name: '"ONELINE basic" iron-gray',
    image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png',
    hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png',
    price: 350,
    originalPrice: 700,
    outOfStock: true
  },
  {
    name: '"KING OF CLOUD" BLACK',
    image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png',
    hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png',
    price: 420,
    originalPrice: 750,
    onSale: true
  },
  {
    name: '"KING OF CLOUD" offwhite',
    image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png',
    hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png',
    price: 420,
    originalPrice: 750,
    outOfStock: true
  },
  {
    name: '"ONELINE tie dye" gray on white',
    image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png',
    hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png',
    price: 450,
    originalPrice: 600,
    onSale: true
  },
]

export default function BestSellerGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">" BEST SELLER "</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTransition = () => {
    setIsTransitioning(true)
  }

  return (
    <Card
      className="overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="/product-page" onClick={handleTransition}>
        <div className="relative h-80 overflow-hidden">
          <motion.img
            src={isHovered ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            initial={false}
            animate={isTransitioning ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          {product.outOfStock && (
            <Badge variant="destructive" className="absolute top-2 left-2">Out of stock</Badge>
          )}
          {product.onSale && (
            <Badge variant="secondary" className="absolute top-2 right-2">SALE</Badge>
          )}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                    Select options
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>
      <CardContent className="p-4">
        <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="w-full">
          <div className="mb-2">
            <span className="text-lg font-bold">{product.price} EGP</span>
            <span className="text-sm text-muted-foreground line-through ml-2">{product.originalPrice} EGP</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}