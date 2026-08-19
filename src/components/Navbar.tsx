import { useEffect, useState } from "react";
import logo from "../assets/school-logo.png";
import { school } from "../config/school";
import { scrollToSection } from "../lib/scroll";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "instagram", label: "Instagram" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8 2xl:max-w-[88rem]">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            go("home");
          }}
          className="flex min-w-0 items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 sm:gap-3"
        >
          <img
            src={logo}
            alt={`${school.name} logo`}
            width={512}
            height={512}
            className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
          />
          <span className="min-w-0">
            <span className="block truncate text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              {school.name}
            </span>
            <span className="hidden text-xs text-slate-500 sm:block">{school.tagline}</span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-1 lg:gap-2">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.id);
                  }}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 lg:text-base ${
                    active === link.id
                      ? "bg-blue-50 text-blue-900"
                      : "text-slate-700 hover:bg-slate-100 hover:text-blue-900"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => go("contact")}
                className="ml-1 rounded-md bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 lg:text-base"
              >
                Enquire Now
              </button>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-slate-800 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 md:hidden"
        >
          <span aria-hidden="true" className="flex flex-col items-center justify-center gap-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-slate-200 bg-white md:hidden"
      >
        <nav aria-label="Mobile navigation" className="px-4 py-3 sm:px-6">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.id);
                  }}
                  className={`block rounded-md px-3 py-3 text-base font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${
                    active === link.id
                      ? "bg-blue-50 text-blue-900"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
