import SiteCopyright from "@/components/layout/footer";
import { siteConfig } from "@/lib/site";

const contactDetails = [
  { label: "Business enquiries", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Phone", value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
];

export default function Contact() {
  return (
    <section
      tabIndex={0}
      className="section-scroll relative h-full overflow-y-auto bg-black focus-visible:outline-none"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 size-[34rem] rounded-full bg-rose-600/10 blur-[120px]" />
        <div className="absolute -top-32 -right-40 size-[38rem] rounded-full bg-red-500/[.08] blur-[140px]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(244,63,94,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,.09)_1px,transparent_1px)] [background-size:72px_72px] opacity-20" />
      </div>
      <div className="relative mx-auto grid min-h-full w-full max-w-[1700px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:px-12 2xl:px-16">
        <div>
          <p className="text-xs font-bold tracking-[.22em] text-rose-400 uppercase">05 / Contact</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-.045em] text-balance sm:text-6xl xl:text-7xl">
            Plan your next
            <br />
            <span className="text-rose-300">simulation experience.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
            Request product information, a quotation, a lab discussion or details about healthcare simulation and
            training services.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <span className="h-px w-12 bg-rose-500" />
            <span className="text-[10px] font-bold tracking-[.22em] text-rose-200 uppercase">
              Safer practice starts with a conversation
            </span>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-rose-400/20 bg-[#12090c]/90 shadow-[0_30px_100px_rgba(190,18,60,.12)] backdrop-blur-xl">
          <div className="border-b border-rose-300/15 p-7 sm:p-9">
            <p className="text-xs font-bold tracking-[.18em] text-rose-400 uppercase">MedSim Innovations Pvt. Ltd.</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-.03em]">Let&apos;s talk.</h2>
          </div>
          {contactDetails.map((detail) => (
            <a
              key={detail.label}
              href={detail.href}
              className="group flex items-center justify-between gap-4 border-b border-rose-300/15 p-7 transition hover:bg-rose-400/[.06] sm:p-9"
            >
              <span className="min-w-0">
                <span className="block text-[10px] font-bold tracking-[.18em] text-rose-200 uppercase">
                  {detail.label}
                </span>
                <span className="mt-2 block text-base break-all text-neutral-100 sm:text-lg sm:break-normal">
                  {detail.value}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 text-rose-400 transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          ))}
          <p className="p-7 text-xs leading-6 text-rose-100 sm:p-9">
            Product specifications, configurations and service scope are confirmed during enquiry and quotation.
          </p>
        </div>
        <section className="overflow-hidden rounded-[2rem] border border-rose-400/20 bg-[#12090c]/90 shadow-[0_30px_100px_rgba(190,18,60,.1)] lg:col-span-2">
          <div className="flex flex-col gap-4 border-b border-rose-300/15 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="text-xs font-bold tracking-[.18em] text-rose-400 uppercase">Visit us</p>
              <h2 className="mt-2 text-xl font-semibold tracking-[-.02em] sm:text-2xl">
                Lane Q, South City I, Gurugram
              </h2>
            </div>
            <a
              href={siteConfig.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-rose-700 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-rose-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-300"
            >
              Open in Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="relative h-80 bg-neutral-950 sm:h-96">
            <iframe
              src={siteConfig.maps.embed}
              title="Map showing MedSim Innovations in South City I, Gurugram"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0 [filter:grayscale(.25)_invert(.92)_hue-rotate(180deg)_saturate(.75)_brightness(.72)_contrast(1.08)]"
            />
            <div className="pointer-events-none absolute inset-0 bg-rose-950/10 mix-blend-color" aria-hidden="true" />
          </div>
        </section>
      </div>
      <SiteCopyright />
    </section>
  );
}
