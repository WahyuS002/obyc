import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <div className="bg-gray-800 inline-block rounded-md p-8">
            <div className="flex">
                <div>
                    <h1 className="text-4xl italic font-semibold uppercase">
                        Welcome to <br /> Okay Bears <br /> Yacht Club
                    </h1>
                    <div className="mt-5">
                        <Link to={'home'} className="block bg-primary w-full py-3 rounded-md font-bold text-xl uppercase text-center">
                            Enter
                        </Link>
                    </div>
                </div>
                <span className="flex items-center -rotate-90 text-sm animate-pulse">← SCROLL DOWN</span>
            </div>
        </div>
    )
}
