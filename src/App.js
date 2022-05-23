import { Routes, Route, useLocation } from 'react-router-dom'

import Default from './pages/Default'
import Home from './pages/Home'

import { AnimatePresence } from 'framer-motion'

function App() {
    const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Default />} />
                {/* <Route path="/home" element={<Home />} /> */}
            </Routes>
        </AnimatePresence>
    )
}

export default App
