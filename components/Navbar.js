import { useState, useRef, useEffect } from "react";
import { Bars3Icon, MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";

export default function Navbar({ onToggleSidebar, onToggleMobile }) {
  const [openFilter, setOpenFilter] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenFilter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filterOptions = ["#learning", "#gaming", "#tips", "#stories", "#random"];
  const filtered = filterOptions.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm flex items-center justify-between px-6 py-4">

      {/* KIRI */}
      <div className="flex items-center gap-2">

        {/* Tombol mobile drawer */}
        <button
          className="p-1 md:hidden"     // 👈 HP menggunakan drawer
          onClick={onToggleMobile}
        >
          <Bars3Icon className="w-6 h-6 text-gray-600" />
        </button>

        {/* Tombol desktop collapse */}
        <button
          className="p-1 hidden md:block"   // 👈 Hanya muncul di desktop
          onClick={onToggleSidebar}
        >
          <Bars3Icon className="w-6 h-6 text-gray-600" />
        </button>

        <span className="text-xl font-bold text-gray-600">BOO</span>
      </div>

      {/* TENGAH */}
      <div className="flex-1 mx-6 relative" ref={dropdownRef}>
        <input
          type="text"
          placeholder="Cari"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setOpenFilter(true);
          }}
          className="w-full bg-gray-100 rounded-full pl-10 pr-10 py-2 text-sm outline-none"
        />

        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-2 cursor-pointer" />
        <FunnelIcon
          onClick={() => setOpenFilter(!openFilter)}
          className="w-5 h-5 text-gray-600 absolute right-3 top-2 cursor-pointer active:scale-90"
        />

        {openFilter && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 border z-50 animate-fadeIn">
            {(filtered.length > 0 ? filtered : filterOptions).map((item) => (
              <button
                key={item}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* KANAN */}
      <button
        className="
          bg-[#3EE6E1]
          text-black
          text-sm
          font-bold
          px-6
          py-2.5
          rounded-full
          shadow-md
          transition
          active:scale-95
          hover:brightness-95
          hover:shadow-[0_0_15px_4px_rgba(62,230,225,0.6)]
          hover:animate-[heartbeat_2.5s_ease-in-out_infinite]
        "
      >
        MASUK
      </button>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.04); }
          50% { transform: scale(0.97); }
          75% { transform: scale(1.04); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
