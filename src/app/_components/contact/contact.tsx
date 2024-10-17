"use client"
import { useState } from 'react'
import { Instagram, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    body: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the form data to your backend
  }

  return (
    <div className=' pb-4'>
      <h1 className='text-4xl text-center bg-slate-50 py-7'>Contact Us</h1>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow my-4">
      <form onSubmit={handleSubmit} className="space-y-4 pb-4">
        <h3 className='text-center'>
        You can send your questions by filling out the form below and we will get back to you as soon as possible.
        </h3>
        <div>
          <Label htmlFor="name">Name <span className="text-red-500">*</span></Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone number <span className="text-red-500">*</span></Label>
          <div className="flex">
            <Select defaultValue="eg">
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="eg">
                  <span className="flex items-center">
                    <span className="mr-2">🇪🇬</span> +20
                  </span>
                </SelectItem>
                {/* Add more country options here */}
              </SelectContent>
            </Select>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              required
              className="flex-1 ml-2"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="subject">Subject <span className="text-red-500">*</span></Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Enter your subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="body">Body <span className="text-red-500">*</span></Label>
          <Textarea
            id="body"
            name="body"
            placeholder="Write your message..."
            required
            className="h-32"
            value={formData.body}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="w-full">Send</Button>
        <div className="flex flex-col items-center py-6">
      <p className="text-center mb-4">
        You can also follow & contact us through
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/your-instagram-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
        >
          <Instagram size={24} className="text-gray-700" />
        </a>
        <a
          href="https://wa.me/your-whatsapp-number"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
        >
          <Phone size={24} className="text-gray-700" />
        </a>
      </div>
    </div>
      </form>
      </div>
    </div>
  )
}