
type ServiceCardProps = {
  src: string
  text: string
}

export default function ServiceCard({src, text} : ServiceCardProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="w-[150px] bg-white rounded-full p-6 items-center">
      <img src={`${src}.png`} alt={src} />
      </div>
      <p className="text-white uppercase font-bold text-xl">{text}</p>
    </div>
  )
}
