export default function ReachUs() {
  return (
    <div className="p-20 grid grid-cols-3 gap-16">
      <div className="col-span-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.8739815473746!2d-73.89093822786603!3d40.86617255217791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sid!4v1685675171865!5m2!1sen!2sid"
          width="600"
          height="600"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>

      <div className="text-zinc-600">
        <p className="font-bold text-2xl">Reach Us</p>
        <p className="font-bold text-5xl mt-8">Let us know what your need</p>

        <p className="font-bold text-2xl mt-14">Hotline</p>
        <p className="mt-4">0833-1255-2779</p>
        <p>0892-7732-4487</p>

        <hr className="mt-4 border-b" />

        <p className="font-bold text-2xl mt-6">Email</p>
        <p className="mt-4">koentji@gmail.com</p>

        <hr className="mt-4 border-b" />

        <p className="font-bold text-2xl mt-6">Office</p>
        <p className="mt-4">
          Jalan Perfileman. Godean Lt. 25 Ruang 210. Kel. Depol, Kec. Bantul
          Yogyakarta - 41235
        </p>
      </div>
    </div>
  )
}
