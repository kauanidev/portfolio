import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Projects } from "./pages/Projects";
import ScrollToTop from "./utils/ScrollToTop";

export function Router() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Project />} />
      </Routes>
    </>
  );
}
