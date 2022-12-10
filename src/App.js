import './App.css';
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route,Navigate   } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

