import ConnectDb from '@/app/libs/ConnectDb';
import Category from '@/app/models/Category';
import Link from 'next/link';
import InsertFormFood from '@/app/components/InsertFormFood';

const InsertFood = async() => {
    await ConnectDb();
    let callingCat=await Category.find()
    
  return (
    <div className='flex flex-1 items-center flex-col'>
        <div className='flex items-center justify-evenly'>
     <h1 className='px-4 py-2 text-2xl text-[#2b262b] font-semibold'>Insert Foods</h1>
      <Link href={'/admin/foods'} className='text-slate-400 underline px-6 py-1 rounded-md font-semibold'>Go Back</Link>
     </div>
         <div className="w-3/4 p-4">
        <div className='bg-orange-200 border border-orange-300 p-4 rounded-md'>
       <InsertFormFood  callingCat={callingCat}/>
        </div>
      </div>
    </div>
  )
}

export default InsertFood
