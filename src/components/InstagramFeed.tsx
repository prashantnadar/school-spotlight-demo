import type { InstagramPost } from "../lib/instagram.functions";

type Props = {
  posts: InstagramPost[];
  label?: string;
};

function formatDate(iso: string): string {
  const d = new Date(iso);

  if (Number.isNaN(d.getTime())) {
    return iso;
  }

  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getPostAltText(post: InstagramPost): string {
  return post.caption?.trim() || "Instagram post";
}

/**
 * Presentational Instagram grid.
 * Data comes from the server-side Instagram API function.
 */
export function InstagramFeed({
  posts,
  label = "Recent Instagram posts",
}: Props) {
  return (
    <ul
      aria-label={label}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {posts.map((post) => (
        <li
          key={post.id}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-blue-300"
        >
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View this post on Instagram"
            className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            <div className="aspect-square w-full overflow-hidden bg-slate-100">
              {post.mediaType === "VIDEO" && post.mediaUrl ? (
                <video
                  src={post.mediaUrl}
                  poster={post.thumbnailUrl ?? undefined}
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={getPostAltText(post)}
                  className="h-full w-full object-cover"
                />
              ) : post.mediaUrl ? (
                <img
                  src={post.mediaUrl}
                  alt={getPostAltText(post)}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : post.thumbnailUrl ? (
                <img
                  src={post.thumbnailUrl}
                  alt={getPostAltText(post)}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className="flex h-full items-center justify-center p-6 text-center text-sm text-slate-500"
                  role="img"
                  aria-label={getPostAltText(post)}
                >
                  <span>
                    Media preview unavailable.
                    <br />
                    View this post on Instagram.
                  </span>
                </div>
              )}
            </div>

            <div className="p-4">
              {post.caption && (
                <p className="line-clamp-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {post.caption}
                </p>
              )}

              <p className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-500 sm:text-sm">
                <time dateTime={post.timestamp}>
                  {formatDate(post.timestamp)}
                </time>

                <span className="shrink-0 font-medium text-blue-900">
                  View on Instagram
                </span>
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}