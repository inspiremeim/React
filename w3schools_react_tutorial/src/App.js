// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//---------------Start Script---------------//
// import "./App.css";
// import "./Custom.css";

import { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Forms from "./pages/Forms";
import Memo from "./pages/Memo";
import NoPage from "./pages/NoPage";
import Effect from "./Hooks/Effect";
import Context from "./Hooks/Context";
import Reference from "./Hooks/Reference";
import Reducer from "./Hooks/Reducer";
import Callback from "./Hooks/Callback";
import NewMemo from "./Hooks/useMemo";
import Custom from "./Hooks/Custom";

function Memos() {
  const [count, setCount] = useState(0);
  const [memos, setMemos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <Memo memos={memos} />
      <hr />
      <div>
        Count: {count}
        <br />
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

function Callbacks() {
  const [count, setCount] = useState(0);
  const [callbacks, SetCallbacks] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addCallback = useCallback(() => {
    SetCallbacks((t) => [...t, "New Todo"]);
  }, [callbacks]);

  return (
    <>
      <Callback callbacks={callbacks} addCallback={addCallback} />
      <hr />
      <div>
        Count: {count}
        <br />
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default function MyApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="forms" element={<Forms />} />
          <Route path="memos" element={<Memos />} />
          <Route path="*" element={<NoPage />} />
          <Route path="effect" element={<Effect />} />
          <Route path="context" element={<Context />} />
          <Route path="reference" element={<Reference />} />
          <Route path="reducer" element={<Reducer />} />
          <Route path="callbacks" element={<Callbacks />} />
          <Route path="newmemo" element={<NewMemo />} />
          <Route path="custom" element={<Custom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//---------------End Script---------------//
