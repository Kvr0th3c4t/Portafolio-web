import { Contacto } from './components/layout/Contacto'
import { Hero } from './components/layout/Hero'
import { Nav } from './components/layout/Nav'
import { Proyectos } from './components/layout/Proyectos'
import { SobreMi } from './components/layout/SobreMi'
import './index.css'

function App() {

  return (
    <main className='App bg-neutral-800'>
      <Nav></Nav>
      <section>
        <Hero></Hero>
        <SobreMi></SobreMi>
        <Proyectos></Proyectos>
        <Contacto></Contacto>

      </section>
    </main>
  )
}

export default App
