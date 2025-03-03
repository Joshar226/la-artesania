import { Link } from "react-router-dom"

type CategoryCardProps = {
  href: string
  src: string
  text: string
}

export default function CategoryCard({href, src, text} : CategoryCardProps) {
  return (
    <Link to={`${href}`} className="flex flex-col items-center">
      <img src={`${src}.jpeg`} alt={src} className="w-[270px] h-[200px] shadow-xl" />
      <p className="uppercase text-xl font-bold mt-4 border-b-4 border-transparent hover:border-amarillo">{text}</p>
    </Link>
  )
}
