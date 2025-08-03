import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/ui/footer";
import Navigation from "../components/ui/header";

export default function RootLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="overflow-x-hidden space-y-10">
      <div className="container mx-auto px-4">
        <Navigation isHome={false} pathname={pathname} />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
