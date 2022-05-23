import React from 'react'
import Navbar from '../components/Home/Navbar'
import Main from '../components/Home/Main'

export default function Home() {
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
