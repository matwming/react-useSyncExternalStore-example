import React from "react";
import { Route, Routes } from "react-router-dom";
import OnlineEventExample from "../Pages/OnlineEvent.example";
import LocalStorageExample from "../Pages/LocalStorage.example";
import BehaviorSubjectExample from "../Pages/BehaviorSubject.example";
import XstateExample from "../Pages/Xstate.example";

export const mappings = [
  {
    path: "/online-example",
    element: <OnlineEventExample />,
    label: "OnLine Event Example",
  },
  {
    path: "/localstorage-example",
    element: <LocalStorageExample />,
    label: " LocalStorage Example",
  },
  {
    path: "/BehaviorSubject-example",
    element: <BehaviorSubjectExample />,
    label: "BehaviorSubject Example",
  },
  {
    path: "/xstate-example",
    element: <XstateExample />,
    label: "Xstate Example",
  },
];
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="navigation">{children}</nav>
      <main className="content">
        <Routes>
          {mappings.map((v) => {
            return <Route path={v.path} element={v.element}></Route>;
          })}
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
