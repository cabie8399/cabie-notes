
import React, { useState } from "react"
import { BtnProvider, useBtnContext } from './context/BtnContext'

type Props = {}

const D: React.FC<Props> = () => {
  const data = useBtnContext()
  // TODO del
  console.log('btnVisible D', data.btnVisible)
  return <button>D按鈕</button>
}

const C: React.FC<Props> = () => {
  const data = useBtnContext()
  // TODO del
  console.log('btnVisible C', data.btnVisible)
  return <>
    <p>C 組件</p>
    <D />
  </>
}

const B: React.FC<Props> = () => {
  return <>
    <p>B 組件</p>
    <C />
  </>
}

const App: React.FC = () => {
  return <BtnProvider>
    <h1>APP</h1>
    <B/>
  </BtnProvider>
}

export default App