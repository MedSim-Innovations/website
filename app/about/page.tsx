import AppLayout from "@/components/layouts/app-layout";
import HospitalsImg from "@/public/images/about/hospitals.jpg";
import MedicalCollegesImg from "@/public/images/about/medical-colleges.jpg";
import NursingCollegesImg from "@/public/images/about/nursing-colleges.jpg";
import faCircleCheckSolid from "@/public/icons/circle-check-solid-full.svg";
import faGlobeSolid from "@/public/icons/globe-solid-full.svg";
import faLightbulbSolid from "@/public/icons/lightbulb-solid-full.svg";
import faScrewdriverWrenchSolid from "@/public/icons/screwdriver-wrench-solid-full.svg";
import faUsersSolid from "@/public/icons/users-solid-full.svg";
import faBookOpenSolid from "@/public/icons/book-open-solid-full.svg";
import Image from "next/image";
import { StaticImageData } from "next/image";

const valuePillars = [
  { icon: faLightbulbSolid, title: "Innovation", desc: "Continuous investment in R&D to bring the latest technology to market.", color: "bg-amber-50", border: "border-amber-200", iconFilter: "invert(70%) sepia(80%) saturate(1500%) hue-rotate(5deg)", text: "text-amber-500" },
  { icon: faScrewdriverWrenchSolid, title: "Customization", desc: "Tailored simulation solutions to meet the specific needs of each client.", color: "bg-blue-50", border: "border-blue-200", iconFilter: "invert(40%) sepia(80%) saturate(800%) hue-rotate(190deg)", text: "text-blue-500" },
  { icon: faCircleCheckSolid, title: "Quality & Realism", desc: "High standards ensuring simulators offer truly lifelike experiences.", color: "bg-green-50", border: "border-green-200", iconFilter: "invert(50%) sepia(80%) saturate(800%) hue-rotate(100deg)", text: "text-green-500" },
  { icon: faUsersSolid, title: "Support", desc: "End-to-end service from installation to ongoing maintenance and training.", color: "bg-purple-50", border: "border-purple-200", iconFilter: "invert(40%) sepia(80%) saturate(800%) hue-rotate(240deg)", text: "text-purple-500" },
  { icon: faGlobeSolid, title: "Global Reach", desc: "A worldwide network of distributors and partners serving clients globally.", color: "bg-cyan-50", border: "border-cyan-200", iconFilter: "invert(50%) sepia(80%) saturate(800%) hue-rotate(160deg)", text: "text-cyan-500" },
  { icon: faBookOpenSolid, title: "Education", desc: "Bridging theory and clinical practice with curriculum-aligned tools.", color: "bg-rose-50", border: "border-rose-200", iconFilter: "invert(40%) sepia(80%) saturate(1200%) hue-rotate(310deg)", text: "text-rose-500" },
];

const customers: { title: string; img: StaticImageData; desc: string; text: string; badge: string }[] = [
  { title: "Nursing Colleges", img: NursingCollegesImg, desc: "Training kits specifically designed for nursing education and practical training.", text: "text-pink-500", badge: "bg-pink-100 text-pink-600" },
  { title: "Medical Colleges", img: MedicalCollegesImg, desc: "Advanced tools for medical students and residents to enhance hands-on learning.", text: "text-blue-500", badge: "bg-blue-100 text-blue-600" },
  { title: "Hospitals", img: HospitalsImg, desc: "Supporting professional development and competency assessments for healthcare providers.", text: "text-green-500", badge: "bg-green-100 text-green-600" },
];

export default function About() {
  return (
    <AppLayout>
      <div className="min-h-screen mt-14 bg-slate-50 font-serif">
        <section className="bg-white">
          <div className="bg-linear-to-r from-sky-400 to-cyan-400 px-8 py-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-100 mb-1">Who We Are</p>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Background</h2>
          </div>

          <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-10">
            <p className="text-slate-600 text-lg text-center leading-relaxed">
              At <span className="font-bold text-slate-800">MedSim Innovations</span>, we are committed to enhancing patient safety and improving medical education through affordable, state-of-the-art simulation technology. Our advanced simulators allow healthcare professionals to develop skills in a safe, controlled environment, reducing the risk of real-world errors.
            </p>

            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-8 flex flex-col gap-5">
              <h3 className="text-xl font-bold text-sky-600 text-center">Why Simulation-Based Training?</h3>
              <p className="text-slate-600 text-base text-center leading-relaxed">
                Medical errors are a significant concern worldwide. According to the{" "}
                <span className="italic text-slate-700">World Health Organization (WHO)</span>,{" "}
                <a href="https://www.who.int/news-room/fact-sheets/detail/patient-safety" target="_blank" className="text-sky-600 underline underline-offset-2 hover:text-sky-800 transition-colors">
                  patient safety incidents rank among the leading causes of death and disability
                </a>
                . Many errors stem from insufficient training — all of which can be minimized through hands-on, simulation-based learning.
              </p>
              <p className="text-slate-600 text-base text-center leading-relaxed">
                At <span className="font-bold text-slate-800">MedSim Innovations Pvt. Ltd.</span>, we recognize the urgent need for high-quality, affordable training solutions — especially for nursing colleges and small hospitals in developing countries.
              </p>
            </div>

            <p className="text-slate-600 text-base text-center leading-relaxed">
              Beyond simulation technology, we assist institutions in designing affordable simulation labs that meet rigorous educational and compliance standards. Contact us for a detailed discussion — we're here to help you make a difference.
            </p>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="bg-linear-to-r from-emerald-400 to-teal-400 px-8 py-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-100 mb-1">Purpose</p>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Mission & Vision</h2>
          </div>

          <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-emerald-100 p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-500 font-extrabold text-lg">M</div>
              <h3 className="text-xl font-bold text-emerald-600">Mission Statement</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                To revolutionize healthcare education by providing cutting-edge medical simulation technology that empowers healthcare professionals' clinical competency for high standards of patient care.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-teal-100 p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-500 font-extrabold text-lg">V</div>
              <h3 className="text-xl font-bold text-teal-600">Vision Statement</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                A world where simulation-based education is the cornerstone of healthcare training, ensuring better patient outcomes and advancing the quality of healthcare worldwide.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="bg-linear-to-r from-orange-400 to-amber-400 px-8 py-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-100 mb-1">What We Stand For</p>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Value Pillars</h2>
          </div>

          <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePillars.map((item, i) => (
              <div key={i} className={`rounded-2xl border ${item.border} ${item.color} p-7 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200`}>
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <Image src={item.icon} alt={item.title} width={24} height={24} style={{ filter: item.iconFilter }} />
                </div>
                <h3 className={`text-lg font-bold ${item.text}`}>{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="bg-linear-to-r from-violet-400 to-purple-400 px-8 py-10 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-violet-100 mb-1">Who We Serve</p>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Our Customers</h2>
          </div>

          <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {customers.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <div className="relative h-52 w-full">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className={`self-start text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full ${item.badge}`}>
                    {item.title}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </AppLayout>
  );
}