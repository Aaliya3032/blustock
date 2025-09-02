import { getAllInstructors } from "@/queries/users";

// app/sitemap.xml/route.js
export async function GET() {
  const baseUrl = 'https://blustockconsultants.com'; 

  const staticRoutes = [
    '/',            
    '/about/overview',       
    '/about/charts',       
    '/about/gallery',       
    '/about/faq',       
    '/contact',   
    '/courses',   
    '/login',
    '/register/student',
    '/register/instructor',
    '/account',
    '/dashboard',
    '/forgot-password',
    '/reset-password',  
  ];

  const instructors = await getAllInstructors();
  const instructorRoutes = instructors.map(
    (inst) => `/inst-profile/${inst.id}`
  );

   const allRoutes = [...staticRoutes, ...instructorRoutes];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}${route}</loc>
      </url>
    `
      )
      .join('')}
  </urlset>`;

  return new Response(body.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
