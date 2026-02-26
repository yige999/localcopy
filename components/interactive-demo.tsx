"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sparkles, Loader2 } from "lucide-react"

const boringCopy = `Our neck pillow is made of memory foam. It helps you sleep better when traveling. The pillow is soft and comfortable. It comes with a carrying bag. Good for airplanes and cars. Available in gray color.`

const localizedOutputs: Record<string, { language: string; copy: string }> = {
  german: {
    language: "German",
    copy: `✅ Endlich entspannt reisen – kein steifer Nacken mehr!

Kennst du das? Stunden im Flugzeug oder Auto, und dein Nacken schreit vor Schmerzen? Unser Memory-Foam-Kissen passt sich perfekt deiner Kopfform an.

🎯 Warum 10.000+ Reisende uns vertrauen:
• Ergonomisches Design – stützt Kopf & Nacken optimal
• Premium Memory Foam – passt sich dir an, nicht umgekehrt
• Inklusive Reisebeutel – immer griffbereit

⚡️ Jetzt bestellen = Gratis Versand!`,
  },
  japanese: {
    language: "Japanese",
    copy: `✅ 旅行中の首の痛みにサヨナラ！

長時間のフライトや車移動で首が凝っていませんか？
私たちのメモリーフォームピローが、あなたの頭の形にぴったりフィット。

🎯 10,000人以上の旅行者が選ぶ理由：
• 人間工学デザイン – 頭と首を完璧にサポート
• 高級メモリーフォーム – あなたに合わせて成形
• 旅行用ポーチ付き – いつでも持ち運び便利

⚡️ 今なら送料無料！`,
  },
  spanish: {
    language: "Spanish",
    copy: `✅ ¡Adiós al dolor de cuello en tus viajes!

¿Pasas horas en avión o coche con el cuello rígido?
Nuestra almohada de espuma viscoelástica se adapta perfectamente a ti.

🎯 Por qué +10.000 viajeros confían en nosotros:
• Diseño ergonómico – soporte perfecto para cuello y cabeza
• Espuma viscoelástica premium – se moldea a ti
• Incluye funda de viaje – siempre a mano

⚡️ ¡Pide ahora = Envío gratis!`,
  },
}

export function InteractiveDemo() {
  const [selectedAudience, setSelectedAudience] = useState("german")
  const [isTransforming, setIsTransforming] = useState(false)
  const [showResult, setShowResult] = useState(true)

  const handleMagicRewrite = () => {
    setIsTransforming(true)
    setShowResult(false)
    setTimeout(() => {
      setIsTransforming(false)
      setShowResult(true)
    }, 1500)
  }

  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            See the Magic in Action
          </h2>
          <p className="text-lg text-neutral-600">
            From boring product description to high-converting local copy – in one click.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            {/* Left: Input */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="ml-2 text-sm font-medium text-neutral-500">
                  Your Boring Copy (English)
                </span>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4 h-64 overflow-y-auto">
                <p className="text-neutral-600 text-sm leading-relaxed whitespace-pre-line">
                  {boringCopy}
                </p>
              </div>
            </div>

            {/* Middle: Controls */}
            <div className="p-6 flex flex-col justify-center items-center gap-6 bg-neutral-50/50">
              <div className="w-full">
                <label className="text-sm font-medium text-neutral-700 mb-2 block">
                  Target Audience
                </label>
                <Select value={selectedAudience} onValueChange={setSelectedAudience}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="german">🇩🇪 German (Trust-focused)</SelectItem>
                    <SelectItem value="japanese">🇯🇵 Japanese (Polite & Detailed)</SelectItem>
                    <SelectItem value="spanish">🇪🇸 Spanish (Warm & Emotional)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                variant="cta"
                size="lg"
                onClick={handleMagicRewrite}
                disabled={isTransforming}
                className="w-full"
              >
                {isTransforming ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Transforming...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Magic Rewrite
                  </>
                )}
              </Button>

              <p className="text-xs text-neutral-500 text-center">
                ✨ No prompts needed – just click and convert
              </p>
            </div>

            {/* Right: Output */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                <span className="ml-2 text-sm font-medium text-orange-600">
                  LocalCopy Output ({localizedOutputs[selectedAudience]?.language})
                </span>
              </div>
              <div
                className={`bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-lg p-4 h-64 overflow-y-auto transition-all duration-500 ${
                  isTransforming
                    ? "opacity-0 scale-95"
                    : showResult
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <p className="text-neutral-800 text-sm leading-relaxed whitespace-pre-line font-medium">
                  {localizedOutputs[selectedAudience]?.copy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
