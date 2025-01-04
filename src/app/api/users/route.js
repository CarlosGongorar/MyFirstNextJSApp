import {NextResponse} from "next/server"
export async function GET(){

    /** Se puede aca extraer parametros que se le pasen a la ruta
     * hacer querys a alguna base de datos
     * y comunicarse con otros backeds/servicios/ect
     * y retorna algo
     */

    /** Se puede tambien consultar datos de otros backedns */
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json()

    return NextResponse.json(users)
}

export function POST(){
    return NextResponse.json({
        message: "Creando datos!"
    })
}

export function PUT(){
    return NextResponse.json({
        message: "Actualizando datos!"
    })
}
export function DELETE(){
    return NextResponse.json({
        message: "Eliminando datos!"
    })
}