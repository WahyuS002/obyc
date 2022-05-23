import { Routes, Route } from 'react-router-dom'

import Default from './pages/Default'
import Home from './pages/Home'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Default />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default App
