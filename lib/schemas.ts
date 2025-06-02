import {z} from 'zod';

export const PostSchema = z.object({
    id:z.string(),
    fileUrl:z.string().url(),
    caption:z.string().optional(),
    location:  z.string().min(1, "Location is required").max(255),
})

export const CreatePost = PostSchema.omit({
    id:true,
})

export const UpdatePost = PostSchema

export const DeletePost = PostSchema.pick({
    id:true,
})

export const LikeSchema = z.object({
  postId: z.string(),
});

export const BookMarkSchema = z.object({
    postId: z.string(),
})