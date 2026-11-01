import Image from "next/image";
import Link from "next/link";
import CompanyLogo from "@/public/logo.png";
import SiteCopyright from "@/components/layout/footer";

type StatusPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionLabel: string;
  onAction?: () => void;
};

export default function StatusPage({ eyebrow, title, description, actionLabel, onAction }: StatusPageProps) {
  const actionClassName =
    "mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-cyan-300 px-6 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";

  return (
    <main className="section-scroll h-dvh overflow-y-auto bg-black text-white">
      <div className="relative grid min-h-full place-items-center overflow-hidden px-5 py-12">
        <div className="pointer-events-none absolute -top-40 -left-40 size-[32rem] rounded-full bg-cyan-300/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 -bottom-40 size-[32rem] rounded-full bg-lime-300/10 blur-[120px]" />
        <section className="relative w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/[.035] p-8 text-center shadow-2xl backdrop-blur sm:p-12">
          <Image src={CompanyLogo} alt="" className="mx-auto size-16 object-contain" priority />
          <p className="mt-7 text-xs font-bold tracking-[.22em] text-cyan-300 uppercase">{eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-tight font-semibold tracking-[-.04em] sm:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-neutral-400 sm:text-base">{description}</p>
          {onAction ? (
            <button type="button" onClick={onAction} className={actionClassName}>
              {actionLabel}
            </button>
          ) : (
            <Link href="/" className={actionClassName}>
              {actionLabel}
            </Link>
          )}
        </section>
      </div>
      <SiteCopyright />
    </main>
  );
}
