export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">L</span>
            </div>
            <span className="font-semibold text-neutral-900">LocalCopy AI</span>
          </div>
          <p className="text-sm text-neutral-500">
            © 2025 LocalCopy AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
