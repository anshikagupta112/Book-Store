import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Book from "./components/Book";
import Contact from "./components/Contact";

function App() {
  return (
    <Routes path="/">
      <Route path="/home" element={<Home />}></Route>
      <Route path="/book" element={<Book />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      {/* <div>we are here to learn something new </div> */}
    </Routes>
  );
}
export default App;
