import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/lib/convertData";
import { Category } from "@/models/category";
import connectDB from "@/lib/db";   // ✅ add this

export async function getCategories(){

    await connectDB();   // ✅ connect first
    
    const categories = await Category.find({}).lean();
    
    return replaceMongoIdInArray(categories);
}

export async function getCategoryDetails(categoryId){

    try {

        await connectDB();   // ✅ connect first

        const category = await Category.findById(categoryId).lean();

        return replaceMongoIdInObject(category);

    } catch (error) {
        throw new Error(error);
    }

}