import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";
import Motivation from "./components/Motivation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoWrapper />} />
        <Route path="/motivation" element={<Motivation />} />
      </Routes>
    </Router>
  );
}

export default App;
