"use client"
// los imports deben ir despues del "use client" curioso
import Link from "next/link"
import {useParams} from 'next/navigation'

// React Client Component (RCC)
function PostCard({post}) {
  const params = useParams()
  console.log(params)
  return (
    <div className="bg-gray-950 p-10">
      <Link href={`/posts/${post.id}`}>{/** como se trae como parametro post solo usamos el id para hacer un href al id del post especifico */}
        <h3 className="text-xl font-bold mb-4">
          {post.id}. {post.title}
        </h3>
      </Link>
      <p className="text-slate-300">{post.body}</p>
      <button className="bg-sky-400 px-3 py-2 rounded-md" onClick={() => { 
        alert("cliki")
      }}>Click</button>
    </div>
  )
}

export default PostCard