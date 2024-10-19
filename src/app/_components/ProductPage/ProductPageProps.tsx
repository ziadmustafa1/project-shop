'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Minus, Plus, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface ProductPageProps {
  name: string;
  price: number;
  originalPrice: number;
  images: string[];
  color: string;
  sizes: string[];
  description: string;
  washInstructions: string[];
  variant: string;
}

const products: ProductPageProps[] = [
  {
    name: "KING OF CLOUD BLACK",
    price: 420,
    originalPrice: 750,
    images: [
      "https://wuilt-assets-v2-dev.s3.amazonaws.com/clykbv72m0ibk01hy8l6levxl_5.png",
      "https://wuilt-assets-v2-dev.s3.amazonaws.com/clykbva0c0ibl01hy6i2lb80m_7.png",
      "https://wuilt-assets-v2-dev.s3.amazonaws.com/clykbv56q0ibj01hy1yosd13r_3.png",
      "https://wuilt-assets-v2-dev.s3.amazonaws.com/clykbv25j0ibi01hy9re69wpk_2.png",
      "https://wuilt-assets-v2-dev.s3.amazonaws.com/clwpbitqu0k8t01gi2bf805b6_Untitled_design__15_.png"
    ],
    color: "Black",
    sizes: ["Small", "Medium", "Large"],
    variant: "KING OF CLOUD basic",
    description: "تيشرت اوفر سايز من لاين. معمول من قطن تركي معالج ضد الانكماش والبرم عالي الجودة و ده معناه انه هيفضل مريح و مثبت دايما . التصميم عبارة عن مزيج بين البساطة والابداع. عاوزين نوصل رسالة هدفها انه ينفع نعمل حاجة ابداعية بطريقة بسيطة م معقدة ONE LINE لأننا في . التيشرت بتاعنا مناسب جدا للناس اللي بتحب تلبس الحاجات البسيطة الابداعية المريحة. ينفع تلبسه في اي مناسبة او مكان لأنه بسيط و عملي. عملية الطباعة اللي بنعملها في الديزاين بتشتغل عددهم بتقليل او تغير لون الطباعة. وده معناه انه هيفضل معاك و صابتك عاطول",
    washInstructions: [
      "غسيل ناعم بدرجة حرارة 30 درجة مئوية",
      "لا تستعمل مبيض",
      "لا تجففه بالمجفف",
      "اكويه و هوا مقلوب",
      "لا تستخدم التنظيف الجاف الكيميائي"
    ],
  }
]

export default function ProductPage() {
  const product = products[0] // For this example, we'll use the first product
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].toLowerCase())
  const [quantity, setQuantity] = useState(1)
  const [currentImage, setCurrentImage] = useState(0)

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${selectedSize} ${product.name} to cart`)
  }

  const handleBuyNow = () => {
    console.log(`Buying ${quantity} ${selectedSize} ${product.name} now`)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center text-sm mb-4">
        <ChevronLeft className="w-4 h-4 mr-1" />
        <span className="text-gray-500">Shop</span>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            {product.images.length > 0 ? (
              <Image
                src={product.images[currentImage]}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
            {product.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Previous image</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Next image</span>
                </Button>
              </>
            )}
            <span className="absolute bottom-2 left-2 bg-white/80 px-2 py-1 rounded text-xs">
              Hover to zoom & click to enlarge
            </span>
          </div>
          {product.images.length > 0 && (
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-20 h-20 relative ${index === currentImage ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setCurrentImage(index)}
                >
                  <Image src={img} alt={`${product.name} thumbnail ${index + 1}`} layout="fill" objectFit="cover" className="rounded" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="space-y-6">
          <div className="inline-block bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            SALE
          </div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div>
            <h2 className="text-lg font-medium mb-2">Color</h2>
            <div className="inline-block bg-black text-white px-3 py-1 rounded-full">
              {product.color}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-2">SIZE</h2>
            <RadioGroup defaultValue={selectedSize} onValueChange={setSelectedSize}>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <div key={size.toLowerCase()}>
                    <RadioGroupItem value={size.toLowerCase()} id={size.toLowerCase()} className="peer sr-only" />
                    <Label
                      htmlFor={size.toLowerCase()}
                      className="flex items-center justify-center px-3 py-2 bg-white border rounded-md text-sm font-medium peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold">{product.price} EGP</span>
            <span className="text-xl text-gray-500 line-through">{product.originalPrice} EGP</span>
          </div>
          <div className="flex space-x-4">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to cart
            </Button>
            <Button className="flex-1" onClick={handleBuyNow}>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8" >
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <h2 className="text-xl mb-6">{product.variant}</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2 pl-3">Color</h3>
            <div className="inline-block bg-black text-white px-3 py-1 rounded-full">
              {product.color}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">SIZE</h3>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <div key={size}>
                    <RadioGroupItem value={size} id={size} className="peer sr-only" />
                    <Label
                      htmlFor={size}
                      className="flex items-center justify-center px-3 py-2 bg-white border rounded-md text-sm font-medium peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-6" dir='rtl'>
          <div>
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p>{product.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2 text-red-500">خطوات الغسيل</h3>
            <ul className="list-disc list-inside">
              {product.washInstructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}