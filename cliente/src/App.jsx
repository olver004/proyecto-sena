import Plantillas from './pages/Plantillas'
import Inicio from './pages/Inicio'
import Pedidos from './pages/Pedidos'
import Productos from './pages/Productos'
import Tiendas from './pages/Tiendas'
import Usuarios from './pages/Usuarios'
import Ambiente from './pages/Ambiente'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FormAprendices from './pages/FormAprendices'
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div className="main"> 
      <Navbar />

        <FormAprendices />

      <Footer/>
    </div>
    );
}
export default App