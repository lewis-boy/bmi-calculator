import Explanation from '@/components/Explanation'
import Hero from '@/components/Hero'
import Limitations from '@/components/Limitations'
import Methods from '@/components/Methods'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Explanation />
      <Methods />
      <Limitations />
    </main>
  )
}
