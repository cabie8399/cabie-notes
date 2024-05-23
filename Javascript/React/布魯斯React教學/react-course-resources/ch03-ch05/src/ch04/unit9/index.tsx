import React, { useState, useRef, useEffect } from 'react'

const App: React.FC = () => {

  // console.log(window)

  const h1Ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // const element = document.getElementById('h1')
    // TODO del
    // console.log('element', element)
    // TODO del
    console.log('h1Ref', h1Ref.current)
  }, [])

  return <>
    {/* <h1 id="h1">Ref</h1> */}
    <h1 ref={h1Ref}>Ref</h1>
  </>
}

export default App


// 1. 建立組件
// 2. return JSX
// 3. 執行useEffect的cb