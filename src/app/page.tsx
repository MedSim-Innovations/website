// Components
import Hero from "../components/home/hero";
import About from "../components/home/about";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col relative">
      <Hero />
      <About />
    </div>
  )
}
