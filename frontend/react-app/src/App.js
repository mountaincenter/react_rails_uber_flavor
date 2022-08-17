import './App.css';
import { BrowserRouter, Routes, Route,  } from "react-router-dom"

import { Restaurants } from "./containers/Restaurants"
import { Orders } from "./containers/Orders"
import { Foods } from "./containers/Foods"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Restaurants />}/>
        <Route path="orders" element={<Orders />}/>
        <Route path="restaurants">
          <Route path=':restaurantId/foods' element={<Foods />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
