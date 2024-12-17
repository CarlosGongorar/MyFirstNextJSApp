/** el "use client" se usa cuando un componente debe ser ejecutado desde el cliente
 * y no puede ser desde el lado del servidor, naturalmente todos los comonentes se renderizan
 * del lado del servidor
 */

"use client"
import { useEffect } from "react"

function Users() {

    useEffect(()=> {
        alert("ola")
    })
    return (
    <div>Users</div>
    )
}

export default Users