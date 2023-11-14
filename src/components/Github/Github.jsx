import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
  const data = useLoaderData()

  return (
    <div className='flex m-4 justify-center items-center flex-col p-6 gap-4 bg-cyan-600 rounded-3xl'>
        <h1 className='text-2xl font-bold'>Github Followers : {data.followers}</h1>
        <img className='rounded-3xl' src={data.avatar_url} alt="Git PP" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Sahildarunde')
    return response.json();
  }