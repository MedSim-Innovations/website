import Image from "next/image";
import mainImage from "@/public/home/main.jpg";

export default function Home() {
  return (
    <div className="w-full h-screen grid lg:grid-cols-[60%_auto] max-lg:grid-rows-2 py-4">
      <div className="w-full h-full grid grid-rows-[50%_15%_auto]">
        <div className="w-full h-full flex justify-center items-center px-4 py-2">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <Image 
              src={mainImage}
              alt="mainImage"
              fill
              className="object-cover"
            />
            
            <div className="absolute inset-0 bg-black opacity-40"></div>
            
            <div className={`absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 py-8 font-serif uppercase`}>
              <h1 className="text-4xl font-bold leading-tight w-full capitalize text-center select-none">
                Every human life deserves a great clinical experience
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center px-4 py-2">
          <div className="w-full h-full bg-yellow-300 rounded-lg flex justify-center items-center p-4 text-center text-black font-serif text-lg">
            Hands-on training isn't just practice–it's protection. Each simulation brings us closer to safer patient outcomes.
          </div>
        </div>

        <div className="w-full h-full flex flex-row flex-wrap gap-8 p-4 justify-center items-center">
          <div className="w-auto h-full flex justify-center items-center">
            <div className="w-46 h-full rounded-lg border">
              
            </div>
          </div>

          <div className="w-auto h-full flex justify-center items-center">
            <div className="w-46 h-full rounded-lg border">
              
            </div>
          </div>

          <div className="w-auto h-full flex justify-center items-center">
            <div className="w-46 h-full rounded-lg border">
              
            </div>
          </div>

          <div className="w-auto h-full flex justify-center items-center">
            <div className="w-46 h-full rounded-lg border">
              
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center p-4 pt-2">
        <div className="w-full h-full border rounded-lg">

        </div>
      </div>
    </div>
  )
}