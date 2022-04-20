import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Authors from "./components/Authors";
import NewAuthor from "./components/NewAuthor";
import EditAuthor from "./components/EditAuthor";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/author" element={<Authors/>} />
          <Route path="/author/new" element={<NewAuthor/>} />
          <Route path="/author/error" element={<Error/>} />
          <Route path="/author/edit/:id" element={<EditAuthor/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;