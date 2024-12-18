import PostPage from "../page";
import {Suspense} from "react"
// Carga datos del jsonplaceholder con el params que tenga la carpeta [id]
async function loadPost(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json()
  return data
}
// En next 15 los datos params se manejan de manera asincrona y los accesos directos no funcionaran
  // Por lo tanto se debe usar el await al params y extraer solo lo que se requiera, en este caso el ID
  // Usando {} que sirve para desestrucurar y traer las propiedades especificas del objeto (params es un Promise creo)

async function Page({params}) {
  const { id } = await params
  const post = await loadPost(id)
  return (
    <div>
      <h1>{post.id}. {post.title}</h1>
      <p>{post.body}</p>
      <hr/>
      <h3>Otros Posts</h3>
      <Suspense fallback={ /** Esto de aca hace que si se ya se cargo este componente y demora en cargar algo mas lo manda para otro lado con un fallback  */
        <div>
          <h4>Cargando...</h4>
        </div>
      }>
        <PostPage/> {/** Esto Carga otros post del componente de PostPage */}
      </Suspense>
    </div>
  )
}

export default Page