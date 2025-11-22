import Layout from "@/components/Layout";
import UniverseTags from "@/components/UniverseTags";
import QuestionCard from "@/components/QuestionCard";
import RelatedPosts from "@/components/RelatedPosts";

export default function QuestionPage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* KIRI */}
        <aside className="hidden lg:block">
          <UniverseTags />
        </aside>

        {/* TENGAH */}
        <main className="space-y-6">
          <QuestionCard />
        </main>

        {/* KANAN */}
        <aside>
          <RelatedPosts />
        </aside>

      </div>
    </Layout>
  );
}
