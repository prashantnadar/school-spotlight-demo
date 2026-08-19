import { InstagramFeed } from "./InstagramFeed";
import { instagramPosts } from "../data/instagramPosts";
import { school } from "../config/school";

export function Instagram() {
  return (
    <section id="instagram" aria-labelledby="instagram-heading" className="scroll-mt-24 bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 2xl:max-w-[88rem]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              id="instagram-heading"
              className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
            >
              Follow Us on Instagram
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              A glimpse of everyday life on campus — events, achievements and classroom moments.
            </p>
          </div>
          <a
            href={school.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md border border-blue-900 px-5 py-3 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 sm:text-base"
          >
            Visit our profile
          </a>
        </div>

        <div className="mt-10">
          <InstagramFeed posts={instagramPosts} />
        </div>
      </div>
    </section>
  );
}
