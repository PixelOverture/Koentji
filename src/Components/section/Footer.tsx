import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="px-20 bg-[#4F6A7D] text-white">
      <div className="grid grid-cols-4 py-8 gap-32">
        <div>
          <Image
            src="/koentjiLetterLogo.svg"
            alt="Koentji"
            width={150}
            height={40}
          />
          <p className="mt-1">Your one stop corporate imaging partner</p>

          <div className="mt-6 flex gap-3">
            <button>
              <Image
                src="/icFacebook.svg"
                alt="Facebook"
                width={28}
                height={28}
              />
            </button>
            <button>
              <Image
                src="/icTwitter.svg"
                alt="Twitter"
                width={28}
                height={28}
              />
            </button>
            <button>
              <Image
                src="/icInstagram.svg"
                alt="Instagram"
                width={28}
                height={28}
              />
            </button>
            <button>
              <Image
                src="/icLinkedin.svg"
                alt="Linkedin"
                width={28}
                height={28}
              />
            </button>
            <button>
              <Image
                src="/icYoutube.svg"
                alt="Youtube"
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>

        <div>
          <p className="font-semibold text-lg mb-6">Links</p>

          <div className="flex flex-col gap-4">
            <Link href="#" className="hover:text-zinc-200 w-fit">
              Marketing
            </Link>
            <Link href="#" className="hover:text-zinc-200 w-fit">
              Corporate Identity
            </Link>
            <Link href="#" className="hover:text-zinc-200 w-fit">
              Event Production
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-lg mb-6">Our Services</p>

          <div className="flex flex-col gap-4">
            <Link href="#" className="hover:text-zinc-200 w-fit">
              What&apos;s Trending
            </Link>
            <Link href="#" className="hover:text-zinc-200 w-fit">
              Product News
            </Link>
            <Link href="#" className="hover:text-zinc-200 w-fit">
              Events
            </Link>
          </div>
        </div>
      </div>

      <hr />

      <p className="py-8 text-center">
        © Copyright 2023 PT Koentji. All rights reserved.
      </p>
    </div>
  )
}
