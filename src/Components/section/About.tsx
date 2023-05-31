import Image from 'next/image'

export default function About() {
  return (
    <div className="px-20 py-32 text-[#525252]">
      <p className="font-bold text-2xl">About Us</p>

      <div className="flex justify-between mt-8">
        <p className="font-bold text-5xl leading-tight">
          Our journey on Serving wholeheartedly
        </p>

        <p className="text-lg max-w-sm">
          Of course, this is not something instant. But the time that has passed
          has been a proof to the fact that we continue to grow.
        </p>
      </div>

      <div className="grid grid-cols-2 mt-16">
        <div className="border-b border-r">
          <div className="flex flex-col gap-6 max-w-sm p-11">
            <Image
              src="/icDirectionGray.svg"
              alt="Business"
              width={80}
              height={80}
            />
            <p className="font-bold text-2xl">2012</p>
            <p>
              We started from the bottom, and of course this is normal, as time
              goes on we keep improving. We never stop.
            </p>
          </div>
        </div>

        <div className="border-b">
          <div className="flex flex-col gap-6 max-w-sm p-11">
            <Image
              src="/icDirectionGray.svg"
              alt="Business"
              width={80}
              height={80}
            />
            <p className="font-bold text-2xl">Mid-2015</p>
            <p>
              Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin
              metus, volutpat lacinia arcu nibh vel ante.
            </p>
          </div>
        </div>

        <div className="border-r">
          <div className="flex flex-col gap-6 max-w-sm p-11">
            <Image
              src="/icDirectionGray.svg"
              alt="Business"
              width={80}
              height={80}
            />
            <p className="font-bold text-2xl">Mid-2017</p>
            <p>
              Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin
              metus, volutpat lacinia arcu nibh vel ante.
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-6 p-11">
            <Image
              src="/icDirectionGray.svg"
              alt="Business"
              width={80}
              height={80}
            />
            <p className="font-bold text-2xl">End of 2022</p>
            <p>
              Ut sodales, ex sit amet consectetur accumsan, nibh ex sollicitudin
              metus, volutpat lacinia arcu nibh vel ante. Ut sodales, ex sit
              amet consectetur accumsan, nibh ex sollicitudin metus, volutpat
              lacinia arcu nibh vel ante.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
