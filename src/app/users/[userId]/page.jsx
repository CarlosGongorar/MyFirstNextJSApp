"use client"
import {useParams} from 'next/navigation'

function UserPage() {
  const params = useParams()
  
  return (
    <div>

      <button onClick={()=> {
        alert("Sirvo xd")
        console.log(params)
      }}>
        Click
      </button>
    </div>
  )
}

export default UserPage