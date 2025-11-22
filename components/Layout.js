import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // 👈 tambah

  return (
    <div className="flex bg-[#F7F9FA] min-h-screen text-gray-700">

      {/* SIDEBAR DESKTOP */}
      <aside
        className={`hidden md:flex flex-col ${
          collapsed ? "w-20" : "w-64"
        } bg-white pt-6 px-4 transition-all duration-300 h-screen overflow-y-auto scroll-hidden`}
      >
        <Sidebar collapsed={collapsed} />
      </aside>

      {/* SIDEBAR MOBILE (DRAWER) */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 md:hidden transition-opacity ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white pt-6 px-4 transition-transform md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar collapsed={false} />
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar
          onToggleSidebar={() => setCollapsed(!collapsed)}
          onToggleMobile={() => setMobileOpen(!mobileOpen)} //trigger drawer
        />

        <main className="px-6 py-6 flex-1 pt-20 overflow-y-auto">
          {children}
        </main>
      </div>

    </div>
  );
}
