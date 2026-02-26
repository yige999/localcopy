"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    try {
      // Send to Google Sheet
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
    } catch (error) {
      console.error("Error submitting email:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-8">
          <span className="text-orange-600 text-sm font-medium">
            🚀 Launching Soon for Early Adopters
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6 leading-tight">
          Stop Tanking Your{" "}
          <span className="text-orange-500">Shopify Conversions</span>{" "}
          with Robotic Translations.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Instantly transform dry product descriptions into highly-converting, localized marketing copy.
          <span className="font-semibold text-neutral-900"> Built for e-commerce brands to boost international sales by up to 300%.</span>
        </p>

        {/* CTA Form */}
        <div id="waitlist" className="max-w-md mx-auto">
          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <span className="text-green-700 font-medium">
                Thanks for joining! We&apos;ll be in touch soon.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button
                type="submit"
                variant="cta"
                size="lg"
                disabled={isLoading}
                className="whitespace-nowrap"
              >
                {isLoading ? (
                  "Joining..."
                ) : (
                  <>
                    🚀 Get Early Access & 50% Off
                  </>
                )}
              </Button>
            </form>
          )}
          <p className="text-sm text-neutral-500 mt-4">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
