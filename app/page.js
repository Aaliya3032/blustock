import Batch from "@/components/Batch";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Network from "@/components/Network";
import Overview from "@/components/Overview";
import Services from "@/components/Services";


export default function Home() {

  return (
   <main>
    <Hero/>
    <Services/>
    <Overview/>
    <Batch/>
    <Network/>
    <FAQ/>
   </main>
  );
}
