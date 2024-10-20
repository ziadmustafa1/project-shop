'use client'

import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SlidersHorizontal } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface Product {
  id: number;
  name: string;
  image: string;
  hoverImage: string;
  price: number;
  originalPrice?: number;
  outOfStock: boolean;
  onSale: boolean;
}

const products: Product[] = [
  { id: 1, name: '"ONELINE basic" iron-gray', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png', price: 350, originalPrice: 700, outOfStock: true, onSale: false },
  { id: 2, name: '" JUST ONELINE " offwhite', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png', price: 299, originalPrice: 750, outOfStock: false, onSale: true },
  { id: 3, name: '"BMW M3 GTR " iron-gray', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png', price: 450, outOfStock: true, onSale: false },
  { id: 4, name: '" BMW M3 GTR " offwhite', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png', price: 450, outOfStock: true, onSale: false },
  { id: 5, name: '"ONELINE basic" iron-gray', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png', price: 350, originalPrice: 700, outOfStock: true, onSale: false },
  { id: 6, name: '" JUST ONELINE " offwhite', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png', price: 299, originalPrice: 750, outOfStock: false, onSale: true },
  { id: 7, name: '"BMW M3 GTR " iron-gray', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png', price: 450, outOfStock: true, onSale: false },
  { id: 8, name: '" BMW M3 GTR " offwhite', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png', price: 450, outOfStock: true, onSale: false },
  { id: 9, name: '"ONELINE basic" iron-gray', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png', price: 350, originalPrice: 700, outOfStock: true, onSale: false },
  { id: 10, name: '" JUST ONELINE " offwhite', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png', price: 299, originalPrice: 750, outOfStock: false, onSale: true },
  { id: 11, name: '"BMW M3 GTR " iron-gray', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png', price: 450, outOfStock: true, onSale: false },
  { id: 12, name: '" BMW M3 GTR " offwhite', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', hoverImage: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy9016909jk01n390yp6yqw_19.png', price: 450, outOfStock: true, onSale: false },
]

function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href="/product-page">
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={isHovered ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            initial={false}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
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
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">{product.originalPrice} EGP</span>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default function ProductGrid() {
  const [sorting, setSorting] = useState('default')

  const sortedProducts = [...products].sort((a, b) => {
    if (sorting === 'price-low-high') return a.price - b.price
    if (sorting === 'price-high-low') return b.price - a.price
    return 0
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filter
        </Button>
        <Select onValueChange={setSorting} defaultValue={sorting}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default Sorting</SelectItem>
            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}