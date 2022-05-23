import Navbar from '../components/Default/Navbar'
import Main from '../components/Default/Main'

function App() {
    return (
        <div className="min-h-screen bg-dark text-white font-rubik">
            <div className="px-12 py-9">
                <Navbar />
            </div>
            <div className="px-12 pb-9">
                <Main />
            </div>
        </div>
    )
}

export default App