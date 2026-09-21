import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import Products from "@/components/products";
import Contact from "@/components/contact";
import SiteFooter from "@/components/site-footer";


export default function Home() {
  return (
    <div className="min-h-screen">
      <main id="top" className="min-h-screen w-full overflow-x-hidden">
        <Hero />
        <AboutUs />
        <Products />
        <Contact />
      </main>
      <div>
        <SiteFooter />
      </div>
    </div>
  );
}
