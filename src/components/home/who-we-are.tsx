import Link from "next/link";

export default function WhoWeAre() {
    return (
        <div id="who-we-are" className="w-full h-auto flex flex-col bg-white">
            <section className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8">
                <p className="mb-4 text-lg font-semibold uppercase tracking-[0.25em] text-orange-500">
                    Who We Are
                </p>

                <h1 className="mx-auto max-w-5xl font-serif text-3xl font-bold capitalize leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    Enhancing patient safety through{" "}
                    
                    <span className="bg-linear-to-br from-orange-400 to-amber-500 bg-clip-text text-transparent">
                        affordable simulation technology
                    </span>
                </h1>

                <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 sm:text-base">
                    At MedSim Innovations, we are committed to improving medical education through affordable, state-of-the-art simulation technology. Our advanced simulators allow healthcare professionals to develop clinical skills in a safe, controlled environment, helping reduce the risk of real-world errors.
                </p>
            </section>

            <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
                <div className="grid overflow-hidden rounded-3xl bg-zinc-950 text-white lg:grid-cols-2">
                    <div className="border-b border-white p-8 sm:p-10 lg:border-b-0 lg:border-r">
                        <p className="mb-3 text-orange-400 text-sm font-semibold uppercase tracking-[0.25em]">
                            Background
                        </p>

                        <h2 className="text-3xl font-bold capitalize sm:text-4xl">
                            Why simulation-based training?
                        </h2>

                        <p className="mt-5 text-sm leading-7 sm:text-base italic">
                            Medical errors are a major concern worldwide. According to the World Health Organization, patient safety incidents rank among the leading causes of death and disability.
                        </p>

                        <a
                        href="https://www.who.int/news-room/fact-sheets/detail/patient-safety"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 text-orange-400 inline-flex text-sm font-semibold underline rounded-full capitalize"
                        >
                            View WHO patient safety reference
                        </a>
                    </div>

                    <div className="p-8 sm:p-10">
                        <div className="space-y-5 text-sm leading-7 sm:text-base">
                            <p>
                                Many preventable errors can be minimized through hands-on,
                                simulation-based learning that helps professionals practice,
                                repeat, and refine clinical skills before applying them in real
                                patient-care settings.
                            </p>

                            <p>
                                At MedSim Innovations Pvt. Ltd., we recognize the urgent need
                                for high-quality, affordable training solutions, especially for
                                nursing colleges and small hospitals in developing countries.
                            </p>

                            <p>
                                Beyond simulation technology, we assist institutions in
                                designing affordable simulation labs that meet rigorous
                                educational and compliance standards.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
                        >
                            Contact Us For A Detailed Discussion
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}