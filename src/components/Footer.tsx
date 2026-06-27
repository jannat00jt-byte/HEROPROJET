import { Globe, Mail, ArrowUp } from 'lucide-react'

const footerLinks = ['Features', 'Pricing', 'About', 'Privacy', 'Terms', 'Contact']

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black border-t border-white/5 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe size={24} className="text-white" />
              <span className="text-white font-semibold text-lg">Asme</span>
            </div>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              A premium suite of conversion tools crafted for creators, developers, and curious minds.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/60 hover:text-white transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-auto">
            <p className="text-white/80 text-sm font-medium mb-3">Stay in the loop</p>
            <div className="liquid-glass rounded-full pl-4 pr-1.5 py-1.5 flex items-center gap-2 max-w-xs">
              <Mail size={16} className="text-white/40 shrink-0" />
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent text-white placeholder:text-white/30 text-sm outline-none"
              />
              <button className="bg-white rounded-full p-2 text-black shrink-0">
                <ArrowUp size={14} className="rotate-90" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/30 text-xs">&copy; 2026 Asme. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="liquid-glass rounded-full p-3 text-white/60 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
