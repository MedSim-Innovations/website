"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { productCategories, products } from "@/data/products";
import type { Product, ProductCategoryId } from "@/constants/types";
import SiteCopyright from "@/components/layout/footer";

const accentStyles = {
  cyan: {
    border: "group-hover:border-cyan-300/50",
    glow: "bg-cyan-300/15",
    text: "text-cyan-300",
    line: "from-cyan-300",
  },
  lime: {
    border: "group-hover:border-lime-300/50",
    glow: "bg-lime-300/15",
    text: "text-lime-300",
    line: "from-lime-300",
  },
  yellow: {
    border: "group-hover:border-yellow-300/50",
    glow: "bg-yellow-300/15",
    text: "text-yellow-300",
    line: "from-yellow-300",
  },
};

function ProductVisual({ product }: { product: Product }) {
  const style = accentStyles[product.accent];
  const [imageSource, setImageSource] = useState(product.image);
  return (
    <div className="relative h-48 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,#17201d,#090909_62%)] sm:h-52">
      <div
        className={`absolute top-1/2 left-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${style.glow}`}
      />
      <Image
        src={imageSource}
        alt={imageSource.includes("product-placeholder") ? "Product image placeholder" : product.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        className={`${product.imageFit === "cover" ? "object-cover" : "object-contain p-3 sm:p-4"} transition-transform duration-500 group-hover:scale-[1.025]`}
        onError={() => setImageSource("/products/catalog/product-placeholder.svg")}
      />
      <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/75 px-2.5 py-1 text-[10px] font-bold tracking-[.14em] text-neutral-300 uppercase backdrop-blur">
        {product.tag}
      </span>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const style = accentStyles[product.accent];
  return (
    <article
      className={`group flex min-h-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[.035] transition duration-300 hover:-translate-y-1 hover:bg-white/[.055] ${style.border}`}
    >
      <ProductVisual product={product} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className={`text-[11px] font-bold tracking-[.16em] uppercase ${style.text}`}>{product.categoryLabel}</p>
        <h2 className="mt-3 text-xl font-semibold tracking-[-.02em] text-white">{product.name}</h2>
        <p className="mt-3 text-sm leading-6 text-neutral-400">{product.description}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {product.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-neutral-400"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
      <div
        className={`h-px bg-linear-to-r ${style.line} via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100`}
      />
    </article>
  );
}

export default function Products() {
  const [category, setCategory] = useState<ProductCategoryId>("all");
  const [query, setQuery] = useState("");
  const categoryCounts = useMemo(
    () =>
      Object.fromEntries(
        productCategories.map((item) => [
          item.id,
          item.id === "all" ? products.length : products.filter((product) => product.category === item.id).length,
        ]),
      ),
    [],
  );
  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter(
      (product) =>
        (category === "all" || product.category === category) &&
        (!term ||
          `${product.name} ${product.description} ${product.categoryLabel} ${product.tag} ${product.features.join(" ")}`
            .toLowerCase()
            .includes(term)),
    );
  }, [category, query]);
  return (
    <section className="section-scroll h-full overflow-y-auto bg-black">
      <div className="mx-auto min-h-full w-full max-w-[1700px] px-5 pt-10 pb-16 sm:px-8 sm:pt-14 lg:px-12 2xl:px-16">
        <header className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-bold tracking-[.22em] text-cyan-300 uppercase">02 / Products & solutions</p>
            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] font-semibold tracking-[-.045em] text-balance sm:text-6xl xl:text-7xl">
              Designed for practice.
              <br />
              <span className="bg-linear-to-r from-cyan-300 via-lime-300 to-yellow-300 bg-clip-text text-transparent">
                Built for progress.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
              Explore practical procedure kits, institutional lab solutions, learning resources and essentials for the
              people who learn and care. Configurations can be tailored to the institution.
            </p>
          </div>
          <div className="hidden text-right lg:block">
            <p className="font-mono text-3xl text-white">{String(filtered.length).padStart(2, "0")}</p>
            <p className="mt-1 text-[10px] tracking-[.18em] text-neutral-500 uppercase">Solutions shown</p>
          </div>
        </header>
        <div className="sticky top-0 z-20 -mx-5 border-b border-white/10 bg-black/90 px-5 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12 2xl:-mx-16 2xl:px-16">
          <div className="mx-auto max-w-[1572px]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div
                className="section-scroll flex gap-2 overflow-x-auto pb-1 md:pb-0"
                role="group"
                aria-label="Filter products by category"
              >
                {productCategories.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCategory(item.id)}
                    aria-pressed={category === item.id}
                    className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-cyan-300 ${category === item.id ? "border-cyan-300 bg-cyan-300 text-black" : "border-white/15 bg-white/[.03] text-neutral-400 hover:border-white/30 hover:text-white"}`}
                  >
                    {item.label}{" "}
                    <span className={`${category === item.id ? "text-black/55" : "text-neutral-600"} ml-2`}>
                      {categoryCounts[item.id]}
                    </span>
                  </button>
                ))}
              </div>
              <label className="relative block md:w-80">
                <span className="sr-only">Search products</span>
                <span aria-hidden="true" className="absolute top-1/2 left-4 -translate-y-1/2 text-neutral-500">
                  🔍
                </span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search name, use or feature"
                  className="h-10 w-full rounded-full border border-white/15 bg-white/[.04] pr-20 pl-10 text-sm text-white outline-none placeholder:text-neutral-600 focus:border-cyan-300/70 [&::-webkit-search-cancel-button]:hidden"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-xs font-semibold text-neutral-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </label>
            </div>
            <p className="mt-3 text-[11px] tracking-[.14em] text-neutral-600 uppercase md:hidden">
              {filtered.length} {filtered.length === 1 ? "solution" : "solutions"} shown
            </p>
          </div>
        </div>
        {filtered.length ? (
          <div className="grid gap-4 pt-8 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="grid min-h-72 place-items-center pt-8 text-center">
            <div>
              <p className="text-lg font-semibold">No products found</p>
              <p className="mt-2 text-sm text-neutral-500">Try another category or search term.</p>
              <button
                type="button"
                onClick={() => {
                  setCategory("all");
                  setQuery("");
                }}
                className="mt-5 text-sm font-bold text-cyan-300"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>
      <SiteCopyright />
    </section>
  );
}
