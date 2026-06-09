import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import StaySection from "@/components/StaySection";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <StaySection />
        <GallerySection />
      </main>

      <Footer />
    </>
  );
}