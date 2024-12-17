import PostCard from "../../components/PostCard"
 // UseState: Guardar Datos
 // UseEffect: Cargar Datos
 // Render: Mostrar Elementos

/** Para hacer una peticion se usa FETCH
 * como FETCH es un metodo asincrono tiene que ir con await (await fetch)
 * y la funcion que lo contiene tambien tendra que ser asincorna(async function)
 * despues de conseguir la respuesta de la peticion fecth se tiene que convertir los datos a un json usando .json()
 * la conversion tambien es asincorna entonces se usa await (await .json())
 */
async function loadPost (){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
}

// React Server Component(RSC)
async function PostPage() {
    
    const posts = await loadPost();
    
    return (
    <div>{
        posts.map(post => (
            <PostCard post={post} key={post.id} />
        ))
    }</div>
    )
}

export default PostPage