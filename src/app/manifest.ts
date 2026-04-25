import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Film Budget Planner",
    short_name: "FBP",
    description:
      "Professional budget planning for filmmakers. AI-powered rate estimates, team collaboration, and beautiful PDF exports.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    categories: ["business", "productivity", "finance"],
    lang: "en-US",
    orientation: "portrait",
  };
}
