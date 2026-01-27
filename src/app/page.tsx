import AppLayout from "@/layouts/app-layout";
import Image from "next/image";
import mainImg from "@/public/home/main.jpg";
import faBoxesStacked from "@/public/icons/boxes-stacked-solid-full.svg";
import faMicrochip from "@/public/icons/microchip-solid-full.svg";
import faUsers from "@/public/icons/users-solid-full.svg";

export default function Home() {
  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-4rem)] grid grid-cols-1 xl:grid-cols-[3fr_1fr]">
        <div className="grid">
          <div className="p-2">
            <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-lg">
              <Image
                src={mainImg}
                alt="main image"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 py-8 font-serif uppercase">
                <h1 className="text-4xl font-bold leading-tight w-full capitalize text-center select-none">
                  Every human life deserves a great clinical experience
                </h1>
              </div>
            </div>
          </div>

          <div className="grid gap-2 p-2 grid-cols-1 lg:grid-cols-4">
            <div className="w-full h-full min-h-[180px] lg:bg-gradient-to-r bg-gradient-to-b from-yellow-300 to-white rounded-lg flex justify-center items-center p-8">
              <p className="text-black font-serif text-2xl text-left font-bold uppercase italic">why choose us?</p>
            </div>
            
            <div className="w-full h-full min-h-[180px] hover:scale-105 transition-all duration-300 rounded-lg flex flex-col justify-start items-center gap-4 p-4">
              <Image src={faUsers} alt="users icon" className="w-24 h-24" />
              <p className="text-black font-serif text-xl font-bold capitalize text-center">expert team</p>
              <p className="text-black font-serif text-md text-center">Our team comprises seasoned experts to guide you through effective, realistic training solutions.</p>
            </div>

            <div className="w-full h-full min-h-[180px] hover:scale-105 transition-all duration-300 rounded-lg flex flex-col justify-start items-center gap-4 p-4">
              <Image src={faBoxesStacked} alt="users icon" className="w-24 h-24" />
              <p className="text-black font-serif text-xl font-bold capitalize text-center">quality products</p>
              <p className="text-black font-serif text-md text-center">Offering state-of-the-art products to ensure you receive reliable and durable solutions.</p>
            </div>

            <div className="w-full h-full min-h-[180px] hover:scale-105 transition-all duration-300 rounded-lg flex flex-col justify-start items-center gap-4 p-4">
              <Image src={faMicrochip} alt="users icon" className="w-24 h-24" />
              <p className="text-black font-serif text-xl font-bold capitalize text-center">innovative technology</p>
              <p className="text-black font-serif text-md text-center">We use advanced simulation technology to help you achieve higher standards in training.</p>
            </div>
          </div>

          <div className="p-2">
            <div className="w-full h-full flex justify-center items-center p-4 py-8 text-center text-black font-serif text-4xl">
              Hands-on training isn&apos;t just practice–it&apos;s protection. Each
              simulation brings us closer to safer patient outcomes.
            </div>
          </div>
        </div>

        <div className="border">
          
        </div>
      </div>
    </AppLayout>
  );
}