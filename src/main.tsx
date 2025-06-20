import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";

import "./index.css";
import { AboutRoute } from "./routes/about";
import { TaskDetailsRoute } from "./routes/task-details";
import { HomeRoute } from "./routes/home";

createRoot(document.getElementById("root")!).render(<App />);

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-fuchsia-300 p-4 text-sm">
        <ul className="flex gap-4 text-black font-bold  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/tasks/:taskId" element={<TaskDetailsRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
