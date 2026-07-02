import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <p className="mb-4 text-lg font-semibold uppercase tracking-[0.25em] text-rose-300">
          Contact Us
        </p>

        <h1 className="mx-auto max-w-4xl font-serif text-3xl font-bold capitalize leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Let’s discuss your{" "}
          <span className="bg-linear-to-br from-rose-300 to-pink-500 bg-clip-text text-transparent">
            simulation training needs
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          Reach out to MedSim Innovations for product enquiries, simulation lab
          planning, installation support, or detailed consultation.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-24 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl border border-rose-300 bg-zinc-950 p-8">
          <h2 className="text-2xl font-bold text-white">Get In Touch</h2>

          <div className="mt-8 space-y-6 text-sm text-zinc-400">
            <div>
              <p className="font-semibold text-rose-300">Email</p>
              <a
                href="mailto:sales@medsiminnovations.com"
                className="mt-1 block transition hover:text-white text-lg"
              >
                sales@medsiminnovations.com
              </a>
            </div>

            {/* <div>
              <p className="font-semibold text-rose-300">Phone</p>
              <a
                href="tel:+919971466122"
                className="mt-1 block transition hover:text-white text-lg"
              >
                +91 99714 66122
              </a>
            </div> */}

            <div>
              <p className="font-semibold text-rose-300">Location</p>
              <p className="mt-1 leading-7 text-lg">
                Lane Q, South City I, Gurugram, Haryana, India
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-rose-300 bg-zinc-950">
          <div className="p-6 text-center">
            <p className="text-lg font-semibold uppercase tracking-[0.25em] text-rose-300">
              Find Us
            </p>
          </div>

          <div className="h-105">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.977345743138!2d77.05952517579877!3d28.450099292341225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f3792b8429%3A0x3d9bb96088d10356!2sLane%20Q%2C%20Block%20P%2C%20Block%20Q%2C%20South%20City%20I%2C%20Gurugram%2C%20Haryana%20122022%2C%20India!5e0!3m2!1sen!2sca!4v1730182175581!5m2!1sen!2sca"
              width="100%"
              height="100%"
              allowFullScreen={false}
              loading="lazy"
              title="Google Maps"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}