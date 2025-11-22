// pages/index.js
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <h2 className="text-xl font-bold mb-4">Pertanyaan Hari Ini</h2>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-gray-400">Pertanyaan Hari Ini</h3>
        <h1 className="text-xl font-semibold mt-2">
          What would you choose: a relationship full of adventures or a peaceful one?
        </h1>

        <div className="flex gap-4 mt-4 text-gray-500">
          <span>❤️ 593</span>
          <span>🔔 4070</span>
        </div>
      </div>
    </Layout>
  );
}
