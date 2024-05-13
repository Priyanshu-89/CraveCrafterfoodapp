import Food from '@/app/models/CraveCrafter'
import { FaCartPlus } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';
import FoodCard from '@/app/components/FoodCard';


async function ViewFood({params}) {
    let {foodid}=params;
    const food=await Food.findById(foodid);
    const relatedFood=await Food.find({"_id":{$ne:foodid}});
  return (
    <>
   
    <div className='flex items-center justify-center mt-5 p-5'>
         <div className=" flex gap-4 border border-slate-200 overflow-hidden hover:scale-105 hover:transition-all hover:duration-300 w-[45rem]  p-5 space-y-4   hover:shadow-xl ">
            
            <Image src={`/images/${food.coverImage}`} width={320} height={320} alt='' className='rounded-md hover:scale-95 hover:transition-all hover:duration-300 w-1/2'/>
            <div className="flex flex-col gap-2 mt-5 w-1/2">
              <h2 className='text-lg text-slate-600 font-semibold'>Food Name: {food.title}</h2>
              <h4 className='text-lg text-slate-600 font-semibold'>Price: {food.discountPrice}/- <del className='text-slate-400'>MRP:{food.price}</del></h4>
              <h4 className='text-sm text-slate-500'>More :{food.description}</h4>
              <div className="flex justify-between items-center">
  <a href={`/view/${food._id}`} className="flex gap-2 items-center px-4 py-2 font-semibold rounded-md bg-[#0A090A] text-[#ea9a11]">
    <FaCartPlus className="inline-block" size={25}/> Add to Cart
  </a>
  <a href={`/view/${food._id}`} className="flex gap-2 items-center px-4 py-2 font-semibold rounded-md bg-[#0A090A] text-[#ea9a11]">
    Buy Now <MdKeyboardArrowRight className="inline-block" size={25}/>
  </a>
</div>

            </div>
          </div>

      
    </div>
<div className=" flex-1 flex-col flex gap-3">
  <h2 className='text-2xl  text-[#ea9a11] font-semibold pl-28 pb-4'>May You Also Like</h2>
  
  <div className="grid grid-cols-3 gap-9 w-7xl mx-auto">
{
  relatedFood.map((food, i)=>
  <FoodCard food={food} key={i}/>
  )
}
    </div>


</div>
    </>
  )
}

export default ViewFood