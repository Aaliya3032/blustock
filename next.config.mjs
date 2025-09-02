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
         hostname: "upload.wikimedia.org"
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
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.blustockconsultants.com" }],
        destination: "https://blustockconsultants.com/:path*",
        permanent: true,
      },
    ]
   }
};

export default nextConfig;
