import PageContainer from "@/components/ui/page-container";
import { siteConfig } from "@/content/site";

const sections = [
  {
    title: "Information this website does not collect",
    content:
      "This website does not use account registration, contact forms, analytics, advertising pixels, tracking technologies or cookies. It does not store information in your browser.",
  },
  {
    title: "Technical hosting logs",
    content:
      "The infrastructure providers that deliver and secure this website may automatically process standard request information such as an IP address, browser or device type, requested page, referring page, and the date and time of a request. This information is used to deliver the website, maintain security and diagnose technical problems. Retention is controlled by the relevant infrastructure provider and service configuration.",
  },
  {
    title: "Contacting the company",
    content:
      "The email and telephone links on this website open your own email or telephone application. If you choose to contact MedSim Innovations, the company receives the information you voluntarily include and uses it to respond to your enquiry or provide requested business information.",
  },
  {
    title: "Google Maps",
    content:
      "The Contact page includes an embedded Google Map that may send standard technical information, such as your IP address and browser details, to Google when it loads. The separate directions link opens Google Maps in a new tab. Google processes this information under its own terms and privacy policy.",
  },
] as const;

export default function PrivacyPageContent() {
  return (
    <section className="min-h-[calc(100dvh-5rem)] bg-black">
      <PageContainer className="py-12 sm:py-16">
        <header className="max-w-4xl border-b border-white/10 pb-10">
          <p className="text-brand-primary text-xs font-bold tracking-[.22em] uppercase">Privacy</p>
          <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-[-.04em] sm:text-6xl">Privacy notice</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-300 sm:text-base">
            This notice explains the limited information handling associated with the MedSim Innovations public website.
            It was last updated on 13 November 2026.
          </p>
        </header>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-300">{section.content}</p>
            </article>
          ))}
        </div>

        <section className="mt-6 rounded-2xl border border-white/10 bg-[#071316] p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Questions and requests</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-300">
            For a privacy question or a request concerning information you have provided directly to the company, email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-brand-primary focus-visible:outline-brand-primary rounded-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {siteConfig.email}
            </a>
            . This notice may be updated if the website begins collecting information or adopts new third-party
            services.
          </p>
        </section>
      </PageContainer>
    </section>
  );
}
