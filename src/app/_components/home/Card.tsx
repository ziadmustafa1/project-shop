"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Product {
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  outOfStock?: boolean;
  onSale?: boolean;
}

const products: Product[] = [
  { name: '"ONELINE basic" iron-gray', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', price: 350, originalPrice: 700, outOfStock: true },
  { name: '"KING OF CLOUD" BLACK', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', price: 420, originalPrice: 750, onSale: true },
  { name: '"KING OF CLOUD" offwhite', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', price: 420, originalPrice: 750, outOfStock: true },
  { name: '"ONELINE tie dye" gray on white (handmade)', image: 'https://wuilt-assets-v2-dev.s3.amazonaws.com/clzy8zzb909jj01n3e7kz1q2k_18.png', price: 450, originalPrice: 600, onSale: true },
]

export default function BestSellerGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">" BEST SELLER "</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-80">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.outOfStock && (
                <Badge variant="destructive" className="absolute top-2 left-2">Out of stock</Badge>
              )}
              {product.onSale && (
                <Badge variant="secondary" className="absolute top-2 right-2">SALE</Badge>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <div>
                <span className="text-lg font-bold">{product.price} EGP</span>
                <span className="text-sm text-muted-foreground line-through ml-2">{product.originalPrice} EGP</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}