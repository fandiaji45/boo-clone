const posts = [
  {
    title: "Kalau bisa punya superpower untuk satu hari, kamu pilih apa dan mau ngapain?",
    date: "20/11/2025",
    likes: 5,
    comments: 26,
  },
  {
    title: "Sifat bawaan 'zodiak' apa yang sangat kamu banget?",
    date: "19/11/2025",
    likes: 18,
    comments: 73,
  },
];

export default function RelatedPosts() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
      <h2 className="font-semibold text-lg mb-2">Pos Terkait</h2>
      {posts.map((post, i) => (
        <div key={i} className="text-sm text-gray-700">
          <p className="font-medium">{post.title}</p>
          <p className="text-xs text-gray-400">{post.date}</p>
          <div className="flex gap-3 text-xs text-gray-500 mt-1">
            <span>❤️ {post.likes}</span>
            <span>💬 {post.comments}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
