"use client";

import Error from "@/components/Error";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useMount from "@/hooks/useMount";
import { updatePost } from "@/lib/actions";
import { UpdatePost } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Post } from "@prisma/client";

function EditPost({ id, post }: { id: string; post: Post }) {
  const mount = useMount();
  const pathname = usePathname();
  const isEditPage = pathname === `/dashboard/p/${id}/edit`;
  const router = useRouter();

  const form = useForm<z.infer<typeof UpdatePost>>({
    resolver: zodResolver(UpdatePost),
    defaultValues: {
      id: post.id,
      caption: post.caption || "",
      location: post.location || "", 
      fileUrl: post.fileUrl,
    },
  });

  const fileUrl = form.watch("fileUrl");

  if (!mount) return null;

  return (
    <Dialog open={isEditPage} onOpenChange={(open) => !open && router.back()}>
      <DialogContent className="max-w-md sm:max-w-lg"> {/* Reduced width for compactness */}
        <DialogHeader>
          <DialogTitle>Edit info</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="space-y-3"
            onSubmit={form.handleSubmit(async (values) => {
              const res = await updatePost(values);
              if (res) {
                return toast.error(<Error res={res} />);
              }
              toast.success("Post updated successfully!"); 
            })}
          >
            {/* 📝 Reduced height for compact preview */}
            <div className="h-56 overflow-hidden rounded-md">
              <AspectRatio ratio={1 / 1} className="relative h-full">
                <Image
                  src={fileUrl}
                  alt="Post preview"
                  fill
                  className="rounded-md object-fit"
                />
              </AspectRatio>
            </div>

            {/* Caption Field */}
            <FormField
              control={form.control}
              name="caption"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="caption">Caption</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      id="caption"
                      placeholder="Write a caption..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Location Field */}
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="location">Location</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      id="location"
                      placeholder="Add a location..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
              Done
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EditPost;
