import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import ErrorPage from './components/ErrorPage'
import Location from './components/Location'
import Contatos from './components/Contatos'
import Honda from './pages/carPage/Honda/Honda'
import Mitsubishi from './pages/carPage/Mitsubishi/Mitsubishi'
import Toyota from './pages/carPage/Toyota/Toyota'
import Nissan from './pages/carPage/Nissan/Nissan'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/location" element={ <Location /> } />
            <Route path="/contato" element={ <Contatos /> } />
            {/*   Rotas da Gallery Section   */}
            <Route path="/honda" element={ <Honda /> } />
            <Route path="/nissan" element={ <Nissan /> } />
            <Route path="/toyota" element={ <Toyota /> } />
            <Route path="/mitsubishi" element={ <Mitsubishi /> } />
            <Route path="/" element={ <Home />} />


            <Route path="*" element={ <ErrorPage /> } />

        </Routes>
    )
}