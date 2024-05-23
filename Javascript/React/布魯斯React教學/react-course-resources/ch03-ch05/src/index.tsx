import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './unit1/App';
// import App2 from './unit1/App2'

import App from './ch05/unit4/'

// unit3
// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);