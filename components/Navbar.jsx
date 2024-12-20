import Link from "next/link"
import "./Navbar.css"
/** Esta es una de las maneras que alguna gente utiliza para hacer NavBars */
function Navbar(){
    return (
        <nav className="navbar py-5">
            <h1 className="text-3xl font-bold">
            <Link href="/">
                Navabar sale en todas las paginas
            </Link>
            </h1>
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
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;