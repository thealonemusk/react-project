import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
const ContactUspage = React.lazy(() => import("pages/ContactUspage"));
const Aboutsection = React.lazy(() => import("pages/Aboutsection"));
const Speakers = React.lazy(() => import("pages/Speakers"));
const Mainframe = React.lazy(() => import("pages/Mainframe"));
const Committeespage = React.lazy(() => import("pages/Committeespage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/committeespage" element={<Committeespage />} />
          <Route path="/mainframe" element={<Mainframe />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/aboutsection" element={<Aboutsection />} />
          <Route path="/contactuspage" element={<ContactUspage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
