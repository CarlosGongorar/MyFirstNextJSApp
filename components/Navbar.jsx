import Link from "next/link"
/** Esta es una de las maneras que alguna gente utiliza para hacer NavBars */
function Navbar(){
    return (
        <nav>
            <h1>Navabar sale en todas las paginas</h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/tienda">Tienda</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;