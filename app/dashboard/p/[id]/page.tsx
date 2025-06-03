"use client"
import SinglePost from '@/components/SinglePost'
import { SinglePostSkeleton } from '@/components/Skeletons'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { Suspense } from 'react'
import { useParams } from 'next/navigation'
import MorePosts from '@/components/MorePosts'

function PostPage() {

  return (
    <div>
      <Suspense fallback={<SinglePostSkeleton />}>
        <SinglePost id={id} />
      </Suspense>

      <Separator className='my-12 max-w-3xl lg:max-w-4xl mx-auto'/>


      <Suspense>
        <MorePosts postId={id}/>
      </Suspense>
    </div>
  )
}

export default PostPage