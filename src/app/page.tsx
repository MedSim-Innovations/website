// App Layout
import AppLayout from "@/layouts/app-layout";

// Libraries
import Image from "next/image";
import Form from "next/form";

// Images
import mainImg from "@/public/home/main.jpg";
import newspaperImg from "@/public/home/newspaper.jpg";

// Icons
import faBoxesStacked from "@/public/icons/boxes-stacked-solid-full.svg";
import faMicrochip from "@/public/icons/microchip-solid-full.svg";
import faUsers from "@/public/icons/users-solid-full.svg";

// Mapped Lists
const whyChooseUs = [
  { icon: faUsers, title: "expert team", description: "Our team comprises seasoned experts to guide you through effective, realistic training solutions." },
  { icon: faBoxesStacked, title: "quality products", description: "Offering state-of-the-art products to ensure you receive reliable and durable solutions." },
  { icon: faMicrochip, title: "innovative technology", description: "We use advanced simulation technology to help you achieve higher standards in training." }
];

export default function Home() {
  return (
    <AppLayout>
      <div className="flex flex-col xl:flex-row">
        <div className="w-full xl:w-2/3 h-auto flex flex-col">
          <div className="w-full h-3/5 p-4 pb-2">
            <div className="relative w-full h-full rounded-lg">
              <Image src={mainImg} alt="mainImg" objectFit="fill" className="w-full h-full min-h-100 max-h-140 object-cover rounded-lg" />

              <div className="absolute inset-0">
                <div className="w-full h-full bg-black/20 rounded-lg relative">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 py-8 font-serif uppercase">
                    <h1 className="text-4xl font-bold leading-tight w-full capitalize text-center select-none">
                      Every human life deserves a great clinical experience
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-auto min-h-2/5 p-4 pt-2">
            <div className="w-full h-full bg-linear-to-r from-amber-400 to-amber-200 flex flex-col rounded-lg">
              <div className="w-full flex justify-center items-center p-4">
                <h2 className="text-black font-serif italic font-bold text-2xl text-center capitalize">why choose us?</h2>
              </div>

              <div className="w-full h-full my-auto flex flex-row flex-wrap justify-around items-center gap-4 p-4">
                {
                  whyChooseUs.map((_, idx) => (
                    <div key={idx} className="w-80 h-auto flex flex-col justify-start items-center gap-2 hover:scale-105 transition-all duration-300">
                      <Image src={_.icon} alt="icon" className="w-16 h-16" />
                      <h3 className="text-black capitalize font-serif text-md font-bold text-center">{_.title}</h3>
                      <p className="text-black font-serif text-sm text-center">{_.description}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className="w-full xl:w-1/3 h-auto flex flex-col">
          <div className="w-full h-auto p-4">
            <div className="w-full h-full bg-linear-to-br from-orange-300 to-purple-400 flex flex-col rounded-lg">
              <div className="w-full bg-black/50 rounded-t-lg p-4 flex justify-center items-center">
                <h2 className="text-white font-serif italic font-bold text-2xl text-center capitalize">subscribe</h2>
              </div>

              <Form action={"#"} className="w-full h-full flex flex-col p-4 px-8 gap-4">
                  <section className="flex flex-col justify-center items-start gap-2">
                    <h3 className="text-md text-black font-serif text-center capitalize">full name</h3>
                    <input type="text" name="subs-full-name" id="subs-full-name" className="w-full h-auto text-black font-serif text-md bg-white p-2 outline-none" />
                  </section>

                  <section className="flex flex-col justify-center items-start gap-2">
                    <h3 className="text-md text-black font-serif text-center capitalize">email</h3>
                    <input type="email" name="subs-email" id="subs-email" className="w-full h-auto text-black font-serif text-md bg-white p-2 outline-none" />
                  </section>

                  <section className="flex flex-col justify-center items-start gap-2">
                    <h3 className="text-md text-black font-serif text-center capitalize">Phone Number</h3>
                    <input type="tel" name="subs-tel" id="subs-tel" className="w-full h-auto text-black font-serif text-md bg-white p-2 outline-none" />
                  </section>

                  <button type="submit" className="w-full h-auto p-4 bg-green-400 hover:bg-green-500 active:bg-green-600 text-black font-bold font-serif text-sm capitalize">submit</button>
                </Form>
            </div>
          </div>

          <div className="w-full h-full p-4">
            <div className="w-full h-full bg-white flex flex-col rounded-lg">
              <div className="w-full h-auto p-4 flex justify-center items-center">
                <h2 className="text-black font-serif italic font-bold text-2xl text-center capitalize">interesting resources to check out</h2>
              </div>

              <div className="w-full h-full">

              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}