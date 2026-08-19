import type { InstagramPost } from "../components/InstagramFeed";
import img1 from "../assets/insta-1.jpg";
import img2 from "../assets/insta-2.jpg";
import img3 from "../assets/insta-3.jpg";
import img4 from "../assets/insta-4.jpg";
import img5 from "../assets/insta-5.jpg";
import img6 from "../assets/insta-6.jpg";
import { school } from "../config/school";

/** Demo data only. Replace with Instagram API results later. */
export const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    imageUrl: img1,
    caption: "Science lab session: students exploring hands-on experiments.",
    date: "2026-07-28",
    permalink: school.instagramUrl,
  },
  {
    id: "2",
    imageUrl: img2,
    caption: "Annual Sports Day — track events and plenty of team spirit.",
    date: "2026-07-19",
    permalink: school.instagramUrl,
  },
  {
    id: "3",
    imageUrl: img3,
    caption: "Cultural Day performances celebrating our diverse traditions.",
    date: "2026-07-05",
    permalink: school.instagramUrl,
  },
  {
    id: "4",
    imageUrl: img4,
    caption: "Reading week in the school library.",
    date: "2026-06-22",
    permalink: school.instagramUrl,
  },
  {
    id: "5",
    imageUrl: img5,
    caption: "Junior art class bringing imagination to paper.",
    date: "2026-06-11",
    permalink: school.instagramUrl,
  },
  {
    id: "6",
    imageUrl: img6,
    caption: "Digital literacy classes in our computer lab.",
    date: "2026-05-30",
    permalink: school.instagramUrl,
  },
];
