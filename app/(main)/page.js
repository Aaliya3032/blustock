import Batch from "@/components/Batch";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Network from "@/components/Network";
import Overview from "@/components/Overview";
import Services from "@/components/Services";
import Script from "next/script";

export default function Home() {

  return (
   <main>
    <Hero/>
    <Services/>
    <Overview/>
    {/* 👇 AdSense ad block here */}
      <div className="my-8 flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7899721607734007"
          data-ad-slot="3700181284"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        <Script id="ads-init-home">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>
    <Batch/>
    <Network/>
    <FAQ/>
   </main>
  );
}
