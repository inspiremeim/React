// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <StrictMode> */}
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          style: { background: "#16a34a", color: "white" },
          iconTheme: { primary: "white", secondary: "#16a34a" },
        },
        error: {
          style: { background: "#dc2626", color: "white" },
        },
      }}
    />

    <App />
    {/* </StrictMode> */}
  </>
);
