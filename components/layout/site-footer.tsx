import Link from "next/link";

type SiteFooterProps = {
  className?: string;
};

export default function SiteFooter({ className = "" }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full shrink-0 border-t border-white/10 bg-black px-5 py-3 sm:px-8 lg:px-12 ${className} `}>
      <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center justify-between gap-2 text-center lg:flex-row lg:gap-6 lg:text-left">
        <p className="text-[10px] leading-relaxed tracking-wide text-neutral-400 sm:text-[11px]">
          © {currentYear} <span className="font-semibold text-neutral-400">MedSim Innovations Private Limited.</span>{" "}
          All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] tracking-wide sm:text-[11px] lg:justify-end">
          <Link
            href="/privacy"
            className="focus-visible:outline-brand-primary rounded-sm text-neutral-300 underline-offset-4 transition hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Privacy
          </Link>

          <span aria-hidden="true" className="hidden size-1 rounded-full bg-neutral-600 sm:block" />

          <span className="font-medium text-neutral-400">CIN U46596HR2024PTC125730</span>

          <span aria-hidden="true" className="hidden size-1 rounded-full bg-neutral-600 sm:block" />

          <span className="text-neutral-400">
            Incorporated in India
            <span className="mx-2 text-neutral-700">·</span>
            24 October 2024
          </span>
        </div>
      </div>
    </footer>
  );
}
