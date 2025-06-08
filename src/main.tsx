import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import { App } from "./app";
import { AboutRoute } from "./routes/about";
import { TaskDetailsRoute } from "./routes/task-details";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutRoute />} />
      <Route path="/tasks/:taskId" element={<TaskDetailsRoute />} />
    </Routes>
  </BrowserRouter>
);
