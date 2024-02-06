import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Common/Footer'
import Menu from './components/Common/Menu'
import Inicio from './components/pages/Inicio'
import { Container } from 'react-bootstrap';

function App() {
 
  return (
    <>
    <section className='mainpage'>
      <Menu></Menu>
      <Inicio></Inicio>
      </section>
      <Footer></Footer>
    </>
  )
}

export default App
