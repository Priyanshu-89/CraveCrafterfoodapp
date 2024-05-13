
import Image from 'next/image';
import Category from '@/app/models/Category';
import Food from '@/app/models/CraveCrafter';


import ConnectDb from '@/app/libs/ConnectDb';
import CategoryBadges from '@/app/components/CategoryBadges';
import FoodCard from '@/app/components/FoodCard';


const ViewCategoryWise = async ({params}) => {
await ConnectDb()
  let {cat_id}=params;
  
  let callingCategory = await Category.find();
  let getCurrentCategory=await Category.findById(cat_id)
  let callingFood = await Food.find({category:cat_id});
  return (
    <>
  
   

      <div className="flex flex-1 justify-center items-center ">
      <CategoryBadges data={callingCategory}/>
      </div>

      
        <h1 className='text-center mt-5 text-slate-600 font-semibold text-3xl'>Latest Food items: {(callingFood.length)}</h1>
    <p  className='text-center mt-5 text-slate-500 font-medium text-2xl underline capitalize'>{getCurrentCategory.catTitle}</p>
      

      <div className="max-w-7xl mx-auto flex mt-6 justify-around gap-3 items-center flex-wrap">

        {
          callingFood.map((food, i) =><FoodCard key={i} food={food}/> 
         
          )
        }
      </div>
    </>
  );
};

export default ViewCategoryWise;
