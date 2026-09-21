import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact-form";

const mapUrl =
  "https://www.google.com/maps?q=Lane%20Q%2C%20South%20City%20I%2C%20Gurugram%2C%20Haryana%2C%20India&output=embed";
const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Lane%20Q%2C%20South%20City%20I%2C%20Gurugram%2C%20Haryana%2C%20India";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-[#fff4f6] px-5 py-20 text-slate-950 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mx-0 sm:text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-rose-700">Contact us</p>
          <h2 id="contact-title" className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Let’s discuss your <span className="text-rose-600">simulation training needs.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:mx-0">
            Reach out for product enquiries, simulation lab planning, installation support or a detailed consultation.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-center text-white sm:p-9 sm:text-left lg:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-rose-300/20" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-rose-500/10 blur-3xl" />
            <div className="relative">
              <span className="mx-auto flex size-13 items-center justify-center rounded-2xl bg-rose-400/15 text-rose-300 sm:mx-0">
                <MessageCircle className="size-7" aria-hidden="true" />
              </span>
              <h3 className="mt-8 text-2xl font-extrabold tracking-tight sm:text-3xl">Start a conversation.</h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-300 sm:mx-0">We can help you explore a practical setup for your learners, team and space.</p>

              <div className="mt-10 space-y-7 border-t border-white/15 pt-8">
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-rose-300"><Mail className="size-5" aria-hidden="true" /></span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-300">Email</p>
                    <a href="mailto:sales@medsiminnovations.com" className="mt-1 block text-sm font-semibold text-white underline-offset-4 hover:text-rose-200 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-300 sm:text-base">
                      sales@<span className="block sm:inline">medsiminnovations.com</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-rose-300"><MapPin className="size-5" aria-hidden="true" /></span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-300">Visit us</p>
                    <p className="mt-1 text-base leading-7 text-white">Lane Q, South City I<br />Gurugram, Haryana, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>

        <div className="mt-6 overflow-hidden rounded-[2rem] border border-rose-200 bg-white shadow-sm">
          <div className="flex flex-col items-center gap-3 p-6 text-center sm:flex-row sm:justify-between sm:p-8 sm:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-700">Find us</p>
              <h3 className="mt-1 text-xl font-extrabold tracking-tight sm:text-2xl">MedSim Innovations, Gurugram</h3>
            </div>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-sm font-bold text-rose-700 underline-offset-4 hover:text-rose-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-600">
              Open in Google Maps <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
          <iframe
            src={mapUrl}
            title="Map showing MedSim Innovations in South City I, Gurugram"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full border-0 sm:h-96"
          />
        </div>
      </div>
    </section>
  );
}
