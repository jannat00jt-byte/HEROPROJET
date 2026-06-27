import { FileImage, FileVideo, FileAudio, FileText as FileDoc, Ruler, DollarSign, ArrowRight } from 'lucide-react'

const tools = [
  { icon: FileImage, name: 'Image Converter', desc: 'PNG, JPG, WEBP, SVG, GIF', popular: true },
  { icon: FileVideo, name: 'Video Converter', desc: 'MP4, MOV, AVI, MKV, WEBM' },
  { icon: FileAudio, name: 'Audio Converter', desc: 'MP3, WAV, FLAC, AAC, OGG' },
  { icon: FileDoc, name: 'Document Converter', desc: 'PDF, DOCX, XLSX, CSV, TXT', popular: true },
  { icon: Ruler, name: 'Unit Converter', desc: 'Length, mass, volume, temperature' },
  { icon: DollarSign, name: 'Currency Converter', desc: '170+ currencies, live rates', popular: true },
]

export default function Tools() {
  return (
    <section className="relative bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2
              className="text-4xl md:text-5xl text-white tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              All tools
            </h2>
            <p className="text-white/60 text-sm mt-2">Choose a tool to get started instantly.</p>
          </div>
          <button className="hidden md:flex liquid-glass rounded-full px-6 py-3 text-white text-sm font-medium items-center gap-2 hover:bg-white/5 transition-colors">
            View all <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map(({ icon: Icon, name, desc, popular }) => (
            <button
              key={name}
              className="liquid-glass rounded-xl p-5 text-left hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="liquid-glass rounded-full p-2.5">
                  <Icon size={20} className="text-white/90" />
                </div>
                <span className="text-white font-medium">{name}</span>
                {popular && (
                  <span className="ml-auto text-[10px] uppercase tracking-widest text-white/40 bg-white/5 rounded-full px-3 py-1">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-white/50 text-xs ml-[52px]">{desc}</p>
            </button>
          ))}
        </div>

        <button className="md:hidden w-full liquid-glass rounded-full px-6 py-3 text-white text-sm font-medium mt-6 flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
          View all tools <ArrowRight size={16} />
        </button>
      </div>
    </section>
  )
}
