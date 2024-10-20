"use client"
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PenIcon, ShoppingBag, MapPin } from 'lucide-react'

interface UserDetails {
  name: string;
  email: string;
  phone: string;
}

export default function AccountManagement() {
  const [activeTab, setActiveTab] = useState("account")
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "admin",
    email: "admin@gmail.com",
    phone: "+20111111111"
  })
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false)

  const handleEdit = (field: keyof UserDetails) => {
    // Implement edit functionality
    console.log(`Editing ${field}`)
  }

  const handleDeleteAccount = () => {
    // Implement account deletion
    console.log("Deleting account")
  }

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement address addition
    console.log("Adding new address")
    setIsAddressModalOpen(false)
  }

  return (
    <div className="container mx-auto p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">My Account</TabsTrigger>
          <TabsTrigger value="orders">My Orders</TabsTrigger>
          <TabsTrigger value="addresses">My Addresses</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <h2 className="text-2xl font-bold mb-4">My Account</h2>
          <div className="space-y-4">
            {Object.entries(userDetails).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <div>
                  <Label>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                  <p>{value}</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleEdit(key as keyof UserDetails)}>
                  <PenIcon className="h-4 w-4 mr-2" /> Edit
                </Button>
              </div>
            ))}
            <Button variant="destructive" onClick={handleDeleteAccount}>Delete Account</Button>
          </div>
        </TabsContent>
        <TabsContent value="orders">
          <h2 className="text-2xl font-bold mb-4">My Orders</h2>
          <div className="text-center py-8">
            <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-xl font-semibold">There are no orders yet!</p>
            <p className="text-gray-500">Looks like you haven't placed any orders</p>
            <a href='shop'>
            <Button className="mt-4">Start Shopping</Button>
            </a>
          </div>
        </TabsContent>
        <TabsContent value="addresses">
          <h2 className="text-2xl font-bold mb-4">My Addresses</h2>
          <div className="text-center py-8">
            <MapPin className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-xl font-semibold">There are no addresses yet!</p>
            <p className="text-gray-500">Add your addresses and we will save it for you in next purchases</p>
            <Dialog open={isAddressModalOpen} onOpenChange={setIsAddressModalOpen}>
              <DialogTrigger asChild>
                <Button className="mt-4">Add new address</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Address</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleAddAddress} className="space-y-4">
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="Enter your address" required />
                  </div>
                  <div>
                    <Label htmlFor="apartment">Apartment, suite, unit etc.</Label>
                    <Input id="apartment" placeholder="Enter your apartment number" required />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="egypt">Egypt</SelectItem>
                        {/* Add more countries as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="city">City/Governorate</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select City/Governorate" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cairo">Cairo</SelectItem>
                        {/* Add more cities as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="phone">Secondary phone no. (optional)</Label>
                    <Input id="phone" type="tel" placeholder="+20" />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setIsAddressModalOpen(false)}>Cancel</Button>
                    <Button type="submit">Save changes</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}