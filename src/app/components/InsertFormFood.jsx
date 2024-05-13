"use client"
import { z } from "zod"
import { handleSubmitInsertFood } from "../action"
import toast, { Toaster } from "react-hot-toast"

const InsertFormFood = ({ callingCat }) => {
    let foodValidationSchema = z.object({
        title: z.string(),
        description: z.string(),
        category: z.string(),
        price: z.number(),
        discountPrice: z.number(),
        coverImage: z.string(),

    })

    const insertFoodClientAction = async (formData) => {
        let records = {
            "title": formData.get("title"),
            "description": formData.get("description"),
            "category": formData.get("category"),
            "price": parseFloat(formData.get("price")),
            "discountPrice": parseFloat(formData.get("discountPrice")),
            "coverImage": formData.get("coverImage").name,
        }
        let data = foodValidationSchema.safeParse(records)
        if (!data.success) {
            let errorMsg = ""
            data.error.issues.forEach(err => {
                errorMsg += err.path[0] + ":" + err.message + "\n"
            })
            toast.error(errorMsg)
        }
        await handleSubmitInsertFood(formData)
    }
    return (
        <div>
            <form action={insertFoodClientAction} method='POST'>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-semibold mb-1">Title</label>
                    <input type="text" name="title" id='title' className='border px-3 py-2 w-full rounded-md outline-none' />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-semibold mb-1">Description</label>
                    <textarea rows={7} type="text" name="description" id='description' className='border-none px-3 py-2 w-full  rounded-md outline-none'></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-semibold mb-1">Category</label>
                    <select type="text" name="category" id='category' className='border-none px-3 py-2 w-full  rounded-md outline-none'>
                        <option value="Select Category" selected disabled>--Select Category--</option>
                        {
                            callingCat.map((cat, i) => (
                                (
                                    <option key={i} value={cat._id}>{cat.catTitle}</option>
                                )
                            ))
                        }
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-semibold mb-1">Price</label>
                    <input type="text" name="price" id='price' className='border-none px-3 py-2 w-full  rounded-md outline-none' />
                </div>

                <div className="mb-4">
                    <label htmlFor="discountPrice" className="block text-sm font-semibold mb-1">Discount Price</label>
                    <input type="text" name="discountPrice" id='discountPrice' className='border-none px-3 py-2 w-full  rounded-md outline-none' />
                </div>

                <div className="mb-4">
                    <label htmlFor="coverImage" className="block text-sm font-semibold mb-1">Cover Image</label>
                    <input type="file" name="coverImage" id='coverImage' className='border-none px-3 py-2 w-full  rounded-md outline-none' />
                </div>

                {/* <div className="mb-4">
              <label htmlFor="status" className="block text-sm font-semibold mb-1">Category</label>
              <input type="text" name="status" id='status' className='border-none px-3 py-2 w-full  rounded-md outline-none'/>
            </div> */}

                <div className="mb-4">
                    <button type="submit" className='bg-[#0A090A] text-[#ea9a11] px-6 py-2 rounded-md hover:bg-[#ea9a11] hover:text-[#0A090A] outline-none'>Insert Food</button>
                </div>
            </form>
            <Toaster />
        </div>
    )
}

export default InsertFormFood
