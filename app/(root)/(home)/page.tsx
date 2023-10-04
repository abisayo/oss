import { ContentSection, HeroPage, SearchPage } from '@/components/index'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen items-center w-full pb-52">
      <HeroPage />
      <SearchPage />
      <ContentSection />
    </main>
  )
}
