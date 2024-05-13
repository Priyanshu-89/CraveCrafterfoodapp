import { handleFoodDelete } from '@/app/action';
import ConnectDb from '@/app/libs/ConnectDb';

import CraveCrafter from '@/app/models/CraveCrafter';
import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

async function FoodPage() {
  await ConnectDb();
  let callingFood = await CraveCrafter.find().populate('category')

  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between'>
        <h1 className='px-4 py-2 text-2xl text-[#2b262b] font-semibold'>Manage Foods({callingFood.length})</h1>
        <Link href={'/admin/foods/insert'} className='bg-[#ea9a11] text-[#2b262b] px-6 py-1 rounded-md font-semibold'>Insert Food</Link>
      </div>
      <div className="w-full">
        <table className="w-full bg-[#2b262b] text-[#ea9a11] text-center">
          <thead>
            <tr>
              <th className="border p-2">Id</th>
              <th className="border p-2">Title</th>
              {/* <th className="border p-2">Description</th> */}
              <th className="border p-2">category</th>
              <th className="border p-2">price</th>

              <th className="border p-2">Cover Image</th>
              {/* <th className="border p-2">status</th> */}
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
          {
  callingFood.map((food, index) => {
    let id=food._id
    let handleFoodDeleteWithId=handleFoodDelete.bind(null, id);
    return (
      <tr key={index}>
        <td className="p-1 border text-center">{index + 1}</td>
        <td className="p-1 border">{food.title}</td>
        <td className="p-1 border">{food.category ? food.category.catTitle : 'N/A'}</td>
        <td className="p-1 border">{food.price} {food.discountPrice}</td>
        <td className="p-1 border">
          <Image src={`/images/${food.coverImage}`} alt={food.title} width={70} height={70} />
        </td>
        <td className='p-1 border'>
          <form action={handleFoodDeleteWithId} method='POST'>
            <input type="submit" value="Delete" className='bg-red-600 py-1 px-5 rounded-md text-white' />
          </form>
        </td>
      </tr>
    );
  })
}

          </tbody>
        </table>
      </div>

    </div>
  );
}

export default FoodPage;

