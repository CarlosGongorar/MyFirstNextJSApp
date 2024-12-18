import PostCard from "../../components/PostCard"
 // UseState: Guardar Datos
 // UseEffect: Cargar Datos
 // Render: Mostrar Elementos

/** Para hacer una peticion se usa FETCH
 * como FETCH es un metodo asincrono tiene que ir con await (await fetch)
 * y la funcion que lo contiene tambien tendra que ser asincorna(async function)
 * despues de conseguir la respuesta de la peticion fecth se tiene que convertir los datos a un json usando .json()
 * la conversion tambien es asincorna entonces se usa await que pausa el codigo (await .json())
 */

/** Una Promise es un objeto que tiene dos estados: resolve y rejected
 * estas promises se usan usando callbacks (funcion que se pasa como argumento a otra funcion para que sea ejecutada despues)
 */

async function loadPost (){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    // Esta funcion sirve para cuando los datos realmente demoran en cargar
    //await new Promise((resolve) => setTimeout(resolve, 3000))
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