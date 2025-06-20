
// app/dashboard/[username]/layout.tsx
import { auth } from "@/auth";
import FollowButton from "@/components/FollowButton";
import ProfileAvatar from "@/components/ProfileAvatar";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileTabs from "@/components/ProfileTabs";
import UserAvatar from "@/components/UserAvatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { fetchProfile } from "@/lib/data";
import { MoreHorizontal, Settings } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ username: string }>; // Explicitly type params as a Promise
  children: React.ReactNode;
};

// Metadata generation for dynamic route
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedParams = await params; // Await params to resolve the Promise
  const { username } = resolvedParams; // Destructure after awaiting
  const profile = await fetchProfile(username);

  if (!profile) {
    return {
      title: "Profile Not Found",
    };
  }

  return {
    title: `${profile.name} (@${profile.username})`,
  };
}

export default async function ProfileLayout({ params, children }: Props) {
  const resolvedParams = await params; // Await params to resolve the Promise
  const { username } = resolvedParams; // Destructure after awaiting
  const profile = await fetchProfile(username);
  const session = await auth();

  if (!profile) {
    notFound();
  }

  const isCurrentUser = session?.user.id === profile.id;
  const isFollowing = profile.followedBy.some(
    (user) => user.followerId === session?.user.id
  );

  return (
    <>
      <ProfileHeader username={profile.username} />
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-x-5 md:gap-x-10 px-4">
          <ProfileAvatar user={profile}>
            <UserAvatar
              user={profile}
              className="w-20 h-20 md:w-36 md:h-36 cursor-pointer"
            />
          </ProfileAvatar>

          <div className="md:px-10 space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-3">
              <p className="font-semibold text-xl">{profile.username}</p>
              {isCurrentUser ? (
                <>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="md:order-last"
                  >
                    <Settings />
                  </Button>
                  <Link
                    href={`/dashboard/edit-profile`}
                    className={buttonVariants({
                      className: "!font-bold",
                      variant: "secondary",
                      size: "sm",
                    })}
                  >
                    Edit profile
                  </Link>
                  <Button
                    variant="secondary"
                    className="font-bold"
                    size="sm"
                  >
                    View archive
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="md:order-last"
                  >
                    <MoreHorizontal />
                  </Button>
                  <FollowButton
                    isFollowing={isFollowing}
                    profileId={profile.id}
                  />
                  <Button
                    variant="secondary"
                    className="font-bold"
                    size="sm"
                  >
                    Message
                  </Button>
                </>
              )}
            </div>

            <div className="flex items-center gap-x-7">
              <p className="font-medium">
                <strong>{profile.posts.length} posts</strong>
              </p>
              <Link
                href={`/dashboard/${profile.username}/followers`}
                className="font-medium"
              >
                <strong>{profile.followedBy.length}</strong> followers
              </Link>
              <Link
                href={`/dashboard/${profile.username}/following`}
                className="font-medium"
              >
                <strong>{profile.following.length}</strong> following
              </Link>
            </div>

            <div className="text-sm">
              <div className="font-bold">{profile.name}</div>
              <p>{profile.bio}</p>
            </div>
          </div>
        </div>

        <ProfileTabs profile={profile} isCurrentUser={isCurrentUser} />

        {children}
      </div>
    </>
  );
}
// // export const dynamic = 'force-dynamic';

// import { auth } from "@/auth";
// import FollowButton from "@/components/FollowButton";
// import ProfileAvatar from "@/components/ProfileAvatar";
// import ProfileHeader from "@/components/ProfileHeader";
// import ProfileTabs from "@/components/ProfileTabs";
// import UserAvatar from "@/components/UserAvatar";
// import { Button, buttonVariants } from "@/components/ui/button";
// import { fetchProfile } from "@/lib/data";
// import { MoreHorizontal, Settings } from "lucide-react";
// import type { Metadata, ResolvingMetadata } from "next";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// type Props = {
//   params: {
//     username: string;
//   };
//   children: React.ReactNode;
// };

// // ✅ Fixed generateMetadata: use params from argument, not useParams()
// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const username = params.username;
//   const profile = await fetchProfile(username);

//   return {
//     title: `${profile?.name} (@${profile?.username})`,
//   };
// }

// async function ProfileLayout({ children, params }: Props) {
//   const { username } =  params;
//   const profile = await fetchProfile(username);
//   const session = await auth();
//   if (!profile) {
//     notFound();
//   }

//   const isCurrentUser = session?.user.id === profile?.id;

//   const isFollowing = profile?.followedBy.some(
//     (user) => user.followerId === session?.user.id
//   );

//   return (
//     <>
//       <ProfileHeader username={profile.username} />
//       <div className="max-w-4xl mx-auto">
//         <div className="flex gap-x-5 md:gap-x-10 px-4">
//           <ProfileAvatar user={profile}>
//             <UserAvatar
//               user={profile}
//               className="w-20 h-20 md:w-36 md:h-36 cursor-pointer"
//             />
//           </ProfileAvatar>

//           <div className="md:px-10 space-y-4">
//             <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-3">
//               <p className="font-semibold text-xl">{profile.username}</p>
//               {isCurrentUser ? (
//                 <>
//                   <Button
//                     size="icon"
//                     variant="ghost"
//                     className="md:order-last"
//                   >
//                     <Settings />
//                   </Button>
//                   <Link
//                     href={`/dashboard/edit-profile`}
//                     className={buttonVariants({
//                       className: "!font-bold",
//                       variant: "secondary",
//                       size: "sm",
//                     })}
//                   >
//                     Edit profile
//                   </Link>
//                   <Button
//                     variant="secondary"
//                     className="font-bold"
//                     size="sm"
//                   >
//                     View archive
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <Button
//                     size="icon"
//                     variant="ghost"
//                     className="md:order-last"
//                   >
//                     <MoreHorizontal />
//                   </Button>
//                   <FollowButton
//                     isFollowing={isFollowing}
//                     profileId={profile.id}
//                   />
//                   <Button
//                     variant="secondary"
//                     className="font-bold"
//                     size="sm"
//                   >
//                     Message
//                   </Button>
//                 </>
//               )}
//             </div>

//             <div className="flex items-center gap-x-7">
//               <p className="font-medium">
//                 <strong>{profile.posts.length} posts</strong>
//               </p>

//               <Link
//                 href={`/dashboard/${profile.username}/followers`}
//                 className="font-medium"
//               >
//                 <strong>{profile.followedBy.length}</strong> followers
//               </Link>

//               <Link
//                 href={`/dashboard/${profile.username}/following`}
//                 className="font-medium"
//               >
//                 <strong>{profile.following.length}</strong> following
//               </Link>
//             </div>

//             <div className="text-sm">
//               <div className="font-bold">{profile.name}</div>
//               <p>{profile.bio}</p>
//             </div>
//           </div>
//         </div>

//         <ProfileTabs profile={profile} isCurrentUser={isCurrentUser} />

//         {children}
//       </div>
//     </>
//   );
// }

// export default ProfileLayout;
