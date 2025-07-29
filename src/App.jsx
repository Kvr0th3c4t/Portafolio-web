import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Proyectos } from './components/Proyectos'
import { SobreMi } from './components/SobreMi'
import './index.css'

function App() {

  return (
    <main className='App bg-neutral-800'>
      <Nav></Nav>
      <section>
        <Hero></Hero>
        <SobreMi></SobreMi>
        <Proyectos></Proyectos>

      </section>
    </main>
  )
}

export default App
