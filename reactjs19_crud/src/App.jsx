import { useState } from "react";
import SidebarForm from "./components/SideBarForm";

export default function App() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    firstName: "",
    lastName: "",
    birthdate: "",
    gender: "",
    address: "",
    countryCode: "",
  });

  const openSidebar = () => {
    // setFormData({
    //   name: "Jon Snow",
    //   email: "jon.snow@winterfell.com",
    // });
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

      <SidebarForm
        open={open}
        setOpen={setOpen}
        formData={formData}
        setFormData={setFormData}
      />
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
