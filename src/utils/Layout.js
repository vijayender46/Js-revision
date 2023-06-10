import { Outlet  } from "react-router-dom";
import './../App.css';
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="layout-container">
      <header>
        <h1>How to Quick Revise Javascript + ES6</h1>
      </header>
     <Navbar />

      <Outlet />
    </div>
  )
};
