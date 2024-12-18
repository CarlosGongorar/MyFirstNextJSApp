// Carga datos del jsonplaceholder con el params que tenga la carpeta [id]
async function loadPost(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json()
  return data
}

async function Page({params}) {

  const { id } = await params
  const post = await loadPost(id)
  return (
    <div>
      <h1>{post.id}. {post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Page