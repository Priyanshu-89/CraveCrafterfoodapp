
import { handleDeleteCategory } from '@/app/action';
import InsertFormCategory from '@/app/components/InsertFormCategory';
import ConnectDb from '@/app/libs/ConnectDb';
import Category from '@/app/models/Category';
import { RiDeleteBin5Fill } from "react-icons/ri";


async function CategoryPage() {
    await ConnectDb();
    let callingCat=await Category.find()

  
   
  return (
    <>
      <h1 className='px-4 py-2 text-2xl text-[#2b262b] font-semibold'>Manage Categories({callingCat.length})</h1>
     <div className='flex'>
    
      <div className="w-3/4  p-5">
        <table className="w-full bg-[#2b262b] text-[#ea9a11]">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Category Title</th>
              <th className="border p-2">Category Description</th>
              <th className="p-2 border">Action</th>
             
            </tr>
          </thead>
          <tbody>
           {
            callingCat.map((cat, index)=>{
              let id=cat._id;
              let handleCatDelete=handleDeleteCategory.bind(null, id);
              return(
                <tr key={index}>
                    <td className="p-1 border">{index+1}</td>
                    <td className="p-1 border">{cat.catTitle}</td>
                    <td className="p-1 border">{cat.catDesc}</td>
                    
                    <th className="border p-1">
                <form action={handleCatDelete} method='POST'>
                  <button type="submit" className='text-[#ea9a11]'><RiDeleteBin5Fill size={25}/></button>
                </form>
                </th>
                </tr>

            )})
           }
          </tbody>
        </table>
      </div>
      <div className="w-1/2 p-4">
      <InsertFormCategory/>
      </div>
    </div>
    </>
   
  );
}

export default CategoryPage;
