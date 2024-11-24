import Navbar from "@/components/common/Navbar";
import BookNextTrip from "@/components/sections/BookNextTrip";
import CategorySection from "@/components/sections/CategorySection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import LogoGroupSection from "@/components/sections/LogoGroupSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TopSellingSection from "@/components/sections/TopSellingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="poppins max-w-6xl mx-auto">
        <HeroSection />
        <div className="absolute top-0 right-0 -z-50">
          <Image
            src="/images/blob-shape.png"
            alt="blob background"
            width={500}
            height={500}
          />
        </div>
        <CategorySection />
        <TopSellingSection />
        <BookNextTrip />
        <TestimonialSection />
        <LogoGroupSection />
        <NewsletterSection />
        <FooterSection />
      </main>
    </div>
  );
}
