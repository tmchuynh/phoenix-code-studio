import type { NextConfig } from "next";

const imageHosts = [
  "tailwindcss.com",
  "images.unsplash.com",
  "plus.unsplash.com",
  "img.freepik.com",
  "i.ytimg.com",
  "media.licdn.com",
  "tailkits.com",
  "resend.com",
  "i.etsystatic.com",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: imageHosts.map((hostname) => ({
      protocol: "https",
      hostname,
      port: "",
      pathname: "/**",
    })),
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
