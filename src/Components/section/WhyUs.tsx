import Image from 'next/image'
import React from 'react'

export default function WhyUs() {
  return (
    <div className="relative">
      <Image
        src="/bgImage.jpg"
        alt="Image of a building"
        width={1366}
        height={600}
        className="w-full object-cover h-[600px]"
      />

      <div className="absolute top-32 w-full">
        <p className="px-20 font-bold text-2xl text-white">Why Us</p>

        <div className="px-20 grid grid-cols-3 text-white mt-8">
          <p className="font-bold text-5xl col-span-2 leading-tight">
            We supply the highest quality goods and services with strong
            accuracy and efficiency.
          </p>

          <p className="text-lg">
            Always wanting to provide the best for our customers, client
            satisfaction is our priority.
          </p>
        </div>

        <div className="px-20 mt-16 z-10 relative">
          <div className="grid grid-cols-3 shadow-xl">
            <div className="p-10 flex flex-col gap-6 bg-[#4F6A7D] text-white">
              <Image
                src="/icCertificate.svg"
                alt="Integrity"
                width={80}
                height={80}
              />
              <p className="font-bold text-2xl">Integrity</p>
              <p>
                We perform our business and partnership activities with honesty,
                dedication and responsibility based on respect to every single
                client.
              </p>
            </div>

            <div className="p-10 flex flex-col gap-6 bg-white text-[#525252]">
              <Image
                src="/icStar.svg"
                alt="Strive for excelence"
                width={80}
                height={80}
              />
              <p className="font-bold text-2xl">Strive For Excelence</p>
              <p>
                We are commited to give only the best for our client through
                excellent effective, high quality goods and services.
              </p>
            </div>

            <div className="p-10 flex flex-col gap-6 bg-[#4F6A7D] text-white">
              <Image
                src="/icTraining.svg"
                alt="Improvement"
                width={80}
                height={80}
              />
              <p className="font-bold text-2xl">Improvement</p>
              <p>
                We uphold innovation and development from time to time for the
                enhancement of the goods and services quality to stay at the
                forefront of reliable solution.
              </p>
            </div>

            <div className="p-10 flex flex-col gap-6 bg-white text-[#525252]">
              <Image
                src="/icPuzzle.svg"
                alt="Marketing Kit"
                width={80}
                height={80}
              />
              <p className="font-bold text-2xl">Marketing Kit</p>
              <p>
                Notebook, Magazine, Brochure, ID Card, Calendar, Merchandise,
                Banner and all of marketing materials.
              </p>
            </div>

            <div className="p-10 flex flex-col gap-6 bg-[#4F6A7D] text-white">
              <Image
                src="/icDirection.svg"
                alt="Event production"
                width={80}
                height={80}
              />
              <p className="font-bold text-2xl">Event Production</p>
              <p>Concept, Production, Publishing</p>
            </div>

            <div className="p-10 flex flex-col gap-6 bg-white text-[#525252]">
              <Image
                src="/icBusiness.svg"
                alt="Corporate identity"
                width={80}
                height={80}
              />
              <p className="font-bold text-2xl">Corporate Identity</p>
              <p>
                Uniform, T-shirt, Polo T-shirt, Jacket, Vest, Apron, Hat,
                Banner, Backpack, Bag, Tote Bag, Packaging, etc
              </p>
            </div>
          </div>
        </div>

        <div className="-translate-y-10 relative">
          <Image
            src="/bgImage2.jpg"
            alt="Image of a building"
            width={1366}
            height={400}
            className="w-full object-cover h-[400px]"
          />

          <div className="absolute top-0 h-full flex flex-col justify-center">
            <p className="px-20 font-bold text-2xl text-white">Services</p>

            <div className="px-20 grid grid-cols-5 text-white mt-8">
              <p className="font-bold text-5xl col-span-3 leading-tight">
                Elevate your marketing strategy with us.
              </p>

              <p className="text-lg col-span-2 max-w-sm">
                Strengthen your brand image, increase visibility with our
                comprehensive services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
