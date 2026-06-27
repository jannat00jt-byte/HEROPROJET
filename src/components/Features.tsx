import { Image, Music, FileText, Video, Ruler, DollarSign } from 'lucide-react'

const features = [
  {
    icon: Image,
    title: 'Image Conversion',
    desc: 'Convert between PNG, JPG, WEBP, SVG and more with lossless quality.',
  },
  {
    icon: Video,
    title: 'Video Conversion',
    desc: 'MP4, MOV, AVI, MKV — resize, compress, and reformat effortlessly.',
  },
  {
    icon: Music,
    title: 'Audio Conversion',
    desc: 'MP3, WAV, FLAC, AAC — high-fidelity audio in any format you need.',
  },
  {
    icon: FileText,
    title: 'Document Conversion',
    desc: 'PDF to DOCX, Excel to CSV, and everything in between.',
  },
  {
    icon: Ruler,
    title: 'Unit Conversion',
    desc: 'Length, mass, volume, temperature — instant and accurate.',
  },
  {
    icon: DollarSign,
    title: 'Currency Conversion',
    desc: 'Real-time exchange rates for 170+ world currencies.',
  },
]

export default function Features() {
  return (
    <section className="relative bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-white text-center mb-4 tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Everything you need to convert
        </h2>
        <p className="text-white/60 text-center text-sm mb-16 max-w-lg mx-auto">
          From media files to measurements — a full suite of tools at your fingertips.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="liquid-glass rounded-2xl p-6 hover:bg-white/5 transition-colors">
              <div className="liquid-glass rounded-full p-3 w-fit mb-4">
                <Icon size={22} className="text-white/90" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
