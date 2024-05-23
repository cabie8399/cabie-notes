import React from 'react'
import './App.css'
import Header from './components/Header'


const Body: React.FC  = () => {
  return <>
    {/* props -> 屬性 */}
    <h1 className="color-blue">Hello</h1>
    <p>bruce....</p>
    <img src="/logo512.png" alt="" srcSet="" />
  </>
}

const App: React.FC = () => {
  // return React.createElement('h1', {}, 'Hello')
  // return <div>
  //   {/* props -> 屬性 */}
  //   <h1 className="color-blue">Hello</h1>
  //   <p>bruce....</p>
  //   <img src="/logo512.png" alt="" srcSet="" />
  // </div>

  // fragment
  return <>
    <Header />
    <Body />
  </>
}

export default App