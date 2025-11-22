export default function CommentList() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-2">Questions Komunitas</h2>

      <p className="text-sm text-gray-600 mb-4">
        Komunitas questions, obrolan, dan diskusi.
      </p>

      {/* BUTTON BARU */}
      <button
        className="
          bg-[#16c7c2]
          text-black
          font-bold
          px-6
          py-3
          rounded-full
          shadow-sm
          hover:bg-[#13b3af]
          transition
          tracking-widest
        "
      >
        GABUNG SEKARANG
      </button>
    </div>
  );
}
