import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import CreateBook from "./pages/CreateBook";
import CreateBookImg from "./pages/CreateBookImg";
import Book from "./pages/Book";
import ViewBook from "./pages/ViewBook";

import Login from "./pages/Login";
import BookEdit from "./pages/BookEdit";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/add/book" element={<CreateBookImg />}></Route>
          <Route path="/edit/book/:id" element={<BookEdit></BookEdit>}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/view/book/:id" element={<ViewBook></ViewBook>}></Route>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
