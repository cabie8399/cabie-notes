import React, { useState } from 'react' 

// 1.
// function 組件
// const App: React.FC = () => {

//   const [counter, setCounter] = useState(0)

//   function counterHandler() {
//     setCounter(counter + 1)
//     // counter++
//     // TODO del
//     // console.log('counter', counter) 
//   }

//   return <>
//     <h1>Counter: {counter}</h1>
//     <button onClick={counterHandler}>+1</button>
//   </>
// }

// export default App


// 2. 
// const Parent: React.FC = () => {
//   let [count, setCount] = useState(0);
//   return (
//     <div onClick={() => setCount(prev => prev + 1)}>
//       Parent clicked {count} times
//       <Child />
//     </div>
//   );
// }

// const Child: React.FC = () => {
//   let [count, setCount] = useState(0);
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Child clicked {count} times
//     </button>
//   );
// }

// export default Parent

// 3.
const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
      function cb (prev: number) {
        return prev + 1
      }
      setCounter(cb);
      setCounter(cb);
  }

  return (
    <div className='App'>
      <h1>Counter 組件</h1>
      <div>
        counter: {counter}
      </div>
      <br/>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Counter