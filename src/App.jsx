import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Common/Footer";
import Menu from "./components/Common/Menu";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";

function App() {
  return (
    <>
      <section className="mainpage">
        <Menu></Menu>
       <Inicio></Inicio>
        {/* <Error404></Error404> */}
      </section>
      {/* <Administrador></Administrador> */}
      <Footer></Footer>
    </>
  );
}

export default App;
