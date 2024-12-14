/** Esta pagina tiene que estar siempre en la raiz de la carpeta App */

import Link from "next/link";

export default function NotFont(){
    return (<section>
        <h1>404</h1>
        <p>Pagina no encontrada</p>
        <Link href="/">Volver</Link>
    </section>);
}