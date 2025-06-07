export const dynamic = 'force-dynamic'; // <-- ADD THIS LINE

import PostsGrid from "@/components/PostsGrid";
import { fetchPostsByUsername } from "@/lib/data";

async function ProfilePage(props: { params: { username: string } }) {
  const { username } = props.params;
  const posts = await fetchPostsByUsername(username);

  return <PostsGrid posts={posts} />;
}

export default ProfilePage;

// import PostsGrid from "@/components/PostsGrid";
// import { fetchPostsByUsername } from "@/lib/data";

// async function ProfilePage({
//   params: { username },
// }: {
//   params: { username: string };
// }) {
//   const posts = await fetchPostsByUsername(username);

//   return <PostsGrid posts={posts} />;
// }

// export default ProfilePage;