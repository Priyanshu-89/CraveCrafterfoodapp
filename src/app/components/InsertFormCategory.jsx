'use client'
import toast, { Toaster } from 'react-hot-toast'
import { handleSubmit } from '../action'
import { z } from 'zod'

const InsertFormCategory = () => {
    let clientAction = async (formData) => {
        let category = z.object({
            catTitle: z.string().min(5, { message: "Title atleast 5 character long" }),
            catDesc: z.string().min(20, {message:" 20 character only"})
        })
        let record = {
            catTitle: formData.get("catTitle"),
            catDesc: formData.get("catDesc")
        }
        let data = category.safeParse(record)
        if (!data.success) {
            let errorMag = "";
            data.error.issues.forEach((issue) => {
                errorMag = errorMag + issue.path[0]+":"+ issue.message + "\n"
            })
            toast.error(errorMag)
        }
        handleSubmit(formData)
    }
       

    return (
        <>
            <div className='bg-orange-200 border border-orange-300 p-4 rounded-md'>
                <form action={clientAction} method='POST'>
                    <div className="mb-4">
                        <label htmlFor="catTitle" className="block text-sm font-semibold mb-1">Category Title</label>
                        <input type="text" name="catTitle" id='catTitle' className='border px-3 py-2 w-full rounded-md outline-none' />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="catDesc" className="block text-sm font-semibold mb-1">Category Description</label>
                        <textarea rows={7} type="text" name="catDesc" id='catDesc' className='border-none px-3 py-2 w-full  rounded-md outline-none'></textarea>
                    </div>

                    <div className="mb-4">
                        <button type="submit" className='bg-[#0A090A] text-[#ea9a11] px-6 py-2 rounded-md hover:bg-[#ea9a11] hover:text-[#0A090A] outline-none'>Create Category</button>
                    </div>
                </form>
                <Toaster position='bottom-center'/>
            </div>
        </>
    )
}

export default InsertFormCategory
