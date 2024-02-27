import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Footer from "./components/Common/Footer";
import Menu from "./components/Common/Menu";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetalleProducto from "./components/pages/DetalleProducto";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import Login from "./components/pages/Login";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import { Children } from "react";
import RutasAdmin from "./components/routes/RutasAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route>
            <Route exact path="/" element={<Inicio></Inicio>}></Route>
            <Route exact path="/login" element={<Login></Login>}></Route>
            <Route
              exact
              path="/detalleproducto/:id"
              element={<DetalleProducto></DetalleProducto>}
            ></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
            <Route
              exact
              path="/administrador/*"
              element={<RutasProtegidas>
                <RutasAdmin></RutasAdmin></RutasProtegidas>}
            ></Route>

            
            
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
