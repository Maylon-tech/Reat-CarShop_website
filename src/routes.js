import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import ErrorPage from './components/ErrorPage'
import Location from './components/Location'
import Contatos from './components/Contatos'
import Honda from './pages/carPage/Honda/Honda'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/location" element={ <Location /> } />
            <Route path="/contato" element={ <Contatos /> } />
            {/*   Rotas da Gallery Section   */}
            <Route path="/honda" element={ <Honda /> } />
            <Route path="/" element={ <Home />} />


            <Route path="*" element={ <ErrorPage /> } />

        </Routes>
    )
}