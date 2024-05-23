import React, { useEffect, useState } from 'react' 

const App: React.FC = () => {

  const [counter, setCounter] = useState(0)
  const [text, setText] = useState('偶數')

  // // TODO del
  // console.log('text', text)

  // setText("xxx")

  useEffect(() => {
    // TODO del
    console.log('counter變化', counter)
    if (counter % 2 === 0) {
      setText('偶數')
    } else {
      setText('奇數')
    }
  }, [counter])


  const handleClick = () => {
    setCounter(counter + 1);
  }

  // 1. mount
  useEffect(() => {
    console.log('hello')
  }, [])


  return <>
    <h1>count: {counter}</h1>
    <button onClick={handleClick}>+1</button>
    <p>{text}</p>
  </>
}

export default App