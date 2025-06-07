// app/dashboard/p/[id]/edit/page.tsx

export const dynamic = "force-dynamic";

import EditPost from "@/components/EditPost";
import { fetchPostById } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

async function EditPostPage({ params }: Props) {
  const { id } = await params; // ✅ Await params per Next.js requirement

  const post = await fetchPostById(id);

  if (!post) {
    notFound(); // Show 404 if not found
  }

  return  <EditPost id={id} post={post} />;
}

export default EditPostPage;
