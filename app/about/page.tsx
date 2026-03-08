// App Layout
import AppLayout from "@/components/layouts/app-layout";

// Images
import HospitalsImg from "@/public/images/about/hospitals.jpg";
import MedicalCollegesImg from "@/public/images/about/medical-colleges.jpg";
import NursingCollegesImg from "@/public/images/about/nursing-colleges.jpg";

// Icons
import faCircleCheckSolid from "@/public/icons/circle-check-solid-full.svg";
import faGlobeSolid from "@/public/icons/globe-solid-full.svg";
import faLightbulbSolid from "@/public/icons/lightbulb-solid-full.svg";
import faScrewdriverWrenchSolid from "@/public/icons/screwdriver-wrench-solid-full.svg";
import faUsersSolid from "@/public/icons/users-solid-full.svg";

// Libraries
import Image from "next/image";
import { StaticImageData } from "next/image";

// Mapped Lists
const valuePillars = [
  { icon: faLightbulbSolid, title: "Innovation", desc: "Continuous investment in research and development to bring the latest technology to the market." },
  { icon: faScrewdriverWrenchSolid, title: "Customization", desc: "Ability to tailor simulation solutions to meet the specific needs of each client." },
  { icon: faCircleCheckSolid, title: "Quality & Realism", desc: "High standards in product design, ensuring that simulators offer lifelike experiences." },
  { icon: faUsersSolid, title: "Support", desc: "Providing end-to-end service from product selection and installation to ongoing maintenance and training." },
  { icon: faGlobeSolid, title: "Global Reach", desc: "A network of distributors and partners that allow us to serve clients worldwide." },
];

const customers: { title: string; img: StaticImageData; desc: string }[] = [
  { title: "Nursing Colleges", img: NursingCollegesImg, desc: "Offering training kits specifically designed for nursing education and practical training." },
  { title: "Medical Colleges", img: MedicalCollegesImg, desc: "Providing advanced tools for medical students and residents to enhance their hands-on learning experience." },
  { title: "Hospitals", img: HospitalsImg, desc: "Supporting ongoing professional development and competency assessments for healthcare providers." },
];

export default function About() {
  return (
    <AppLayout>
      <div className="min-h-screen mt-14 flex flex-col">

        {/* Background */}
        <div className="w-full h-auto flex flex-col">
          <div className="w-full flex justify-center items-center bg-sky-400 p-12 shadow-md">
            <h2 className="text-4xl capitalize text-black font-serif font-bold italic text-center">background</h2>
          </div>

          <div className="w-full flex flex-col justify-center items-center p-12 py-18 gap-12 bg-sky-50">
            <p className="text-black font-serif text-lg text-center max-w-6xl">At MedSim Innovations, we are committed to enhancing patient safety and improving medical education through affordable, state-of-the-art simulation technology. Our advanced medical simulators and training equipment allow healthcare professionals to develop their skills in a safe, controlled environment, reducing the risk of real-world errors.</p>

            <div className="w-full max-w-6xl border-2 border-black rounded-lg flex flex-col justify-center items-center gap-8 p-8">
              <h3 className="text-2xl capitalize text-sky-600 font-serif font-bold italic text-center">why simulation-based training?</h3>
              <p className="text-black font-serif text-lg text-center">Medical errors, particularly in nursing, are a significant concern in healthcare systems worldwide. According to the <span className="italic">World Health Organization (WHO)</span>, <a href="https://www.who.int/news-room/fact-sheets/detail/patient-safety" target="_blank" className="underline hover:bg-sky-600 hover:text-white">patient safety incidents rank among the leading causes of death and disability</a>. Many of these errors stem from insufficient training, miscommunication, or procedural mistakes—all of which can be minimized through hands-on, simulation-based learning.</p>
              <p className="text-black font-serif text-lg text-center">At <span className="font-bold">MedSim Innovations Pvt. Ltd.</span>, we recognize the urgent need for high-quality, affordable training solutions, especially for nursing colleges and small hospitals in developing countries. By providing cost-effective medical simulators and training materials, we help bridge the gap between theoretical knowledge and practical expertise, ultimately improving patient care outcomes.</p>
            </div>

            <p className="text-black font-serif text-center text-lg max-w-6xl">Beyond offering cutting-edge simulation technology, we assist healthcare institutions in designing and setting up affordable simulation labs that meet rigorous educational and compliance standards. Our expertise ensures that medical educators can create realistic, high-impact learning environments without exceeding budget constraints. If you're interested in building a simulation lab that transforms the way your students are trained, contact us for a detailed discussion—we're here to help you make a difference.</p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="w-full h-auto flex flex-col">
          <div className="w-full flex justify-center items-center bg-green-400 p-12 shadow-md">
            <h2 className="text-4xl capitalize text-black font-serif font-bold italic text-center">mission & vision</h2>
          </div>

          <div className="w-full h-auto p-12 py-18 flex md:flex-row flex-col max-md:gap-4 bg-green-50">
            <div className="w-full md:border-r p-4 flex flex-col justify-start items-center gap-4">
              <h3 className="text-2xl capitalize text-green-600 font-serif font-bold italic text-center">mission statement</h3>
              <p className="text-black font-serif text-center text-lg max-w-6xl">To revolutionize healthcare education by providing cutting-edge medical simulation technology that empowers healthcare professionals' clinical competency through simulation solutions for high standards of patient care.</p>
            </div>

            <div className="w-full md:border-l p-4 flex flex-col justify-start items-center gap-4">
              <h3 className="text-2xl capitalize text-green-600 font-serif font-bold italic text-center">vision statement</h3>
              <p className="text-black font-serif text-center text-lg max-w-6xl">We envision a world where simulation-based education is the cornerstone of healthcare training, ensuring better patient outcomes and advancing the quality of healthcare worldwide.</p>
            </div>
          </div>
        </div>

        {/* Value Pillars */}
        <div className="w-full h-auto flex flex-col">
          <div className="w-full flex justify-center items-center bg-orange-400 p-12 shadow-md">
            <h2 className="text-4xl capitalize text-black font-serif font-bold italic text-center">value pillars</h2>
          </div>

          <div className="w-full h-auto flex flex-row flex-wrap gap-8 justify-center items-center p-12 py-18 bg-orange-50">
            {valuePillars.map((item, i) => (
              <div key={i} className="p-4 border-2 border-black rounded-lg flex flex-col justify-start items-center gap-4 w-100 md:h-52 h-auto hover:scale-105 transition-all duration-300">
                <Image src={item.icon} alt="icon" className="w-10 h-10" style={{ filter: "invert(50%) sepia(80%) saturate(800%) hue-rotate(360deg) brightness(100%)" }} />
                <h3 className="text-2xl capitalize text-orange-500 font-serif font-bold italic text-center">{item.title}</h3>
                <p className="text-black font-serif text-center text-md">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Customers */}
        <div className="w-full h-auto flex flex-col">
          <div className="w-full flex justify-center items-center bg-purple-400 p-12 shadow-md">
            <h2 className="text-4xl capitalize text-black font-serif font-bold italic text-center">our customers</h2>
          </div>

          <div className="w-full h-auto flex flex-row flex-wrap gap-12 justify-center items-center p-12 py-18 bg-purple-50">
            {customers.map((item, i) => (
              <div key={i} className="w-80 md:h-108 h-auto border-2 rounded-lg p-4 flex flex-col hover:scale-105 transition-all duration-300">
                <div className="w-full h-5/8">
                  <Image src={item.img} alt={item.title} className="object-cover w-full h-full max-h-80" />
                </div>
                <div className="w-full h-3/8 flex flex-col justify-center items-center gap-4">
                  <h3 className="text-2xl capitalize text-purple-600 font-serif font-bold italic text-center">{item.title}</h3>
                  <p className="text-black font-serif text-center text-md">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </AppLayout>
  );
}