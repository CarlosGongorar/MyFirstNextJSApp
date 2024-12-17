"use client"
// React Client Component (RCC)
function PostCard({post}) {
  return (
    <div>
      <h3>
        {post.id}. {post.title}
      </h3>
      <p>{post.body}</p>
      <button onClick={() => { 
        alert("cliki")
      }}>Click</button>
    </div>
  )
}

export default PostCard