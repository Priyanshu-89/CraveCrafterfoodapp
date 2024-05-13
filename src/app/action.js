'use server'

import { redirect } from "next/navigation";
import ConnectDb from "./libs/ConnectDb";
import Category from "./models/Category";

import { writeFile } from 'fs/promises'
import { join } from 'path'
import { Buffer } from "buffer";
import Food from "./models/CraveCrafter";


export const handleSubmit = async (formData) => {
    await ConnectDb();

    let catTitle = formData.get("catTitle");
    let catDesc = formData.get("catDesc");
    let record = { catTitle, catDesc };
    let data = await Category.create(record)
    redirect("/admin/categories")
}

// insert food 
export const handleSubmitInsertFood = async (formData) => {


    let title = formData.get("title");
    let description = formData.get("description");
    let category = formData.get("category");
    let price = formData.get("price")
    let discountPrice = formData.get("discountPrice")
    let coverImage = formData.get("coverImage")

    // for image 
    let bytes = await coverImage.arrayBuffer();
    let buffer = Buffer.from(bytes);
    let path = join("./public", "images", coverImage.name);
    await writeFile(path, buffer)



    let record = { title, description, category, price, discountPrice, coverImage: coverImage.name };
    let data = await Food.create(record)
    redirect("/admin/categories")
}

//food delete

export const handleFoodDelete = async (id, formData) => {

    let data = await Food.findByIdAndDelete(id)
    redirect('/admin/foods')

}

//category delete
export const handleDeleteCategory=async(id, formData)=>{
    let data=await Category.findByIdAndDelete(id);
    redirect("/admin/categories")
}