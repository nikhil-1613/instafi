export const dynamic = 'force-dynamic';

import PostsGrid from "@/components/PostsGrid";
import { fetchPostsByUsername } from "@/lib/data";

async function ProfilePage(props: { params: Promise<{ username: string }> }) {
  const { username } = await props.params;
  const posts = await fetchPostsByUsername(username);

  return <PostsGrid posts={posts} />;
}

export default ProfilePage;

// export const dynamic = 'force-dynamic'; // <-- ADD THIS LINE

// import PostsGrid from "@/components/PostsGrid";
// import { fetchPostsByUsername } from "@/lib/data";

// async function ProfilePage(props: { params: { username: string } }) {
//   const { username } = props.params;
//   const posts = await fetchPostsByUsername(username);

//   return <PostsGrid posts={posts} />;
// }

// export default ProfilePage;
