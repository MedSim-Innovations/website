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

export default function Home() {
  const whyChooseUs = [
    { icon: faUsers, title: "expert team", description: "Our team comprises seasoned experts to guide you through effective, realistic training solutions." },
    { icon: faBoxesStacked, title: "quality products", description: "Offering state-of-the-art products to ensure you receive reliable and durable solutions." },
    { icon: faMicrochip, title: "innovative technology", description: "We use advanced simulation technology to help you achieve higher standards in training." }
  ];

  return (
    <AppLayout>
      <div className="grid grid-cols-7">
        <div className="xl:col-span-5 col-span-7 p-4 xl:pr-1 xl:pb-4 pb-1">
          <div className="relative h-120 p-2">
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
            <div className="h-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:bg-linear-to-r bg-linear-to-b from-amber-300 to-amber-50 rounded-lg shadow-md">
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
        <div className="grid xl:col-span-2 col-span-7 grid-cols-2 p-4 xl:pl-1 xl:pt-4 pt-1">
          <div className="p-2 xl:col-span-2 md:col-span-1 col-span-2">
            <div className="bg-radial-[at_50%_75%] from-sky-100 via-blue-200 to-indigo-300 to-90% h-92 grid grid-rows-10 rounded-lg shadow-md">
              <div className="row-span-2 flex justify-center items-center p-8">
                <h2 className="text-blue-900 font-serif text-2xl font-bold capitalize text-center">explore</h2>
              </div>

              <div className="row-span-8 grid grid-cols-2 grid-rows-2">
                <a href="/about" className="col-span-1 row-span-1 grid grid-rows-2 hover:bg-indigo-500/30 border-b border-r border-indigo-300">
                  <div className="row-span-1 flex justify-center items-end">
                    <Image src={faHandshake} alt="handshake icon" className="w-16 h-16" />
                  </div>
                  <div className="row-span-1 flex justify-center items-start p-4 px-8">
                    <h3 className="text-black capitalize font-serif text-md text-center">learn more about us</h3>
                  </div>
                </a>
                <a href="/contact" className="col-span-1 row-span-1 grid grid-rows-2 hover:bg-indigo-500/30 border-b border-l border-indigo-300">
                  <div className="row-span-1 flex justify-center items-end">
                    <Image src={faAddressBook} alt="address book icon" className="w-16 h-16" />
                  </div>
                  <div className="row-span-1 flex justify-center items-start p-4 px-8">
                    <h3 className="text-black capitalize font-serif text-md text-center">send us your inquiries</h3>
                  </div>
                </a>
                <a href="/products" className="col-span-2 row-span-1 grid grid-rows-5 hover:bg-indigo-500/30 border-t border-indigo-300">
                  <div className="row-span-3 flex justify-center items-end">
                    <Image src={faCartShopping} alt="shopping cart icon" className="w-16 h-16" />
                  </div>
                  <div className="row-span-2 flex justify-center items-start p-4 px-8">
                    <h3 className="text-black capitalize font-serif text-md text-center">browse our range of products</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="p-2 xl:col-span-2 md:col-span-1 col-span-2">
            <div className="relative h-92 shadow-md rounded-lg">
              <Image src={newspaperImg} alt="newspaperImg" objectFit="fill" className="object-fit w-full h-full rounded-lg" />

              <div className="absolute inset-0 w-full h-full grid grid-rows-[6rem_1fr]">
                <div className="flex justify-center items-center p-8">
                  <h2 className="text-white font-serif text-2xl font-bold capitalize bg-black/60 p-2 rounded-lg text-center">subscribe to our newsletter</h2>
                </div>

                <div className="flex flex-col gap-4 justify-around items-center p-4">
                  <div className="w-full h-auto flex flex-col justify-center items-center gap-2">
                    <input type="text" name="subs-name" id="subs-name" className="bg-white w-full h-12 rounded-lg border-2 border-black text-black font-serif text-md p-2" placeholder="Name" />

                    <input type="email" name="subs-email" id="subs-email" className="bg-white w-full h-12 rounded-lg border-2 border-black text-black font-serif text-md p-2" placeholder="Email Address" />

                    <input type="tel" name="subs-tel" id="subs-tel" className="bg-white w-full h-12 rounded-lg border-2 border-black text-black font-serif text-md p-2" placeholder="Phone Number" />
                  </div>

                  <button type="submit" className="capitalize text-black bg-green-400 p-2 rounded-lg w-full cursor-pointer hover:bg-green-500 font-bold">submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}