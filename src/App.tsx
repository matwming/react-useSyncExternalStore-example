import "./App.css";
import { Route, Routes, Link, BrowserRouter, NavLink } from "react-router-dom";
import Layout, { mappings } from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="navigation">
          {mappings.map((v) => {
            return (
              <NavLink to={v.path} className="link">
                {v.label}
              </NavLink>
            );
          })}
        </div>
      </Layout>
    </BrowserRouter>
  );
}
