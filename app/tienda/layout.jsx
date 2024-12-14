import Link from "next/link";
/** Subseccion de para meter componentes diferentes dependiendo de la pagina
 * por ejemplo este componente solo existe en la categoria tienda y sus subcarpetas
 */

/** Los datos que se cambian en las subpaginas de metadata tambien se cambian en sus hijos*/
export const metadata = {
    title: 'Tienda - Next.js',
    description: 'Tienda virtual con productos de la mejor calidad',
    keywords: ['tienda', 'ecommerce', 'next.js']
}
function TiendaLayout({children}){ /** Children son los elementos a mostrar de la pagina */
    return <>
        <nav>
            <h3>Seccion Tienda</h3>
            <ul>
                <li>
                    <Link href="/tienda/categorias">Categorias</Link>
                </li>
                <li>
                    <Link href="/tienda/categorias/computadoras">Computadoras</Link>
                </li>
            </ul>
        </nav>
        {children}
    </>
}

export default TiendaLayout;