import React, { useState, useEffect } from 'react' 

let interval: NodeJS.Timeout | null = null
let num = 0

const App: React.FC = () => {

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    interval = setInterval(() => {
      num++
      console.log(num)
    }, 1000)

    return () => {
      // TODO del
      console.log('pre re-render')
      if (interval !== null) {
        clearInterval(interval)
        num = 0
      }
    }
  }, [counter])

  function clickHandler() {
    setCounter(counter + 1)
  }

  return <>
    <h1>計時器: {counter}</h1>
    <button onClick={clickHandler}>+1</button>
  </>
}

export default App