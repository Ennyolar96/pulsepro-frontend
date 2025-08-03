import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { RootNavigation } from "../components/ui/header";
import Footer from "../components/ui/footer";

export default function RootLayout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="overflow-x-hidden space-y-10">
      <div>
        <RootNavigation />
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
