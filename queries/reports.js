import { replaceMongoIdInObject } from "@/lib/convertData";
import { Report } from "@/models/report";



export async function getReport(filter){
    try {
        const report = await Report.findOne(filter).lean();
        return replaceMongoIdInObject(report);
    } catch (error) {
        throw new Error(error);
    }
    
}