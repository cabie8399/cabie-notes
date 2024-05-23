
import React, { useEffect, useState, useMemo, useCallback, memo } from "react"

type Props = {}

type PropsB = {
  num: number
  obj: { name: string }
}

const B: React.FC<PropsB> = memo(({ num, obj }) => {
  console.log('render B', num)
  return <p>B {num} {obj.name}</p>
})

const App: React.FC = () => {
  console.log('render APP')
  const [value, setValue] = useState(false)
  const [num, setNum] = useState(0)
  const [obj, setObj] = useState({ name: '' })
  
  const memoObj = useMemo(() => {
    return obj
  }, [obj.name])

  return <>
    <h1>APP</h1>
    <B num={num} obj={memoObj} />
    <button onClick={() => {setValue(!value)}}>
      重新render
    </button>
    <button onClick={() => {setNum(100)}}>
      設定顯示的數字
    </button>
    <button onClick={() => {setObj({ name: 'bruce' })}}>
      設定顯示的名字
    </button>
  </>
}

export default App