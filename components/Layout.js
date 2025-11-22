import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex bg-[#F7F9FA] min-h-screen text-gray-700">

      {/* SIDEBAR */}
      <aside
        className={`hidden md:flex flex-col ${
          collapsed ? "w-20" : "w-64"
        } bg-white pt-6 px-4 transition-all duration-300 h-screen overflow-y-auto scroll-hidden`}
      >
        <Sidebar collapsed={collapsed} />
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar onToggleSidebar={() => setCollapsed(!collapsed)} />

        <main className="px-6 py-6 flex-1 pt-20 overflow-y-auto">
          {children}
        </main>
      </div>

    </div>
  );
}
