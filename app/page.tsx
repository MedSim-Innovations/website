// Components
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function SinglePageApplication() {
  return (
    <div className="min-w-screen min-h-screen overflow-auto flex flex-col">
      <Navbar />
      <Hero />
    </div>
  )
}