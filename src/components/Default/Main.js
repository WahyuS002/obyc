import React from 'react'

import { motion } from 'framer-motion'

export default function Main() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex justify-center">
                <div className="w-full h-[80vh] relative">
                    <div className="bg-gray-800 absolute rounded-md p-8 bottom-0 mx-3 md:mx-0 md:left-8">
                        <div>
                            <div>
                                <span className="uppercase text-sm text-gray-400">Sold Out</span>
                                <h4 className="uppercase text-xl font-bold">Check our collection on Opensea </h4>
                            </div>
                            <a
                                href="https://opensea.io/collection/okaybearsyachtclub"
                                target={'_blank'}
                                className="px-5 py-2 rounded-sm bg-primary hover:bg-orange-400 transition-all duration-300 ease-in-out   text-xl font-bold uppercase text-dark flex justify-center items-center mt-5"
                                rel="noreferrer"
                            >
                                <span>Opensea</span>
                                <span className="ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
