import { Contacto } from './components/layout/Contacto'
import { Hero } from './components/layout/Hero'
import { Nav } from './components/layout/Nav'
import { Proyectos } from './components/layout/Proyectos'
import { LeftSideBar } from './components/layout/LeftSideBar'
import { SobreMi } from './components/layout/SobreMi'
import './index.css'
import { RightSideBar } from './components/layout/RightSideBar'
import { Footer } from './components/layout/Footer'

function App() {

  return (
    <main className='App bg-neutral-800'>
      <Nav></Nav>
      <LeftSideBar></LeftSideBar>
      <RightSideBar></RightSideBar>
      <section>
        <Hero></Hero>
        <SobreMi></SobreMi>
        <Proyectos></Proyectos>
        <Contacto></Contacto>
      </section>
      <Footer></Footer>
    </main>
  )
}

export default App
