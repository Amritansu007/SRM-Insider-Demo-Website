import { posts } from "@/data/mockData";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { id } = await params;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div className="p-10">Post not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      
      <span className="text-sm text-[#C9A227]">
        {post.category}
      </span>

      <h1 className="text-3xl md:text-4xl font-bold">
        {post.title}
      </h1>

      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {post.content}
      </p>

    </div>
  );
}