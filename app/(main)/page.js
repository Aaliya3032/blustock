import Batch from "@/components/Batch";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Network from "@/components/Network";
import Overview from "@/components/Overview";
import Services from "@/components/Services";
import { getCategories } from "@/queries/categories";
import { getCourseList } from "@/queries/courses";

export default async function Home() {
  const cat = await getCategories();
  const courses = await getCourseList();
  return (
   <main>
    <Hero/>
    <Services/>
    <Overview/>
    <Batch cat={cat} courses={courses}/>
    <Network/>
    <FAQ/>
   </main>
  );
}
