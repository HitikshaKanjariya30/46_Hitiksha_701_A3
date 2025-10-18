import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Conditional from "./components/Conditional";
import ListsNested from "./components/ListsNested";
import ContainmentParent from "./components/ContainmentParent";
import FormsUseStateRef from "./components/FormsUseStateRef";
import DigitalClock from "./components/DigitalClock";
import LiveValidation from "./components/LiveValidation";
import LiveFilter from "./components/LiveFilter";
import CrudFrontend from "./components/CrudFrontend";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conditional" element={<Conditional />} />
          <Route path="/lists-nested" element={<ListsNested />} />
          <Route path="/containment" element={<ContainmentParent />}>
            {/* Containment demo will render children */}
          </Route>
          <Route path="/form-state-ref" element={<FormsUseStateRef />} />
          <Route path="/clock" element={<DigitalClock />} />
          <Route path="/live-validation" element={<LiveValidation />} />
          <Route path="/live-filter" element={<LiveFilter />} />
          <Route path="/crud" element={<CrudFrontend />} />
        </Routes>
      </div>
    </>
  );
}
