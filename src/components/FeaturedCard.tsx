import { Link } from "react-router-dom"
import { formatCurrency } from "../utils"

type FeaturedCardProps = {
  href: string
  image: string
  title: string
  price: number
}

export default function FeaturedCard({href, image, title, price} : FeaturedCardProps) {
  return (
    <Link to={href} className="flex flex-col items-center">
      <img src={`${image}.webp`} alt={title} className="w-[270px] h-[200px] shadow-xl " />
      <p className="mt-4 mb-2 text-2xl">{title}</p>
      <p className="text-2xl text-amarillo font-bold">{formatCurrency(price)}</p>
    </Link>
  )
}
