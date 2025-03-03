import { Link } from "react-router-dom"
import { formatCurrency } from "../utils"

type FeaturedCardProps = {
  href: string
  src: string
  text: string
  price: number
}

export default function FeaturedCard({href, src, text, price} : FeaturedCardProps) {
  return (
    <Link to={href} className="flex flex-col items-center">
      <img src={`${src}.jpeg`} alt={src} className="w-[270px] h-[200px] shadow-xl " />
      <p className="mt-4 mb-2 text-2xl">{text}</p>
      <p className="text-2xl text-amarillo font-bold">{formatCurrency(price)}</p>
    </Link>
  )
}
