// app/page.tsx or pages/index.tsx (simplified example)
'use client' // Important for App Router client components

import { useEffect, useState } from 'react'

interface User {
  id: Number;
  name: string;
  Posts: null;
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
    
     
        const response = await fetch('/api/users')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} and its fucked`)
        }
        const data = await response.json()
        setUsers(data)
      } catch (e: any) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

  if (loading) return <p>Loading users...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>Users</h1>
      <h1>{users ? <ul>
        {users.map((user) => (
          <li key={user.name}>{user.name || 'No Name'} ({user.name})</li>
        ))}
      </ul> : "Loading..."}</h1>

    </div>
  )
}