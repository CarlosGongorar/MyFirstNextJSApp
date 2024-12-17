//"use client" si pongo esto teno que quitar el metadata
// Metadata solo se usa para componentes del servidor
// Si quieres ver en que casos se puede usar los use client y todo visitar https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components
import Users from "../components/Users"
export const metadata = {
    title: "Este titulo solo sale si no es use client",
}
export default function HomePage(){
    // Server component
    return <section>
    <h1>
        Hello World
    </h1>
        {/** User Component */}
        <Users/>
    </section>
}