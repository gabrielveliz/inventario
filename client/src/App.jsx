import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './views/login';
import Consola from './views/home';


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/administration" element={<Consola />} />
      <Route render={() => <h1>Not found!</h1>} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
