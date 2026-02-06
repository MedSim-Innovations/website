import AppLayout from "@/layouts/app-layout";

import Image from "next/image";
import mainImg from "@/public/home/main.jpg";
import newspaperImg from "@/public/home/newspaper.jpg";

import faBoxesStacked from "@/public/icons/boxes-stacked-solid-full.svg";
import faMicrochip from "@/public/icons/microchip-solid-full.svg";
import faUsers from "@/public/icons/users-solid-full.svg";
import faAddressBook from "@/public/icons/address-book-solid-full.svg";
import faCartShopping from "@/public/icons/cart-shopping-solid-full.svg";
import faHandshake from "@/public/icons/handshake-solid-full.svg";

const whyChooseUs = [
  { icon: faUsers, title: "expert team", description: "Our team comprises seasoned experts to guide you through effective, realistic training solutions." },
  { icon: faBoxesStacked, title: "quality products", description: "Offering state-of-the-art products to ensure you receive reliable and durable solutions." },
  { icon: faMicrochip, title: "innovative technology", description: "We use advanced simulation technology to help you achieve higher standards in training." }
];

export default function Home() {
  return (
    <AppLayout>
      <div className="grid grid-cols-7">
        <div className="xl:col-span-5 col-span-7 p-4 xl:pr-1 xl:pb-4 pb-1">
          <div className="relative h-140 p-2">
            <div className="w-full h-full rounded-lg shadow-md">
              <Image src={mainImg} alt="mainImg" objectFit="fill" className="object-cover w-full h-full rounded-lg" />
              <div className="absolute inset-0 p-2">
                <div className="w-full h-full bg-black/30 rounded-lg relative">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 py-8 font-serif uppercase">
                    <h1 className="text-4xl font-bold leading-tight w-full capitalize text-center select-none">
                      Every human life deserves a great clinical experience
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="h-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:bg-linear-to-r bg-linear-to-b from-amber-300 to-amber-200 rounded-lg shadow-md">
              <div className="col-span-1 flex justify-center items-center p-8">
                <h2 className="text-black font-serif font-extrabold text-2xl capitalize italic text-center">why choose us?</h2>
              </div>
              {
                whyChooseUs.map((_, i) => (
                  <div key={i} className="col-span-1 flex flex-col justify-start items-center gap-2 p-8 hover:scale-105 transition-all duration-200">
                    <Image src={_.icon} alt="expert team icon" className="w-16 h-16" />
                    <h3 className="text-black capitalize font-serif text-md font-bold text-center">{_.title}</h3>
                    <p className="text-black font-serif text-sm text-center">{_.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 col-span-7 p-6">
          <div className="w-full h-full p-4 rounded-lg bg-linear-to-br from-sky-200 via-blue-300 to-indigo-400">

          </div>
        </div>
      </div>
    </AppLayout>
  );
}