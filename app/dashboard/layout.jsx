import { Navbar } from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import { auth } from "@/auth";
import { getUserByEmail } from "@/queries/users";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  // ✅ Fetch user data server-side
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  let preloadedUser = null;
  try {
    preloadedUser = await getUserByEmail(session.user.email);
  } catch (error) {
    console.error("Error fetching user in layout:", error);
  }

  return (
    <div className="h-full">
      <div className="h-[80px] lg:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar preloadedUser={preloadedUser} />
      </div>
      <div className="hidden lg:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="lg:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};
export default DashboardLayout;


// app/instructor/layout.js

// import { Navbar } from "./_components/navbar"; 
// import Sidebar from "./_components/sidebar";

// export const metadata = {
//   title: "Instructor Dashboard",
// };

// const DashboardLayout = ({ children }) => {
//   return (
//     <html lang="en">
//       <body>
//         <div className="h-full">
//           <div className="h-[80px] lg:pl-56 fixed inset-y-0 w-full z-50">
//             <Navbar />
//           </div>
//           <div className="hidden lg:flex h-full w-56 flex-col fixed inset-y-0 z-50">
//             <Sidebar />
//           </div>
//           <main className="lg:pl-56 pt-[80px] h-full">{children}</main>
//         </div>
//       </body>
//     </html>
//   );
// };

// export default DashboardLayout;
