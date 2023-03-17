import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import ErrorPage from './components/ErrorPage'
import Location from './components/Location'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/location" element={ <Location /> } />

            {/*   Rotas da Gallery Section   */}


            <Route path="*" element={ <ErrorPage /> } />

        </Routes>
    )
}