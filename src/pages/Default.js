import Navbar from '../components/Default/Navbar'
import Main from '../components/Default/Main'

function App() {
    return (
        <div className="min-h-screen relative">
            <div className="absolute bg-[url('./assets/images/hero.png')] bg-no-repeat bg-cover bg-center w-full min-h-screen">
                <div className="text-white font-rubik">
                    <div className="px-12 py-9">
                        <Navbar />
                    </div>
                    <div className="pb-9">
                        <Main />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
