"use client"
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { PlusCircle, Trash2, Edit, Eye } from 'lucide-react'

// Mock data for demonstration
const mockOrders = [
  { id: 1, customer: 'John Doe', product: 'T-Shirt', quantity: 2, total: 50 },
  { id: 2, customer: 'Jane Smith', product: 'Jeans', quantity: 1, total: 75 },
]

const mockProducts = [
  { id: 1, name: 'T-Shirt', price: 25, discountPrice: 20, category: 'Clothing', visits: 150 },
  { id: 2, name: 'Jeans', price: 75, discountPrice: 60, category: 'Clothing', visits: 100 },
]

const mockAnalytics = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('add-product')
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productDiscountPrice, setProductDiscountPrice] = useState('')
  const [productCategory, setProductCategory] = useState('')
  const [productImages, setProductImages] = useState<File[]>([])

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Adding product:', { productName, productDescription, productPrice, productDiscountPrice, productCategory, productImages })
    // Implement product addition logic here
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProductImages(Array.from(e.target.files))
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">E-commerce Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="add-product">Add Product</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
        </TabsList>

        <TabsContent value="add-product">
          <Card>
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
              <CardDescription>Enter the details of the new product</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <Label htmlFor="product-name">Product Name</Label>
                  <Input id="product-name" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                </div>
                <div>
                  <Label htmlFor="product-description">Product Description</Label>
                  <Textarea id="product-description" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="product-price">Price</Label>
                    <Input id="product-price" type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
                  </div>
                  <div>
                    <Label htmlFor="product-discount-price">Discount Price</Label>
                    <Input id="product-discount-price" type="number" value={productDiscountPrice} onChange={(e) => setProductDiscountPrice(e.target.value)} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="product-category">Category</Label>
                  <Select value={productCategory} onValueChange={setProductCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="home">Home & Garden</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="product-images">Product Images</Label>
                  <Input id="product-images" type="file" multiple onChange={handleImageUpload} accept="image/*" />
                </div>
                <div>
                  <Label htmlFor="product-images">Product hoverImage</Label>
                  <Input id="product-hoverImage" type="file" multiple onChange={handleImageUpload} accept="image/*" />
                </div>
                <Button type="submit">Add Product</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>A list of recent orders and their details</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.product}</TableCell>
                      <TableCell>{order.quantity}</TableCell>
                      <TableCell>${order.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Sales Analytics</CardTitle>
              <CardDescription>View sales data for different time periods</CardDescription>
            </CardHeader>
            <CardContent>
              <Select defaultValue="month">
                <SelectTrigger>
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Day</SelectItem>
                  <SelectItem value="week">Week</SelectItem>
                  <SelectItem value="month">Month</SelectItem>
                  <SelectItem value="sixMonths">Six Months</SelectItem>
                  <SelectItem value="year">Year</SelectItem>
                </SelectContent>
              </Select>
              <div className="h-[300px] mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockAnalytics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card>
            <CardHeader>
              <CardTitle>Product List</CardTitle>
              <CardDescription>Manage and view analytics for all products</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Discount Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Visits</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell>${product.discountPrice}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.visits}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="icon"><Edit className="h-4 w-4" /></Button>
                          <Button variant="outline" size="icon"><Trash2 className="h-4 w-4" /></Button>
                          <Button variant="outline" size="icon"><Eye className="h-4 w-4" /></Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}