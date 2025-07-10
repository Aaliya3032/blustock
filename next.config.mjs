/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [
      {
          protocol: "https",
          hostname: "i.pravatar.cc"
      },
      {
          protocol: "https",
          hostname: "res.cloudinary.com"
      },
      {
         protocol: "https",
          hostname: "images.pexels.com"
      }
  ]
  }  ,
   async redirects() {
    return [
        // 1. HTTP → HTTPS
      {
        source: "/(.*)",
        has: [{ type: "host", value: "blustockconsultants.com" }],
        destination: "https://www.blustockconsultants.com/:path*",
        permanent: true,
      },
      {
        source: "/(.*)",
        has: [{ type: "host", value: "http://blustockconsultants.com" }],
        destination: "https://www.blustockconsultants.com/:path*",
        permanent: true,
      },
      // 2. non‑www → www
      {
        source: "/(.*)",
        has: [{ type: "host", value: "https://blustockconsultants.com" }],
        destination: "https://www.blustockconsultants.com/:path*",
        permanent: true,
      },
    ]
   }
};

export default nextConfig;
