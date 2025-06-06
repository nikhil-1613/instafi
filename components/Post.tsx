import { auth } from "@/auth";
import UserAvatar from "@/components/UserAvatar";
import { PostWithExtras } from "@/lib/definations";
import Image from "next/image";
import Link from "next/link";
import Comments from './Comments'
import Timestamp from "./TimeStamp";
import { Card } from "./ui/card";
import PostOptions from "./PostOptions";
import PostActions from "./PostActions";


async function Post({ post }: { post: PostWithExtras }) {
  const session = await auth();
  const userId = session?.user?.id;
  const username = post.user.username;

  if (!session?.user) return null;
  return (
    <div className="px-4 sm:px-0"> {/* Add padding on small screens */}
      <div className="flex flex-col space-y-2.5">
        <div className="flex items-center justify-between px-3 sm:px-0">
          <div className="flex space-x-3 items-center">
            <UserAvatar user={post.user} />
            <div className="text-sm">
              <p className="space-x-1">
                <span className="font-semibold">{username}</span>
                <span className="font-medium text-neutral-500 dark:text-neutral-400 text-xs"></span>
                <Timestamp createdAt={post.createdAt} />
              </p>
              <p className="text-xs text-black dark:text-white font-medium">
                {post.location}
              </p>
            </div>
          </div>

          <PostOptions post={post} userId={userId} />
        </div>

        <Card className="relative h-[450px] w-full overflow-hidden rounded-none sm:rounded-6xl">
          <Image
            src={post.fileUrl}
            alt="Post Image"
            fill
            className="object-cover  sm:rounded-6xl"
          />
        </Card>
        <PostActions post={post} />
        {post.caption && (
          <div className="text-sm leading-none flex items-center space-x-2 font-medium px-3 sm:px-0">
            <Link href={`/dashboard/${username}`} className="font-bold">
              {username}
            </Link>
            <p>{post.caption}</p>
          </div>
        )}
      </div>
      <Comments
        postId={post.id}
        comments={post.comments}
        user={session.user}
      ></Comments>
    </div>
  );

}

export default Post;