"use client"
import { useRouter } from 'next/navigation'
/** El componente useRouterr solo se puede usar desde algun componente servidor */

function AboutPage(){
    const router = useRouter()
    return <section>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda praesentium nostrum nemo qui porro quidem! Natus, culpa cum ipsum aspernatur, excepturi officiis, et laborum ad debitis odit nam nobis sed?</p>
        <button className="bg-sky-400 px-3 py-2 rounded-md"
        onClick={()=> {
            alert("executing code after redirect")
            router.push("/")
        }}
        >
            Click
        </button>
    </section>
}
export default AboutPage;