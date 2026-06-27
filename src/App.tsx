import Hero from './components/Hero'
import Features from './components/Features'
import Tools from './components/Tools'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <Features />
      <Tools />
      <Footer />
    </main>
  )
}
