import AppLayout from "@/components/layouts/app-layout";

export default function Products() {
  return (
    <AppLayout>
      <section className="px-6 pb-24 pt-6 sm:px-8 lg:px-12">
        <div className="animated-border mx-auto max-w-5xl rounded-[2.5rem] p-[1px]">
          <div className="rounded-[2.45rem] bg-slate-950/92 px-8 py-16 text-center sm:px-12">
            <p className="eyebrow mx-auto">Product line</p>
            <h1 className="section-title mt-8 text-white">A sharper catalog experience is coming next.</h1>
            <p className="section-copy mx-auto mt-6 max-w-2xl">
              The route is still intentionally disabled by middleware, but the page copy now matches
              the redesigned visual system if that route is re-enabled later.
            </p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
