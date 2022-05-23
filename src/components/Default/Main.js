import React from 'react'
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import landingImg from '../../assets/club-landing.jpg'

export default function Main() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex justify-center">
                <div className="w-[85%] relative">
                    <img src={landingImg} className="w-full" alt="" />
                    <div className="bg-gray-800 absolute rounded-md p-8 bottom-0">
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
                </div>
            </div>
        </motion.div>
    )
}
