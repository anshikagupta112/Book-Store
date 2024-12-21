import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import MyNav from "./MyNav.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyNav />
    <App />
  </BrowserRouter>
);
