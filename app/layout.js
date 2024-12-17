import Navbar from "../components/Navbar"
import { Roboto } from "next/font/google"

/** Este exporta las propiedades importantes de la pagina como titulo, descripcion keywords
 * y otros, ademas de eso. Hay mas cosas que se pueden meter de datos meta, pero toca buscar en la
 * documentacion de Next
 */

export const metadata = {
  title: "Tienda con Next",
  description: "Esta es la pagina principal de mi tienda",
  keywords: "tienda, ecommerce, yuyi"
}


/** Aca primero toca ejecutar roboto que es un objeto que recibe diferentes parametros antes de poder usarlo en algun sitio */
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
})

/** Lo que contiene esto siempre se va a mostrar */
export default function RootLayout({ children }) { /** Aca se le pasa los parametros hijos a la funcion que son las paginas que va a mostrar ademas se pueden añadir mas cosas */
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
