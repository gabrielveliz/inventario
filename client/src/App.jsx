import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './views/login';
import Consola from './views/home'
import Shopping from './views/Shopping'
import Received from './views/Received'
import Returns from './views/Returns'
import Stocks from './views/Stocks'
import Sales from './views/Sales'
import Suppliers from './views/Suppliers'
import Products from './views/Products'
import Users from './views/Users'
import Configuration from './views/Configuration';


function App() {
  // datos para crear las rutas
  let rou = [
    {id:1,nameroute:"/",namemodul:Login},
    {id:2,nameroute:"/dash",namemodul:Consola},
    {id:3,nameroute:"/Shopping",namemodul:Shopping},
    {id:4,nameroute:"/Received",namemodul:Received},
    {id:5,nameroute:"/Returns",namemodul:Returns},
    {id:6,nameroute:"/Stocks",namemodul:Stocks},
    {id:7,nameroute:"/Sales",namemodul:Sales},
    {id:8,nameroute:"/Suppliers",namemodul:Suppliers},
    {id:9,nameroute:"/Products",namemodul:Products},
    {id:10,nameroute:"/Users",namemodul:Users},
    {id:11,nameroute:"/Configuration",namemodul:Configuration},
  ]

  return (
    <>
    <BrowserRouter>
    <Routes>
      {
        rou.map((data)=>(
          <Route key={data.id} path={data.nameroute} element={<data.namemodul />} />
        ))
      }
      


      <Route render={() => <h1>Not found!</h1>} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
