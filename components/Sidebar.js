import {
  GlobeAltIcon,
  HeartIcon,
  ChatBubbleLeftIcon,
  BellIcon,
  UsersIcon,
  DocumentTextIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ collapsed }) {
  const menu = [
    { icon: <GlobeAltIcon className="w-6 h-6" />, label: "Beranda" },
    { icon: <HeartIcon className="w-6 h-6" />, label: "Cocok" },
    { icon: <ChatBubbleLeftIcon className="w-6 h-6" />, label: "Pesan" },
    { icon: <BellIcon className="w-6 h-6" />, label: "Profil" },
    { icon: <UsersIcon className="w-6 h-6" />, label: "Basis Data Kepribadian" },
    { icon: <DocumentTextIcon className="w-6 h-6" />, label: "Tes Kepribadian" },
    { icon: <ListBulletIcon className="w-6 h-6" />, label: "Sumber" },
  ];

  return (
    <nav className="h-full flex flex-col pb-6">

      {/* LOGO */}
      <h1 className="text-2xl font-bold text-gray-600">
        {collapsed ? "B" : "BOO"}
      </h1>

      {/* MENU (SCROLL AREA) */}
      <div className="flex-1 overflow-y-auto mt-6 pr-1 scroll-hidden">
        <div className="flex flex-col space-y-3 text-sm">
          {menu.map((item, i) => (
            <a
              key={i}
              className="flex items-center gap-3 px-2 py-2 cursor-pointer hover:text-emerald-600 transition-colors font-medium"
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </a>
          ))}
        </div>
      </div>

      {/* BAWAH — FIXED, TIDAK IKUT SCROLL */}
      <div className={`pt-4 mt-2 ${collapsed ? "space-y-4" : "space-y-3"}`}>

        {/* Playstore + Appstore */}
        <div
          className={`flex items-center justify-center gap-3 ${
            collapsed ? "flex-col" : ""
          }`}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            className={`${collapsed ? "w-8" : "w-24"} cursor-pointer`}
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            className={`${collapsed ? "w-8" : "w-24"} cursor-pointer`}
          />
        </div>

        {/* Bahasa */}
        {!collapsed && (
          <div className="flex justify-center">
            <button className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
              Bahasa Indonesia
            </button>
          </div>
        )}

        {/* Teks */}
        {!collapsed && (
          <p className="text-center text-xs text-gray-500">
            Kami berdiri untuk cinta. <span className="text-emerald-500">💚</span>
          </p>
        )}

        {/* Link Footer */}
        {!collapsed && (
          <div className="flex justify-center flex-wrap gap-3 text-[11px] text-gray-400">
            <a className="hover:text-emerald-600">Ketentuan</a>
            <a className="hover:text-emerald-600">Kebijakan</a>
            <a className="hover:text-emerald-600">FAQ</a>
            <a className="hover:text-emerald-600">Tips</a>
          </div>
        )}
      </div>

    </nav>
  );
}
