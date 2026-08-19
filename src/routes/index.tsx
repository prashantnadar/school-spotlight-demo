import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Instagram } from "../components/Instagram";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
// import { BackToTop } from "../components/BackToTop";
import { school } from "../config/school";

const title = `${school.name} — ${school.tagline}`;
const description =
  "A demo school website: admissions information, about the school, campus highlights and a contact form that opens WhatsApp with your enquiry pre-filled.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          name: school.name,
          slogan: school.tagline,
          email: school.email,
          telephone: school.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: school.address,
            addressLocality: "Mumbai",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          sameAs: [school.instagramUrl],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-blue-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Instagram />
        <Contact />
      </main>
      <Footer />
      {/* <BackToTop /> */}
    </div>
  );
}
