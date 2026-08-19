import heroImage from "../assets/hero-school.jpg";
import { school } from "../config/school";
import { scrollToSection } from "../lib/scroll";

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-heading" className="scroll-mt-24 bg-slate-50">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24 2xl:max-w-[88rem]">
        <div className="max-w-2xl">
          <p className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-900 sm:text-sm">
            Admissions Open
          </p>
          <h1
            id="home-heading"
            className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            {school.name}
          </h1>
          <p className="mt-3 text-lg font-semibold text-blue-900 sm:text-xl lg:text-2xl">
            Shaping Confident Learners for a Brighter Tomorrow
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {school.tagline} — a nurturing environment where academic excellence, character and
            creativity grow together. Our dedicated educators help every child discover their
            strengths and reach their full potential.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Contact Us
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("about")}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-blue-900 px-6 py-3 text-base font-semibold text-blue-900 transition-colors hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full">
          <img
            src={heroImage}
            alt="Students walking outside the school campus building"
            width={1600}
            height={1100}
            className="h-auto w-full rounded-xl border border-slate-200 object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
