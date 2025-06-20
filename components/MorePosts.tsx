import { fetchPostById, fetchPostsByUsername } from "@/lib/data";
import Link from "next/link";
import PostsGrid from "./PostsGrid";

type MorePostsProps = {
  postId: string;
};

async function MorePosts({ postId }: MorePostsProps) {
  const post = await fetchPostById(postId);
  
  if (!post) return null; // Optional: handle missing post gracefully
  
  const postUsername = post.user.username!;
  // if (!postUsername) return null; // Handle missing username gracefully
  const posts = await fetchPostsByUsername(postUsername, postId);

  return (
    <div className="flex flex-col space-y-3 max-w-3xl lg:max-w-4xl mx-auto pb-20">
      <p className="font-semibold text-sm text-neutral-600 dark:text-neutral-400">
        More posts from{" "}
        <Link
          href={`/dashboard/${postUsername}`}
          className="dark:text-white text-black hover:opacity-50"
        >
          {postUsername}
        </Link>
      </p>

      <PostsGrid posts={posts} />
    </div>
  );
}

export default MorePosts;

// import { fetchPostById, fetchPostsByUsername } from "@/lib/data";
// import Link from "next/link";
// import { notFound, useParams } from "next/navigation";
// import PostsGrid from "./PostsGrid";
// import { use } from "react";

// async function MorePosts() {
// const params = useParams();
//   const postId = params?.id as string;

//   const post = await fetchPostById(postId);
//   const postUsername = post?.user.username;
//   const posts = await fetchPostsByUsername(postUsername!, postId);

//   return (
//     <div className="flex flex-col space-y-3 max-w-3xl lg:max-w-4xl mx-auto pb-20">
//       <p className="font-semibold text-sm text-neutral-600 dark:text-neutral-400">
//         More posts from{" "}
//         <Link
//           href={`/dashboard/${postUsername}`}
//           className="dark:text-white text-black hover:opacity-50"
//         >
//           {postUsername}
//         </Link>{" "}
//       </p>

//       <PostsGrid posts={posts} />
//     </div>
//   );
// }

// export default MorePosts;