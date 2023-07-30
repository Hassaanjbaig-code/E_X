import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import LogIn from "./Components/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
