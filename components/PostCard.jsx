"use client"

import Link from "next/link"

// React Client Component (RCC)
function PostCard({post}) {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>
      <h3>
        {post.id}. {post.title}
      </h3>
      </Link>
      <p>{post.body}</p>
      <button onClick={() => { 
        alert("cliki")
      }}>Click</button>
    </div>
  )
}

export default PostCard