import Image, { type StaticImageData } from "next/image";
import {
  BookOpen,
  Building2,
  HeartPulse,
  Package,
  Scissors,
  ShieldCheck,
  Shirt,
  Stethoscope,
  Syringe,
  Wind,
  type LucideIcon,
} from "lucide-react";
import openLabImg from "@/public/products/open-lab.jpg";
import nursingLabImg from "@/public/products/nursing-simulation-room.jpg";
import romaKitImg from "@/public/products/marketing/mini-roma-kit.webp";
import sutureKitImg from "@/public/products/marketing/suture-training-kit.webp";
import infectionControlImg from "@/public/products/marketing/infection-control-kit.webp";
import airwayTrainerImg from "@/public/products/marketing/airway-management-trainer.webp";
import emergencyKitImg from "@/public/products/marketing/emergency-management-kit.webp";
import nursingProcedureImg from "@/public/products/marketing/nursing-procedure-simulator.webp";
import obstetricKitImg from "@/public/products/marketing/obstetric-training-kit.webp";
import neonatalTrainerImg from "@/public/products/marketing/neonatal-pediatric-trainer.webp";
import communityBagImg from "@/public/products/marketing/community-health-bag.webp";
import nurseKitImg from "@/public/products/marketing/nursekit-pro.webp";
import clinicalCompanionImg from "@/public/products/marketing/clinical-companion.webp";
import nursingUniformsImg from "@/public/products/marketing/nursing-uniforms.webp";

type Product = {
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  image?: StaticImageData;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
};

const procedureKits: Product[] = [
  {
    name: "ROMA Medication Practice Kit",
    category: "Medication administration",
    description: "An all-in-one practice system for learning medication delivery through the routes used in clinical care.",
    features: ["IV, IM, intradermal and subcutaneous practice", "Oral, topical and inhalation routes", "Full and Mini ROMA configurations"],
    icon: Syringe,
    image: romaKitImg,
    imageAlt: "MedSim Mini ROMA medication administration training kit",
    imageFit: "contain",
  },
  {
    name: "Suture Practice Kit",
    category: "Clinical procedures",
    description: "A reusable, portable setup for building control and confidence across common wound-closure techniques.",
    features: ["Interrupted, running and mattress sutures", "Needle holder, forceps and scissors", "Wound closure, drain fixation and removal practice"],
    icon: Scissors,
    image: sutureKitImg,
    imageAlt: "Suture training pad, instruments and practice materials",
    imageFit: "contain",
  },
  {
    name: "Infection Control Kit",
    category: "Safety and prevention",
    description: "A structured teaching kit for the routines that protect patients, learners and clinical teams.",
    features: ["Hand hygiene and PPE practice", "Sharps and biomedical-waste handling", "Spill management and isolation precautions"],
    icon: ShieldCheck,
    image: infectionControlImg,
    imageAlt: "Protective gown, gloves, masks and infection-control supplies",
    imageFit: "contain",
  },
  {
    name: "Nursing Procedure Kits",
    category: "Basic & advanced care",
    description: "Configurable full-body trainers and procedure kits for repeated practice across foundational and advanced nursing skills.",
    features: ["Hygiene, positioning and routine patient care", "Feeding, suction, tracheostomy and gastro-lavage", "Injection, catheterization, wound and blood-pressure practice"],
    icon: HeartPulse,
    image: nursingProcedureImg,
    imageAlt: "Full-function adult nursing manikin with blood-pressure equipment, procedure modules and care accessories",
    imageFit: "contain",
  },
  {
    name: "Airway Management Kit",
    category: "Airway skills",
    description: "A focused setup for rehearsing airway positioning, adjunct selection, ventilation and suction techniques.",
    features: ["OPA and NPA insertion", "Bag-mask ventilation and intubation", "LMA placement, suction and oxygen therapy"],
    icon: Wind,
    image: airwayTrainerImg,
    imageAlt: "Airway management training manikin with interchangeable airway parts",
    imageFit: "contain",
  },
  {
    name: "Emergency Management Kit",
    category: "Emergency readiness",
    description: "A configurable emergency station for teaching coordinated response, equipment use and critical first actions.",
    features: ["Adult, child and infant CPR trainer options", "Airway, ventilation and AED workflows", "Emergency equipment and crash-cart handling"],
    icon: Stethoscope,
    image: emergencyKitImg,
    imageAlt: "Emergency training setup with crash cart, airway trainer, defibrillator and AED",
    imageFit: "contain",
  },
  {
    name: "Obstetric & Gynecology Kit",
    category: "Specialized simulation",
    description: "A maternal-care training configuration spanning assessment, birth scenarios and urgent obstetric response.",
    features: ["Leopold's manoeuvres and fetal assessment", "Vaginal delivery and complication scenarios", "Postpartum care and neonatal resuscitation"],
    icon: HeartPulse,
    image: obstetricKitImg,
    imageAlt: "Obstetric birth simulator and maternal care training components",
    imageFit: "contain",
  },
  {
    name: "Neonatal & Paediatric Kit",
    category: "Specialized simulation",
    description: "Hands-on training equipment for newborn and paediatric assessment, routine care and emergency response.",
    features: ["Neonatal resuscitation and airway care", "Feeding, bathing and umbilical-cord care", "Vital signs, medication and growth assessment"],
    icon: HeartPulse,
    image: neonatalTrainerImg,
    imageAlt: "Neonatal and paediatric care simulator with procedure modules",
    imageFit: "contain",
  },
  {
    name: "Community Health Bag",
    category: "Community practice",
    description: "A field-ready teaching bag for community assessment, home visits, health education and basic care skills.",
    features: ["Vital signs and health screening", "Antenatal, postnatal and newborn assessment", "First aid, dressings and community counselling"],
    icon: Package,
    image: communityBagImg,
    imageAlt: "Red organized community health field bag",
    imageFit: "contain",
  },
];

const moreSolutions: Product[] = [
  {
    name: "Nursing College Lab Packages",
    category: "Institutional labs",
    description: "Equipment plans for nursing foundation, medical-surgical, pediatric, and obstetric and gynecological skills labs.",
    features: ["Manikins and task trainers", "Procedure equipment", "Curriculum-aligned lab planning"],
    icon: Building2,
    image: nursingLabImg,
    imageAlt: "Illustrative nursing simulation room with patient beds and training equipment",
  },
  {
    name: "Mid-Fidelity Simulation Lab",
    category: "Lab setup",
    description: "A phased simulation environment planned around institutional training needs, available space and budget.",
    features: ["Simulation stations", "Equipment and furniture planning", "Installation and training support"],
    icon: HeartPulse,
    image: openLabImg,
    imageAlt: "Illustrative open clinical skills lab with learners using simulators",
  },
  {
    name: "NurseKit Pro Student Backpack",
    category: "Student essentials",
    description: "A durable, organized backpack prepared for nursing students moving between class, lab and clinical rotation.",
    features: ["Stethoscope, thermometer and reflex hammer", "Nurse watch, penlight, scissors and measuring tape", "Clinical Companion diary, stationery and article pouch"],
    icon: Stethoscope,
    image: nurseKitImg,
    imageAlt: "Blue NurseKit Pro backpack",
  },
  {
    name: "Clinical Companion Pocket Diary",
    category: "Learning resources",
    description: "A compact student nurse daily diary for notes and quick reference during clinical learning.",
    features: ["Vital signs and lab values", "Medication and assessment references", "Emergency and communication topics"],
    icon: BookOpen,
    image: clinicalCompanionImg,
    imageAlt: "Clinical Companion student nurse daily diary cover",
    imageFit: "contain",
  },
  {
    name: "Nursing Uniforms",
    category: "Apparel",
    description: "Comfortable, durable uniform options for nurses and nursing students, tailored to institutional requirements.",
    features: ["Scrubs, tunics, trousers and lab coats", "Breathable fabrics with practical pockets", "Colour, fit and institutional branding options"],
    icon: Shirt,
    image: nursingUniformsImg,
    imageAlt: "Teal scrubs and a white nursing tunic with navy trousers on dress forms",
  },
  // {
  //   name: "Nurses' Day Gifts",
  //   category: "Occasion gifts",
  //   description: "Appreciation and professional-growth gift ideas for nursing teams and students.",
  //   features: ["Totes and drinkware", "Pocket diaries and practice tools", "Penlights, watches and pouches"],
  //   icon: Gift,
  // },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-lime-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-lime-400 hover:shadow-xl hover:shadow-lime-950/10">
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,#d9f99d,#f3fbe5_55%,#e6f4d2)] sm:h-60">
        {product.image ? (
          <>
            {product.imageFit === "contain" && (
              <>
                <Image src={product.image} alt="" fill aria-hidden="true" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="scale-115 object-cover opacity-25 blur-2xl transition-transform duration-700 group-hover:scale-125" />
                <div className="absolute inset-0 bg-linear-to-b from-white/15 via-white/45 to-white/20" />
              </>
            )}
            <Image src={product.image} alt={product.imageAlt ?? product.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className={`${product.imageFit === "contain" ? "object-contain p-3 drop-shadow-[0_12px_18px_rgba(15,23,42,0.12)] sm:p-4" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.025]`} />
            {/* <span className="absolute bottom-3 right-3 rounded-full bg-slate-950/75 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur">Illustrative image</span> */}
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="flex size-20 items-center justify-center rounded-3xl border border-lime-300 bg-white/75 text-lime-800 shadow-sm">
              <Icon className="size-10" strokeWidth={1.4} aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-lime-800/70">Image coming soon</span>
          </div>
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-slate-950 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-lime-200">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-lime-700">{product.category}</p>
        <h4 className="mt-3 text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">{product.name}</h4>
        <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
        <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
          {product.features.map((feature) => (
            <li key={feature} className="flex gap-2.5 text-sm leading-6 text-slate-700">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime-500" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        {/* <a href="#contact" className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg pt-6 text-sm font-bold text-lime-800 underline-offset-4 transition-colors hover:text-slate-950 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-600">
          Enquire about this <ArrowUpRight className="size-4" aria-hidden="true" />
        </a> */}
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section id="our-products" aria-labelledby="products-title" className="bg-[#f5faeb] px-5 py-20 text-slate-950 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mx-0 sm:text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-lime-800">Our products &amp; solutions</p>
          <h2 id="products-title" className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Designed for practice. <span className="text-lime-700">Built for progress.</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">Explore practical training kits, institutional lab solutions and essentials for the people who learn and care.</p>
        </div>

        <div>
          <div className="mb-7 flex flex-col gap-3 border-b border-lime-200 pb-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-800">01 / Institutional items</p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Procedure kits &amp; simulators</h3>
            </div>
            <p className="mx-auto max-w-md text-sm leading-6 text-slate-600 sm:mx-0">Hands-on equipment for repeated, structured clinical skills practice.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {procedureKits.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-7 flex flex-col gap-3 border-b border-lime-200 pb-6 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-800">02 / Beyond the kits</p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Labs, learning &amp; everyday essentials</h3>
            </div>
            <p className="mx-auto max-w-md text-sm leading-6 text-slate-600 sm:mx-0">Flexible options for institutions, nursing students and care teams.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {moreSolutions.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}
          </div>
        </div>
        <p className="mt-9 text-center text-xs leading-6 text-slate-500 sm:text-left">Kit contents and configurations can be tailored to the institution. Product and equipment images show representative configurations from MedSim Innovations marketing material.</p>
      </div>
    </section>
  );
}
