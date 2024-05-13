import Link from "next/link"

const CategoryBadges = ({data}) => {
  return (
    <div>
      
      <div className="flex flex-1 justify-center items-center ">
        {data.map((cat, i) => (
          <Link href={`/category/${cat.id}`} key={i} className="m-2 px-4 py-1 border border-gray-300 rounded-md bg-[#0A090A] text-[#ea9a11]">
            {cat.catTitle}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryBadges
