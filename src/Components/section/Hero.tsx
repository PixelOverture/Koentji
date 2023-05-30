import Image from 'next/image'
import Navigation from '../Navigation'

export default function Hero() {
  return (
    <div className="relative">
      <Image
        src="/heroImage.jpg"
        alt="Hero image"
        width={1300}
        height={900}
        className="object-cover bg-no-repeat w-full h-auto -z-10"
      />

      <Navigation />

      <div className="absolute top-0 left-0 h-full flex flex-col justify-center text-white px-20 gap-8 max-w-5xl">
        <p className="font-bold text-xl">We&apos;re Koentji,</p>
        <p className="font-extrabold text-8xl">
          Your One Stop Corporate Imaging Partner
        </p>
        <p className="text-lg font-medium">
          “We understand the importance of your brand equity. Therefore we fully
          support your brand recognition through high quality products.”
        </p>
      </div>
    </div>
  )
}
