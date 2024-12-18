"use client"
// los imports deben ir despues del "use client" curioso
import Link from "next/link"

// React Client Component (RCC)
function PostCard({post}) {
  return (
    <div>
      <Link href={`/posts/${post.id}`}>{/** como se trae como parametro post solo usamos el id para hacer un href al id del post especifico */}
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