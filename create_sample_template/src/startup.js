import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Blank from "./pages/blank";

function main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blank" element={<Blank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default main;
