// components/Header.js
export default function Header() {
  return (
    <header className="max-w-xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
          <span className="font-bold text-lg">B</span>
        </div>
        <div>
          <p className="text-sm text-gray-700 font-semibold">boo.clone</p>
          <p className="text-xs text-gray-400">Discover questions</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-3 py-1 rounded-full border text-sm text-gray-700 bg-white shadow-sm">
          New
        </button>
      </div>
    </header>
  );
}
