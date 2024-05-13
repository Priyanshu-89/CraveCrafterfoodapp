import Image from "next/image"

const FoodCard = ({food}) => {
  return (
    <div>
           <div  className="border border-slate-200 overflow-hidden hover:scale-105 hover:transition-all hover:duration-300 w-[26rem] p-5 space-y-4   hover:shadow-xl ">
            
            <Image src={`/images/${food.coverImage}`} width={320} height={320} alt='' className='rounded-md hover:scale-95 hover:transition-all hover:duration-300 w-full'/>
            <div className="flex flex-col gap-2 mt-5">
              <h2 className='text-lg text-slate-600 font-semibold'>Food Name: {food.title}</h2>
              <h4 className='text-lg text-slate-600 font-semibold'>Price: {food.discountPrice}/- <del className='text-slate-400'>MRP:{food.price}</del></h4>
              <h4 className='text-sm text-slate-500'>More :{food.description}</h4>
              <a href={`/view/${food._id}`} className='text-center m-2 px-4 py-2  font-semibold rounded-md bg-[#0A090A] text-[#ea9a11]'>Know More</a>
            </div>
          </div>
    </div>
  )
}

export default FoodCard
