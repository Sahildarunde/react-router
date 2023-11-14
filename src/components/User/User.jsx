import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-purple-600 text-center px-5 py-6 text-white text-3xl mt-3 mb-3 font-semibold'>User: {userid}</div>
  )
}

export default User