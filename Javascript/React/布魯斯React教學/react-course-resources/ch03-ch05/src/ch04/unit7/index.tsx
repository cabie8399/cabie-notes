import React, { useState, useEffect } from 'react'

type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

function useFetchAPI() {
  const [postId, setPostId] = useState(1)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([] as Comment[])

  async function fetchData(id: number) {
    setLoading(true)
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      const resData = await res.json() as Comment[] 
      setData(resData)
    } catch (error) {
      setError(error as Error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchData(postId)
  }, [postId])

  return [data, loading, error, setPostId] as const
  // return {data, loading, error, setPostId}
}

const App: React.FC = () => {

  const [data, loading, error, setPostId] = useFetchAPI()

  function clickHandler(id: number) {
    setPostId(id)
  }

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
    <p>結果：</p>
    {
      data.length > 0 && data.map((item, index) => {
        return <p key={item.id}>{item.email}</p>
      })
    }
  </>
}

export default App