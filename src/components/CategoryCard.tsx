import { Link } from "react-router-dom"

type CategoryCardProps = {
  href: string
  image: string
  title: string
}

export default function CategoryCard({href, image, title} : CategoryCardProps) {
  return (
    <Link to={href} className="flex flex-col items-center">
      <img src={`categories/${image}.webp`} alt={title} className="w-[200px] h-[150px] md:w-[270px] md:h-[200px] shadow-xl" />
      <p className="uppercase text-xl font-bold mt-4 border-b-4 border-transparent hover:border-amarillo">{title}</p>
    </Link>
  )
}
