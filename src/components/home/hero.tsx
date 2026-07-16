import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

// Images
import mainImg from "@/public/images/home/main.jpg";

// Fonts
const indieFlower = localFont({
  src: "../../../public/fonts/IndieFlower-Regular.ttf",
  display: "swap",
});

export default function Hero() {
    return (
        <div className="relative md:min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)] flex flex-col justify-end pt-32 pb-20 px-4">
            <Image 
                src={mainImg} 
                alt="mainImg" 
                fill
                priority
                className="object-cover" 
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-8 z-10">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-serif text-center text-3xl font-bold capitalize leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    Every human life deserves a{" "}
                        <span
                            className={`block bg-linear-to-br from-cyan-300 to-emerald-300 bg-clip-text text-5xl italic text-transparent sm:text-6xl md:text-7xl lg:text-8xl ${indieFlower.className}`}
                        >
                            great clinical experience
                        </span>
                    </h1>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row w-auto">
                    <Link
                    href="/products"
                    className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.03] text-center"
                    >
                        Explore Products
                    </Link>

                    <Link
                    href="/about"
                    className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black text-center"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    )
}