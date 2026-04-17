import { Header } from "@/components/layout/Header";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <BentoGrid />
      </main>
      <Footer />
    </>
  );
}
