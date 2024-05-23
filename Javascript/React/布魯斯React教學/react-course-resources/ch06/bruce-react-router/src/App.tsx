import * as React from "react";
import { Routes, Route, Link, Outlet, useParams, useNavigate, RouteObject, useRoutes } from "react-router-dom";
import "./App.css";

// App.js
function Home() {
  const n = useNavigate()
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        {/* <Link to="/about">About</Link> */}
        <button onClick={() => { n('about/100') }}>ABOUT</button>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <Outlet />
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function Item () {
  const url = useParams()
  // TODO del
  console.log('url', url)
  return <p>Itemxxxxx</p>
}

function NoMatch() {
  return <p>NoMatch</p>
}

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
    children: [
      {
        path: '/about/:id',
        element: <Item />,
      }
    ]
  },
  { path: "*", element: <NoMatch /> }
]

function App() {
  const element = useRoutes(routerConfig)
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":item" element={<Item />} />
        </Route>
      </Routes> */}
      {element}
    </div>
  );
}

export default App;
