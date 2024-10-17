"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, UserPlus, LogIn } from 'lucide-react'

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Password reset requested for:', email)
    // Here you would typically handle the password reset logic
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Forgot password?</CardTitle>
        <p className="text-center text-gray-600">
          Don't worry! Enter your email address.<br />
          We'll send you password reset link.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full mt-6">
            Reset Password
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="flex items-center justify-center w-full">
          <UserPlus className="mr-2" size={20} />
          <span className="text-sm text-gray-600">
            Don't Have an Account?{' '}
            <a href="registration" className="text-blue-600 hover:underline font-semibold">
              Create Account
            </a>
          </span>
        </div>
        <div className="flex items-center justify-center w-full">
          <LogIn className="mr-2" size={20} />
          <span className="text-sm text-gray-600">
            Remember your password?{' '}
            <a href="login" className="text-blue-600 hover:underline font-semibold">
              Login to your account
            </a>
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}
