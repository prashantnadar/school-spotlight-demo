import { useEffect, useState } from "react";
import { InstagramFeed } from "./InstagramFeed";
import { school } from "../config/school";
import {
  getInstagramPosts,
  type InstagramPost,
} from "../lib/instagram.functions";

export function Instagram() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadInstagramPosts() {
      try {
        setLoading(true);
        setError(null);

        const data = await getInstagramPosts();

        if (!cancelled) {
          setPosts(data);
        }
      } catch (err) {
        console.error("Failed to load Instagram posts:", err);

        if (!cancelled) {
          setError("Unable to load Instagram posts right now.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadInstagramPosts();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="instagram"
      aria-labelledby="instagram-heading"
      className="scroll-mt-24 bg-slate-50"
    >
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
              A glimpse of everyday life on campus — events, achievements and
              classroom moments.
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
          {loading && (
            <div
              className="py-12 text-center text-sm text-slate-500"
              role="status"
            >
              Loading Instagram posts…
            </div>
          )}

          {!loading && error && (
            <div
              className="py-12 text-center text-sm text-slate-500"
              role="alert"
            >
              {error}
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="py-12 text-center text-sm text-slate-500">
              No Instagram posts available right now.
            </div>
          )}

          {!loading && !error && posts.length > 0 && (
            <InstagramFeed posts={posts} />
          )}
        </div>
      </div>
    </section>
  );
}