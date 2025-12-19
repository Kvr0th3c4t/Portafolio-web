import { Contacto } from './components/layout/Contacto.jsx'
import { Hero } from './components/layout/Hero.jsx'
import { Nav } from './components/layout/Nav.jsx'
import { ProyectosPrincipales } from './components/layout/ProyectosPrincipales.jsx'
import { ProyectosSecundarios } from './components/layout/ProyectosSecundarios.jsx'
import { LeftSideBar } from './components/layout/LeftSideBar.jsx'
import { SobreMi } from './components/layout/SobreMi.jsx'
import './index.css'
import { RightSideBar } from './components/layout/RightSideBar.jsx'
import { Footer } from './components/layout/Footer.jsx'

function App() {

  return (
    <main className='App bg-neutral-800'>
      <Nav></Nav>
      <LeftSideBar></LeftSideBar>
      <RightSideBar></RightSideBar>
      <section>
        <Hero></Hero>
        <SobreMi></SobreMi>
        <ProyectosPrincipales></ProyectosPrincipales>
        <ProyectosSecundarios></ProyectosSecundarios>
        <Contacto></Contacto>
      </section>
      <Footer></Footer>
    </main>
  )
}

export default App
