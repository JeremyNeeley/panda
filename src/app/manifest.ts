import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Panda Digital Systems",
    short_name: "Panda Digital",
    description: "Software, AI, product, cybersecurity, and cloud engineering for ambitious teams.",
    start_url: "/",
    display: "standalone",
    background_color: "#07090d",
    theme_color: "#07090d",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" }
    ]
  };
}
