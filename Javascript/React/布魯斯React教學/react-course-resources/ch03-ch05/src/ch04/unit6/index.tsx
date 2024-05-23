import React, { useState, useEffect } from 'react'

type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const App: React.FC = () => {

  const [postId, setPostId] = useState(1)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)

  async function fetchData(id: number) {
    setLoading(true)
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      const data = await res.json() as Comment[] 
      console.log('data', data)
    } catch (error) {
      setError(error as Error)
    }
    setLoading(false)
  }

  function clickHandler(id: number) {
    setPostId(id)
  }

  useEffect(() => {
    fetchData(postId)
  }, [postId])

  return <>
    <h1>Fetch</h1>
    <button onClick={() => clickHandler(1)}>ID 1 data</button>
    <button onClick={() => clickHandler(2)}>ID 2 data</button>
    {
      error === null ? <p style={{ color: 'green' }}>資料獲取成功</p> : <p style={{ color: 'red' }}>資料獲取成功</p>
    }
    {
      loading ? <p>loading</p> : null
    }
  </>
}

export default App