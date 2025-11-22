const tags = [
  { name: "#music", count: "12 jt jiwa" },
  { name: "#gaming", count: "11 jt jiwa" },
  { name: "#movies", count: "9,3 jt jiwa" },
  { name: "#anime", count: "7,8 jt jiwa" },
  { name: "#food", count: "7,3 jt jiwa" },
  { name: "#memes", count: "6 jt jiwa" },
  { name: "#outdoors", count: "4,4 jt jiwa" },
  { name: "#art", count: "3,1 jt jiwa" },
];

export default function UniverseTags() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-2">
      <h2 className="font-semibold text-lg mb-2">Alam Semesta</h2>
      {tags.map((tag, idx) => (
        <div key={idx} className="flex justify-between text-sm text-gray-600">
          <span className="bg-gray-100 px-3 py-1 rounded-full">{tag.name}</span>
          <span>{tag.count}</span>
        </div>
      ))}
    </div>
  );
}
