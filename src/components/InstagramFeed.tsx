export type InstagramPost = {
  id: string;
  imageUrl: string;
  caption: string;
  /** ISO date string, e.g. "2026-07-14" */
  date: string;
  permalink: string;
};

type Props = {
  posts: InstagramPost[];
  /** Optional accessible label for the list of posts. */
  label?: string;
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

/**
 * Presentational Instagram grid. Data is passed in, so the dummy demo data can
 * later be swapped for real Instagram API results without UI changes.
 */
export function InstagramFeed({ posts, label = "Recent Instagram posts" }: Props) {
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
            className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            <img
              src={post.imageUrl}
              alt={post.caption}
              width={800}
              height={800}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{post.caption}</p>
              <p className="mt-3 flex items-center justify-between text-xs text-slate-500 sm:text-sm">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="font-medium text-blue-900">View on Instagram</span>
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
