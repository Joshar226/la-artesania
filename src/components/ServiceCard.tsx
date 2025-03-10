
type ServiceCardProps = {
  image: string
  title: string
}

export default function ServiceCard({image, title} : ServiceCardProps) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="w-[150px] bg-white rounded-full p-6 items-center">
      <img src={`${image}.webp`} alt={title} />
      </div>
      <p className="text-white uppercase font-bold text-xl">{title}</p>
    </div>
  )
}
