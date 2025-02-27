
"use client"
import HeroSection from "./components/HeroSection";
import PortfolioGrid from "./components/Featured"; 
import ServicesSection from "./components/Services";
import CTASection from "./components/Cta";

export default function Home() {
  return (
    <div className="bg-background ">
      
     {/*Hero section */}
         <HeroSection/>   
      {/*featured portfolio showcasing the best projects*/}

       <PortfolioGrid/>
{/*services section */}
     <ServicesSection/>
     <CTASection/>
    </div>
  );
}
