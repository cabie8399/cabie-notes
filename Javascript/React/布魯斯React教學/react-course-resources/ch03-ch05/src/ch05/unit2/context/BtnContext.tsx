import React, { createContext, useState, useContext } from 'react'

const defaultValue = {
  btnVisible: false
}

const BtnContext = createContext(defaultValue)

// 設定值的時候調用他
export const BtnProvider: React.FC = ({ children }) => {
  const [btnVisible, setBtnVisible] = useState(true)
  return <>
    <BtnContext.Provider 
      value={{
        btnVisible
      }}
    >
      {children}
    </BtnContext.Provider>
  </>
}

// 取值的時候調用他
export const useBtnContext = () => {
  return useContext(BtnContext)
}
