import Header from "@/components/Header";
import "../globals.css";
import Sidenav from "@/components/Sidenav";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import ErrorBoundary from "@/components/ErrorBoundary";
import { getUserByEmail } from "@/queries/users";
import { auth } from "@/auth";


export default async function MainLayout({ children }) {
  const session = await auth();
  let loggedInUser = null;
  if (session) {
    loggedInUser = await getUserByEmail(session?.user?.email);
  }

  return (
    <Providers>
      <ErrorBoundary>
        <Header loggedInUser={loggedInUser || ""} />
        <main className="relative">
          <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
            <Sidenav />
          </div>
          {children}
        </main>
        <Footer />
      </ErrorBoundary>
    </Providers>
  );
}
