import { ProductsViewer } from "./viewer";

export default function Products() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
        <section className="mx-auto max-w-7xl px-5 py-12 text-center sm:px-8 lg:py-32">
            <p className="mb-4 text-lg font-semibold uppercase tracking-[0.25em] text-lime-300">
            our products
            </p>

            <h1 className="mx-auto max-w-5xl font-serif text-3xl font-bold capitalize leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Simulation training kits for{" "}
                <span className="bg-linear-to-br from-lime-300 to-green-500 bg-clip-text text-transparent">
                    nursing excellence
                </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                Click any product to explore detailed features, supported procedures,
            and ideal applications.
            </p>
        </section>
        
        <ProductsViewer />
    </main>
  );
}