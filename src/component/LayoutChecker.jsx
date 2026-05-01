"use client";
import { usePathname } from "next/navigation";
import AppNavbar from "@/component/Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const noNavFooterRoutes = ["/login", "/register"];
  const hideNavbarFooter = noNavFooterRoutes.includes(pathname);

  return (
    <>
      {!hideNavbarFooter && <AppNavbar />}
      <main>{children}</main>
      {!hideNavbarFooter && <Footer />}
    </>
  );
}