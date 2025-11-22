import Layout from "@/components/Layout";
import UniverseTags from "@/components/UniverseTags";
import QuestionCard from "@/components/QuestionCard";
import RelatedPosts from "@/components/RelatedPosts";
import CommentList from "@/components/CommentList";

export default function QuestionDetailPage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-10 pt-6">

        {/* KIRI */}
        <aside className="hidden lg:block">
          <UniverseTags />
        </aside>

        {/* TENGAH – PALING LEBAR */}
        <main className="space-y-6">
          <QuestionCard />
          <CommentList />
        </main>

        {/* KANAN */}
        <aside>
          <RelatedPosts />
        </aside>

      </div>
    </Layout>
  );
}
