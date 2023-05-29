import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function Navigation() {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-20 py-10 z-10">
      <Link href="/">
        <Image
          src="/koentjiWhiteLogo.svg"
          alt="Koentji Logo"
          width={150}
          height={150}
          className="w-auto h-auto"
        />
      </Link>

      <div className="text-white flex gap-10 items-center">
        <Link href="#" className="font-medium hover:text-zinc-200">
          WHY US
        </Link>
        <Link href="#" className="font-medium hover:text-zinc-200">
          ABOUT
        </Link>
        <Link href="#" className="font-medium hover:text-zinc-200">
          PORTFOLIO
        </Link>
        <Button>Contact Us</Button>
      </div>
    </div>
  )
}
