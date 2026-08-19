import { createServerFn } from "@tanstack/react-start";

export interface InstagramPost {
  id: string;
  caption?: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string | null;
  thumbnailUrl: string | null;
  permalink: string;
  timestamp: string;
}

export const getInstagramPosts = createServerFn().handler(
  async (): Promise<InstagramPost[]> => {
    const token = process.env["INSTAGRAM_ACCESS_TOKEN"];

    if (!token) {
      throw new Error("INSTAGRAM_ACCESS_TOKEN is not configured");
    }

    const params = new URLSearchParams({
      fields:
        "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
      limit: "10",
      access_token: token,
    });

    const response = await fetch(
      `https://graph.instagram.com/me/media?${params.toString()}`,
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Instagram API error: ${error}`);
    }

    const result = await response.json();

    return (result.data ?? []).map(
      (post: {
        id: string;
        caption?: string;
        media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
        media_url?: string;
        thumbnail_url?: string;
        permalink: string;
        timestamp: string;
      }) => ({
        id: post.id,
        caption: post.caption,
        mediaType: post.media_type,
        mediaUrl: post.media_url ?? null,
        thumbnailUrl: post.thumbnail_url ?? null,
        permalink: post.permalink,
        timestamp: post.timestamp,
      }),
    );
  },
);