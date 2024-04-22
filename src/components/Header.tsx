import Image from 'next/image'
import NextLogo from './NextLogo'
import SupabaseLogo from './SupabaseLogo'

export default function Header() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="flex items-center justify-center gap-8">
        <Image src="/Logo_Weiß_Rand.png" alt="PongTogether Logo" width={140} height={140} />
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <p className="mx-auto max-w-xl text-center text-3xl !leading-tight lg:text-4xl">
        <a
          className="font-bold hover:underline"
        >
          Bierpongturniere
        </a>{' '}
         aus Leidenschaft
      </p>
      <div className="my-8 w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent p-[1px]" />
    </div>
  )
}
