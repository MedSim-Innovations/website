import Image from "next/image";

// Fonts
import { Permanent_Marker } from "next/font/google";
const permanentMarker = Permanent_Marker({
    weight: "400"
});

// Images
import HeroImage from "@/public/hero.jpg";
import CollaborativeMedicalSimulationTrainingImage from "@/public/Collaborative Medical Simulation Training.png";

// Icons
import IconWrapper from "./ui/icon-wrapper";
import { ICON_PATHS } from "@/constants/icons";

// Page Content
const heroTags = [
    { label: "Ready procedure kits" },
    { label: "Complete lab setup" },
    { label: "Training & support" }
];
const heroQuote = "Practice for the moments that matter";
const heroSubQuote = "Bring clinical learning to life with affordable, customizable simulation kits, skills-lab equipment, and hands-on training solutions for nursing and healthcare education.";
const heroFooterQuote = "FOR EDUCATORS. FOR FUTURE CLINICIANS. FOR CONFIDENT CARE.";

export default function Hero() {
    return ( 
        <div className="relative w-full h-180 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

            <Image src={HeroImage} alt="Hero Image" priority className="w-full h-auto min-h-120 max-h-180 object-cover" />

            <div className="absolute top-0 left-0 w-full h-full flex flex-col">
                <div className="w-full h-full grid grid-cols-[auto_1fr] pl-12">
                    <div className="w-full max-w-2xl h-full flex flex-col justify-center items-start">
                        <div className="flex flex-row justify-start items-center gap-4">
                            {
                                heroTags.map((tag, index) => (
                                    <p key={index} className={`border border-white text-white rounded-full px-4 py-1 capitalize text-sm`}>{tag.label}</p>
                                ))
                            }
                        </div>
                        <h1 className={`mt-8 text-7xl bg-linear-to-r from-cyan-400 via-lime-300 to-yellow-300 bg-clip-text text-transparent ${permanentMarker.className}`}>{heroQuote}</h1>
                        <p className="text-white max-w-xl text-md mt-8">{heroSubQuote}</p>
                    </div>

                    <div className="relative w-full h-full bg-black overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
                        <div className="absolute top-12 right-20 flex flex-col items-center gap-2">
                            <p className="text-white text-sm uppercase font-bold">patient simulation</p>
                            <div className="flex justify-center text-sm text-center items-center px-4 py-2 bg-cyan-600 rounded-lg capitalize text-white">
                                realistic by design.<br/>ready for practice.
                            </div>
                        </div>
                        <Image src={CollaborativeMedicalSimulationTrainingImage} alt="Collaborative Medical Simulation Training" className="w-full h-full object-fill" />
                    </div>
                </div>

                <div className="w-full h-16 border-t border-gray-400 bg-black grid grid-cols-2 px-8">
                    <div className="flex justify-start items-center">
                        <p className="uppercase text-gray-300 text-xs font-bold">{heroFooterQuote}</p>
                    </div>

                    <div className="flex flex-row justify-end items-center gap-2">
                        <p className="uppercase text-gray-300 text-xs font-bold">DISCOVER MEDSIM</p>
                        <IconWrapper path={ICON_PATHS.arrowDown} className="text-white w-auto h-6" />
                    </div>
                </div>
            </div>

            {/* <div className="absolute top-1/2 left-16 -translate-y-1/2 flex flex-col justify-center items-start">
                <div className="flex flex-row justify-start items-center gap-4">
                    {
                        heroTags.map((tag, index) => (
                            <p key={index} className={`border border-white text-white rounded-full px-4 py-1 capitalize text-sm`}>{tag.label}</p>
                        ))
                    }
                </div>
                <h1 className={`mt-8 block bg-linear-to-r from-cyan-200 via-teal-200 to-lime-200 bg-clip-text text-[clamp(2.75rem,7.2vw,5rem)] leading-[0.98] text-transparent max-w-2xl font-bold capitalize ${permanentMarker.className}`}>{heroQuote}</h1>
                <p className="text-gray-300 max-w-xl text-md mt-8">{heroSubQuote}</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-16 border-t border-gray-400 bg-black grid grid-cols-2 px-8">
                <div className="flex justify-start items-center">
                    <p className="uppercase text-gray-300 text-xs font-bold">{heroFooterQuote}</p>
                </div>

                <div className="flex flex-row justify-end items-center gap-2">
                    <p className="uppercase text-gray-300 text-xs font-bold">DISCOVER MEDSIM</p>
                    <IconWrapper path={ICON_PATHS.arrowDown} className="text-white w-auto h-6" />
                </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-16 w-120 h-100 border border-gray-300 rounded-2xl overflow-hidden p-4">
                <Image src={CollaborativeMedicalSimulationTrainingImage} alt="Collaborative Medical Simulation Training" className="w-full h-full object-fill" />
            </div> */}
        </div>
    )
}