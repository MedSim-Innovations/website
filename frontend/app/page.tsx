"use client";

// App Layout
import AppLayout from "@/components/layouts/app-layout";

// Images
import mainImg from "@/public/images/home/main.jpg";

// Icons
import faBoxesStackedSolid from "@/public/icons/boxes-stacked-solid-full.svg";
import faMicrochipSolid from "@/public/icons/microchip-solid-full.svg";
import faUsersSolid from "@/public/icons/users-solid-full.svg";

// Libraries
import Image from "next/image";
import { useState } from "react";

// Mapped Lists

const whyChooseUs = [
  { icon: faUsersSolid, title: "expert team", desc: "Our team comprises seasoned experts to guide you through effective, realistic training solutions." },
  { icon: faBoxesStackedSolid, title: "quality products", desc: "Offering state-of-the-art products to ensure you receive reliable and durable solutions." },
  { icon: faMicrochipSolid, title: "innovative technology", desc: "We use advanced simulation technology to help you achieve higher standards in training." },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubscribe() {
    if (!email || !name) {
      setStatus("error");
      setErrorMsg("Please fill in both fields");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/subscriptions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      if (res.status === 409) {
        setStatus("error");
        setErrorMsg("This email is already subscribed!");
        setTimeout(() => setStatus("idle"), 3000);
        return;
      }

      if (!res.ok) throw new Error();

      setStatus("success");
      setEmail("");
      setName("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again!");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <AppLayout>
      <div className="min-h-screen mt-14 flex flex-col">

        {/* top content - image */}
        <div className="relative h-[28rem] sm:h-[32rem] lg:h-[40rem]">
          <Image src={mainImg} alt="mainImg" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 flex justify-center items-center p-12">
            <h2 className="text-white font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize text-center">
              Every human life deserves a great clinical experience
            </h2>
          </div>
        </div>

        {/* bottom content */}
        <div className="grid grid-cols-1 lg:grid-cols-3">

          {/* Why Choose Us */}
          <div className="lg:col-span-2 md:bg-gradient-to-r bg-gradient-to-b from-amber-400 to-amber-100">
            <div className="flex justify-center items-center py-4">
              <h2 className="text-black text-center text-2xl font-serif italic capitalize font-bold">
                why choose us?
              </h2>
            </div>

            <div className="grid grid-cols-3">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="col-span-3 md:col-span-1 flex flex-col justify-center items-center p-8 gap-4 hover:scale-105 transition-all duration-300">
                  <Image src={item.icon} alt="icon" className="w-16 h-16" />
                  <h3 className="text-black text-center text-lg font-serif font-bold capitalize">{item.title}</h3>
                  <p className="text-black text-sm font-serif font-normal text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1 bg-gradient-to-r from-pink-300 to-sky-300 py-2">
            <div className="flex justify-center items-center py-4">
              <h2 className="text-black text-center text-2xl font-serif italic capitalize font-bold">
                stay in the loop
              </h2>
            </div>

            <div className="flex justify-center items-center py-4 px-8">
              <p className="text-black text-sm font-serif text-center">Subscribe for the latest updates and insights, delivered straight to your inbox.</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 py-4 px-8 max-w-2xl mx-auto w-full">
              <input type="email" placeholder="Email: example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition" />
              
              <input type="text" placeholder="Name: John Doe" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white border border-gray-200 rounded-lg p-2.5 text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition" />
              
              {status === "error" && <p className="bg-red-600 px-4 py-1 rounded-lg text-white flex justify-center items-center text-sm font-serif w-full">{errorMsg}</p>}
              {status === "success" && <p className="bg-green-600 px-4 py-1 rounded-lg text-white flex justify-center items-center text-sm font-serif w-full">You're subscribed!</p>}

              <button onClick={handleSubscribe} disabled={status === "loading"} className="bg-black hover:bg-black/80 font-bold text-white text-md font-serif italic capitalize w-full p-2 mt-2 rounded-lg cursor-pointer disabled:opacity-50 shadow-sm">
                {status === "loading" ? "subscribing..." : "subscribe"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </AppLayout>
  );
}