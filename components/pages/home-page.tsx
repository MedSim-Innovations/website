import Image from "next/image";
import Link from "next/link";

// Images
import HeroImage from "@/public/hero.jpg";
import SimulationImage from "@/public/collaborative-medical-simulation-training.png";

// Icons
import Icon from "@/components/ui/icon";
import { ICON_PATHS } from "@/components/ui/icons";
import { heroCallouts, heroCopy, heroTags } from "@/content/home";

function Hotspot({ id, color }: { id: number; color: string }) {
  return (
    <div
      className="relative flex size-9 items-center justify-center rounded-full border-2 border-black text-xs font-extrabold text-black shadow-[0_0_18px_rgba(253,224,71,0.4)] sm:size-10"
      style={{ backgroundColor: color }}
    >
      <span className="absolute -inset-1.5 rounded-full border opacity-60" style={{ borderColor: color }} />
      {id}
    </div>
  );
}

function CalloutCard({
  id,
  title,
  text,
  color,
  compact = false,
}: {
  id: number;
  title: string;
  text: string;
  color: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`relative flex w-full items-start gap-3 rounded-xl border border-white/15 bg-black/90 text-left backdrop-blur-md ${compact ? "p-3 2xl:p-4" : "p-4 sm:p-5"} `}
    >
      <div
        className="flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold text-black"
        style={{ backgroundColor: color }}
      >
        {String(id).padStart(2, "0")}
      </div>

      <div className="min-w-0">
        <h3
          className={`leading-snug font-bold uppercase ${compact ? "text-[10px] 2xl:text-xs" : "text-xs sm:text-sm"}`}
          style={{ color }}
        >
          {title}
        </h3>

        <p
          className={`mt-1.5 leading-relaxed text-gray-300 ${
            compact ? "text-[10px] 2xl:text-xs" : "text-xs sm:text-sm"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function HomePageContent() {
  return (
    <section className="relative isolate flex min-h-[calc(100dvh-5rem)] w-full flex-col overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image src={HeroImage} alt="" fill priority sizes="100vw" className="object-cover object-center" />

        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="mx-auto grid w-full max-w-[1700px] flex-1 grid-cols-1 items-center justify-items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 lg:gap-12 lg:px-12 xl:min-h-0 xl:grid-cols-[0.85fr_1.15fr] xl:justify-items-stretch xl:gap-6 xl:px-12 xl:py-6 2xl:gap-10 2xl:px-16">
          <div className="flex w-full max-w-2xl flex-col items-center justify-center text-center xl:items-start xl:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 xl:justify-start">
              {heroTags.map((tag) => (
                <span
                  key={tag}
                  className="border-brand-primary/40 bg-brand-primary/10 rounded-full border px-3 py-1.5 text-[11px] font-medium text-cyan-100 sm:px-4 sm:py-2 sm:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="from-brand-primary via-brand-secondary to-brand-highlight mt-7 max-w-175 bg-linear-to-r bg-clip-text pb-2 text-[clamp(2.7rem,7vw,5rem)] leading-[1.12] font-semibold tracking-[-.035em] text-transparent capitalize xl:text-[clamp(2.7rem,4vw,4.75rem)]">
              {heroCopy.heading}
            </h1>

            <p className="mt-5 max-w-138 text-sm leading-7 text-gray-300 sm:mt-7 sm:text-base sm:leading-8 xl:text-[15px]">
              {heroCopy.description}
            </p>
          </div>

          <div className="flex w-full min-w-0 flex-col items-center justify-center xl:h-full">
            <div className="flex w-full flex-col items-center gap-8 xl:hidden">
              <div className="relative aspect-square w-[min(100%,300px)] sm:w-[min(100%,400px)] lg:w-[min(100%,440px)]">
                <div className="border-brand-primary/20 absolute -inset-3 rounded-full border" />

                <div className="border-brand-primary/60 absolute inset-0 overflow-hidden rounded-full border-2 bg-black shadow-[0_0_45px_rgba(34,211,238,0.12)]">
                  <Image
                    src={SimulationImage}
                    alt="Medical simulation training"
                    fill
                    priority
                    sizes="(max-width: 640px) 300px, 440px"
                    className="object-contain"
                  />
                </div>

                {heroCallouts.map((point) => (
                  <div
                    key={point.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: point.x, top: point.y }}
                  >
                    <Hotspot id={point.id} color={point.color} />
                  </div>
                ))}
              </div>

              <div className="grid w-full max-w-xl grid-cols-1 gap-3">
                {heroCallouts.map((point) => (
                  <CalloutCard key={point.id} {...point} />
                ))}
              </div>
            </div>

            <div className="relative hidden aspect-10/7 w-full max-w-212 xl:block">
              <div className="absolute top-[7%] left-[4%] aspect-square w-[60%] rounded-full">
                <div className="border-brand-primary/15 absolute -inset-3 rounded-full border" />

                <div className="border-brand-primary/65 absolute inset-0 overflow-hidden rounded-full border-2 bg-black shadow-[0_0_55px_rgba(34,211,238,0.12)]">
                  <Image
                    src={SimulationImage}
                    alt="Medical simulation training"
                    fill
                    priority
                    sizes="(min-width: 1536px) 510px, 420px"
                    className="object-contain"
                  />
                </div>

                {heroCallouts.map((point) => (
                  <div
                    key={point.id}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: point.x, top: point.y }}
                  >
                    <Hotspot id={point.id} color={point.color} />
                  </div>
                ))}
              </div>

              <svg
                className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible"
                viewBox="0 0 1000 700"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path d="M328 220 H400 L630 50 H680" stroke="#67e8f9" strokeWidth="1.8" strokeOpacity="0.8" />
                <path d="M376 330 H550 L660 270 H680" stroke="#bef264" strokeWidth="1.8" strokeOpacity="0.8" />
                <path d="M304 440 H520 L570 500 H680" stroke="#fde047" strokeWidth="1.8" strokeOpacity="0.8" />
                <circle cx="680" cy="50" r="4" fill="#67e8f9" />
                <circle cx="680" cy="270" r="4" fill="#bef264" />
                <circle cx="680" cy="500" r="4" fill="#fde047" />
              </svg>

              {heroCallouts.map((point) => (
                <div
                  key={point.id}
                  className="absolute left-[68%] z-20 w-[32%] -translate-y-[42%]"
                  style={{ top: point.cardTop }}
                >
                  <CalloutCard {...point} compact />
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="relative mt-auto shrink-0 border-t border-white/15 bg-black/50">
          <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center justify-center gap-3 px-5 py-4 sm:px-8 md:flex-row md:justify-between xl:px-12 2xl:px-16">
            <p className="text-center text-[10px] leading-5 font-bold tracking-wider text-gray-400 uppercase sm:text-xs md:text-left">
              {heroCopy.footer}
            </p>

            <Link
              href="/products"
              className="group focus-visible:outline-brand-primary flex shrink-0 items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <p className="text-brand-primary text-xs font-bold tracking-wide uppercase">DISCOVER MEDSIM</p>

              <Icon
                path={ICON_PATHS.arrowDown}
                className="text-brand-primary h-5 w-auto transition-transform group-hover:translate-y-1"
              />
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
}
