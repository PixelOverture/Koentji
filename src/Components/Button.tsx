type Button = {
  children: string
}

export default function Button({ children }: Button) {
  return (
    <button className="bg-white/40 py-3 px-12 rounded-full border backdrop-blur-sm">
      {children}
    </button>
  )
}
