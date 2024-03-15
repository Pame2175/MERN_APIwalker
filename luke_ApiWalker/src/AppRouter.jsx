import './App.css'
import BuscaPokemon from './components/BuscaPokemon'
import PersonajeDetalle from './components/PokemonDetalle'
import Redireccionar from './components/Redireccionar'
import Usuario from './components/Usuario'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function AppRouter() {
    return (
        <BrowserRouter>
            <div className='container'>
                <header className='mt-3'>
                    <h1>SPA Router PARAM</h1>
                    <hr />

                    <nav>
                        <ul>
                            <li><Link to='/usuarios/francisco/boisier'>Pagina Usuarios</Link></li>
                        </ul>
                    </nav>
                    <BuscaPokemon />
                </header>


                <div className='row'>
                    <div className='col-6'>
                        <Routes>
                            <Route path="/" element={<Redireccionar to="/people/1" />} />
                            <Route path="/:resource/:id" element={<PersonajeDetalle />} />
                            <Route path="/usuarios/:nombre/:apellidos" element={<Usuario />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;
