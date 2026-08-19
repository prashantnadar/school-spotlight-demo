import logo from "../assets/school-logo.png";
import { school } from "../config/school";
import { scrollToSection } from "../lib/scroll";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "instagram", label: "Instagram" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 2xl:max-w-[88rem]">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt={`${school.name} logo`}
                width={512}
                height={512}
                loading="lazy"
                className="h-11 w-11 shrink-0 bg-white/95 p-1 object-contain rounded-md"
              />
              <span>
                <span className="block text-lg font-bold text-white">{school.name}</span>
                <span className="block text-sm text-slate-400">{school.tagline}</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              A demo website layout. All school details shown here are placeholders and can be
              replaced with the real information.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className="rounded text-sm text-slate-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h2>
            <address className="mt-4 space-y-2 text-sm not-italic text-slate-300">
              <p>{school.address}</p>
              <p>
                <a
                  href={`tel:${school.phone.replace(/\s|X/g, "")}`}
                  className="rounded transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {school.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${school.email}`}
                  className="rounded break-all transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {school.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <p className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-400 sm:text-sm">
          © {new Date().getFullYear()} {school.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
