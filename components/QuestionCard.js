import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function QuestionCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">

      {/* BACK + LABEL DALAM 1 BARIS */}
      <div className="flex items-center justify-between">

        {/* Back icon */}
        <button className="flex items-center gap-1 text-gray-600 hover:text-black transition">
          <ChevronLeftIcon className="w-5 h-5" />
          <span className="text-sm"></span>
        </button>

        {/* Label */}
        <span
          className="
            bg-[#3EE6E1]
            text-black
            text-[11px]
            font-bold
            px-3
            py-1.5
            rounded-full
            shadow-sm
            hover:brightness-95
            active:scale-95
            transition
          "
        >
          QUESTIONS OF THE DAY
        </span>

      </div>

      {/* Title */}
      <h1 className="text-xl font-semibold leading-snug">
        What would you choose: a relationship full of adventures or a peaceful one?
      </h1>

      {/* Date */}
      <p className="text-xs text-gray-400">7/11/2025</p>

      {/* Likes & comments */}
      <div className="flex gap-6 text-sm text-gray-600">
        <span>❤️ 593</span>
        <span>💬 4070 Komentar</span>
      </div>

    </div>
  );
}
