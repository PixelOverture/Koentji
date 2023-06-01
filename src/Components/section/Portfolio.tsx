import Image from 'next/image'
import Clients from './Clients'
import Button from '../Button'

export default function Portfolio() {
  return (
    <div>
      <div className="w-full relative -mt-10">
        <Image
          src="/bgImage2.jpg"
          alt="Image of a building"
          width={1366}
          height={400}
          className="w-full object-cover h-[400px] -scale-x-100"
        />

        <div className="absolute top-0 h-full flex flex-col justify-center w-full">
          <p className="px-20 font-bold text-2xl text-white">Portofolio</p>

          <div className="px-20 grid grid-cols-5 text-white mt-8">
            <p className="font-bold text-5xl col-span-3 leading-tight max-w-xl">
              Severals finished projects we proud to show you
            </p>

            <p className="text-lg col-span-2 max-w-sm">
              Strengthen your brand image, increase visibility with our
              comprehensive services.
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/portfolio.jpg"
        alt="Portfolio"
        width={1366}
        height={700}
        className="w-full object-cover h-[700px]"
      />

      <Clients />

      <div className="w-full relative">
        <Image
          src="/bgImage2.jpg"
          alt="Image of a building"
          width={1366}
          height={400}
          className="w-full object-cover h-[400px]"
        />

        <div className="px-20 absolute top-0 h-full flex flex-col justify-center w-full text-center text-white items-center gap-6">
          <p className="font-bold text-2xl">Know Us More</p>
          <p className="text-5xl font-bold mb-2">Dont hesitate to grow</p>
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
  )
}
