"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxQJalBmxh0E4pIK4bDfH1f_LcjM3WKwkQxQAXhVaolC8shICTNKi2qEHOc44NkwrlKVw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      )
      setIsSubmitted(true)
      setEmail("")
      // Auto close after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setIsOpen(false)
      }, 2000)
    } catch (error) {
      console.error("Error submitting email:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-neutral-900">
              LocalCopy AI
            </span>
          </a>

          {isOpen ? (
            isSubmitted ? (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">You&apos;re on the list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-48 md:w-64 h-10 text-sm"
                  required
                  autoFocus
                />
                <Button
                  type="submit"
                  variant="cta"
                  size="sm"
                  disabled={isLoading}
                  className="shrink-0"
                >
                  {isLoading ? "..." : "Join"}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="shrink-0 p-2"
                >
                  <X className="w-4 h-4" />
                </Button>
              </form>
            )
          ) : (
            <Button variant="outline" onClick={() => setIsOpen(true)}>
              Join Waitlist
            </Button>
          )}
        </div>
      </div>
    </nav>
  )
}
