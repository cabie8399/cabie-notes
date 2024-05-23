
import React, { useEffect, useState, useMemo, useCallback } from "react"

type Props = {}

const App: React.FC = () => {

  // TODO del
  console.log('render')

  const [value, setValue] = useState(false)

  const aa = 1000

  const memoObj = useMemo(() => {
    return () => {}
  }, [])

  const memoFunc1 = useCallback(function() {
    // TODO del
    console.log('here')
  }, [])

  // 淺比較
  useEffect(() => {
    console.log('useEffect cb')
    memoFunc1()
  }, [memoFunc1])

  return <>
    <h1>APP</h1>
    <button onClick={() => {setValue(!value)}}>
      重新render
    </button>
  </>
}

export default App

// const aa = 1000
// const bb = 1000

// // TODO del
// console.log(aa === bb)

// const obj1 = {}
// const obj2 = {}

// // TODO del
// console.log(obj1 === obj2)


// const func1 = () => {}
// const func2 = () => {}

// // TODO del
// console.log(func1 === func2)

