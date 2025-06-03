import PostView from "@/components/PostView";
import { fetchPostById } from "@/lib/data";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

async function PostModal(props: Props) {
  const { id } = await props.params; // ✅ await `params`

  const post = await fetchPostById(id);

  if (!post) {
    notFound(); // Throws a 404
  }

  return <PostView id={id} post={post} />;
}

export default PostModal;
