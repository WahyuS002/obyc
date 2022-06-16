import React, { useEffect, useState } from 'react'
import Logo from './assets/logo.png'

export default function App() {
    const [timeLeft, setTimeLeft] = useState(5)

    useEffect(() => {
        let timer = setInterval(() => {
            timeLeft <= 0 ? (window.location.href = 'https://www.okaybearsyachtclub.io/') : setTimeLeft((prevTimeLeft) => prevTimeLeft - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [timeLeft])

    return (
        <div className="flex h-screen bg-gray-100 font-rubik">
            <div className="my-auto text-center bg-white shadow-xl rounded-2xl mx-4 md:mx-auto">
                <div className="pt-24 pb-12 px-6 md:px-12">
                    <div className="flex justify-center mb-8">
                        <img className="w-28" src={Logo} alt="" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Hang Tight!</h2>
                    <p className="text-base md:text-lg">
                        You're being redirect to{' '}
                        <a href="http://okaybearsyachtclub.io/" className="bg-gray-200 px-2 py-[2px] rounded-lg text-blue-500">
                            okaybearsyachtclub.io
                        </a>{' '}
                        in {timeLeft} seconds
                    </p>
                </div>
                <div className="w-full h-12 bg-gradient-to-r from-black via-orange-900 to-gray-800 background-animate rounded-b-2xl"></div>
            </div>
        </div>
    )
}
