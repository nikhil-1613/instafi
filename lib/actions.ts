"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreatePost, DeletePost, LikeSchema,BookMarkSchema, DeleteComment, CreateComment } from "./schemas";
import { z } from "zod";
import { getUserId } from "./utils";



export async function createPost(values: z.infer<typeof CreatePost>) {
    const userId = await getUserId();

    const validatedField = CreatePost.safeParse(values);
    if (!validatedField.success) {
        return {
            errors: validatedField.error.flatten().fieldErrors,
            message: "Missing Fields ro Invalid Data",
        };
    }
    const { fileUrl, caption,location } = validatedField.data;
    try {
      
        const post = await prisma.post.create({
            data:{
                caption,
                fileUrl,
                location: typeof location === "string"
                    ? location
                    : location !== undefined && location !== null
                        ? String(location)
                        : "",
                user:{
                    connect:{
                        id:userId
                    }
                }
            }

        });
    }catch(error){
        console.log(error)
        return{
            message:"An error occurred while creating the post."
        }
    }
    revalidatePath("/dasboard");
        redirect("/dashboard");
}
export async function deletePost(formData: FormData) {
  const userId = await getUserId();

  const { id } = DeletePost.parse({
    id: formData.get("id"),
  });

  const post = await prisma.post.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!post) {
    throw new Error("Post not found");
  }

  try {
    await prisma.post.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard");
    return { message: "Deleted Post." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Post." };
  }
}

export async function likePost(value: FormDataEntryValue | null) {
  const userId = await getUserId();

  const validatedFields = LikeSchema.safeParse({ postId: value });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Like Post.",
    };
  }

  const { postId } = validatedFields.data;

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    throw new Error("Post not found");
  }

  const like = await prisma.like.findUnique({
    where: {
      postId_userId: {
        postId,
        userId,
      },
    },
  });

  if (like) {
    try {
      await prisma.like.delete({
        where: {
          postId_userId: {
            postId,
            userId,
          },
        },
      });
      revalidatePath("/dashboard");
      return { message: "Unliked Post." };
    } catch (error) {
      return { message: "Database Error: Failed to Unlike Post." };
    }
  }

  try {
    await prisma.like.create({
      data: {
        postId,
        userId,
      },
    });
    revalidatePath("/dashboard");
    return { message: "Liked Post." };
  } catch (error) {
    return { message: "Database Error: Failed to Like Post." };
  }
}

export async function bookmarkPost(value: FormDataEntryValue | null) {
  const userId = await getUserId();

  const validatedFields = BookMarkSchema.safeParse({ postId: value });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Bookmark Post.",
    };
  }

  const { postId } = validatedFields.data;

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    throw new Error("Post not found.");
  }

  const bookmark = await prisma.savedPost.findUnique({
    where: {
      postId_userId: {
        postId,
        userId,
      },
    },
  });

  if (bookmark) {
    try {
      await prisma.savedPost.delete({
        where: {
          postId_userId: {
            postId,
            userId,
          },
        },
      });
      revalidatePath("/dashboard");
      return { message: "Unbookmarked Post." };
    } catch (error) {
      return {
        message: "Database Error: Failed to Unbookmark Post.",
      };
    }
  }

  try {
    await prisma.savedPost.create({
      data: {
        postId,
        userId,
      },
    });
    revalidatePath("/dashboard");
    return { message: "Bookmarked Post." };
  } catch (error) {
    return {
      message: "Database Error: Failed to Bookmark Post.",
    };
  }
}

export async function createComment(values: z.infer<typeof CreateComment>) {
  const userId = await getUserId();

  const validatedFields = CreateComment.safeParse(values);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Comment.",
    };
  }

  const { postId, body } = validatedFields.data;

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  if (!post) {
    throw new Error("Post not found");
  }

  try {
    await prisma.comment.create({
      data: {
        body,
        postId,
        userId,
      },
    });
    revalidatePath("/dashboard");
    return { message: "Created Comment." };
  } catch (error) {
    return { message: "Database Error: Failed to Create Comment." };
  }
}

export async function deleteComment(formData: FormData) {
  const userId = await getUserId();

  const { id } = DeleteComment.parse({
    id: formData.get("id"),
  });

  const comment = await prisma.comment.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!comment) {
    throw new Error("Comment not found");
  }

  try {
    await prisma.comment.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard");
    return { message: "Deleted Comment." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Comment." };
  }
}