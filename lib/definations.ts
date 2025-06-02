import type {
  Comment,
  Follows,
  Like,
  Post,
  SavedPost,
  User,
} from "@prisma/client";

export type CommentWithExtras = Comment & { user: User };
export type LikeWithExtras = Like & { user: User };

export type PostWithExtras = Post & {
  comments: CommentWithExtras[];
  likes: LikeWithExtras[];
  savedBy: SavedPost[];
  user: User;
};

export type UserWithFollows = User & {
  following: Follows[];
  followedBy: Follows[];
};

export type FollowerWithExtras = Follows & { follower: UserWithFollows };
export type FollowingWithExtras = Follows & { following: UserWithFollows };

export type UserWithExtras = User & {
  posts: Post[];
  saved: SavedPost[];
  followedBy: FollowerWithExtras[];
  following: FollowingWithExtras[];
};
// import { Post, SavedPost, User, Comment, Like } from "@prisma/client";

// export type PostWithExtras = Post & {
//   comments: commentsExtras[];
//   likes: likesExtras[];
//   savedBy: SavedPost[];
//   user: User;
// };

// export type commentsExtras = Comment & { user: User };

// export type likesExtras = Like & { user: User };
