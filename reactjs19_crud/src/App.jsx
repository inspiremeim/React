import { useState } from "react";
import SidebarForm from "./components/SidebarForm";

export default function App() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    userType: "",
    name: "",
    username: "",
    email: "",
    birthdate: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    address: "",
    mobileNumber: "",
    todo: "",
  });

  const openSidebar = () => {
    setOpen(true);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <button
        onClick={openSidebar}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Open Sidebar Form
      </button>

      {open && (
        <SidebarForm
          open={open}
          setOpen={setOpen}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
