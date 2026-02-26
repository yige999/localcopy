import { Brain, Globe, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    emoji: "🧠",
    title: "Built-in Marketing Psychology",
    description:
      "Powered by AIDA & PAS frameworks. We don't just translate words—we optimize every sentence to trigger buying psychology.",
  },
  {
    icon: Globe,
    emoji: "🌍",
    title: "15+ Localized Tones",
    description:
      "Includes local slang, authentic shopping habits, and deep cultural nuances. Speak like a local, sell like a native.",
  },
  {
    icon: Zap,
    emoji: "⚡️",
    title: "Zero Prompting Needed",
    description:
      "One-click magic. No ChatGPT skills or complex prompt engineering required. Just paste and convert.",
  },
]

export function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            More Than Translation. It&apos;s Conversion Optimization.
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We don&apos;t just translate words – we adapt your message to local buying psychology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-white border border-neutral-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
