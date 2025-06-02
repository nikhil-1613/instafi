import { CommentWithExtras } from '@/lib/definations'
import { User } from 'next-auth'
import React from 'react'

function Comments({ postId, Comments, user }: {
  postId: String,
  Comments: CommentWithExtras[],
  user?: User | null,
}) {
  return (
    <div>Comments</div>
  )
}

export default Comments