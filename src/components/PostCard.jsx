"use client"
// los imports deben ir despues del "use client" curioso
import Link from "next/link"

// React Client Component (RCC)
function PostCard({post}) {
  return (
    <div className="bg-gray-950 p-10">
      <Link href={`/posts/${post.id}`}>{/** como se trae como parametro post solo usamos el id para hacer un href al id del post especifico */}
        <h3 className="text-xl font-bold mb-4">
          {post.id}. {post.title}
        </h3>
      </Link>
      <p className="text-slate-300">{post.body}</p>
      <button onClick={() => { 
        alert("cliki")
      }}>Click</button>
    </div>
  )
}

export default PostCard