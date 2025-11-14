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
    {/* 👇 AdSense ad block here - client-side only to prevent hydration issues */}
      <div className="my-8 flex justify-center">
        <div id="adsense-container" className="w-full max-w-md">
          <Script id="ads-init-home" strategy="afterInteractive">
            {`
              if (typeof window !== 'undefined' && window.adsbygoogle) {
                const initAd = () => {
                  if (window.adsbygoogle) {
                    const adContainer = document.getElementById('adsense-container');
                    if (adContainer && !adContainer.querySelector('.adsbygoogle')) {
                      adContainer.innerHTML = \`
                        <ins
                          class="adsbygoogle"
                          style="display: block"
                          data-ad-client="ca-pub-7899721607734007"
                          data-ad-slot="3700181284"
                          data-ad-format="auto"
                          data-full-width-responsive="true"
                        ></ins>
                      \`;
                      (adsbygoogle = window.adsbygoogle || []).push({});
                    }
                  } else {
                    // Retry after a short delay if adsbygoogle is not yet loaded
                    setTimeout(initAd, 100);
                  }
                };
                
                // Start initialization after a short delay to ensure DOM is ready
                setTimeout(initAd, 500);
              }
            `}
          </Script>
        </div>
      </div>
    <Batch/>
    <Network/>
    <FAQ/>
   </main>
  );
}
