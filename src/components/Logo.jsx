"use client"
import React, {useEffect, useState} from "react"
import {motion} from "framer-motion"

function Logo() {
    const [phase, setPhase] = useState("intro")
    const [typedText, setTypedText] = useState("<")
    const fullText = "<trungtrungart/>"

    useEffect(() => {
        if (phase === "typing") {
            let index = 0
            const typing = setInterval(() => {
                if (index < fullText.length) {
                    setTypedText(
                        (prev) =>
                            prev + (fullText[index] ? fullText[index] : ""),
                    )
                    index++
                } else {
                    clearInterval(typing)
                }
            }, 100)
            return () => clearInterval(typing)
        }
    }, [phase])

    return (
        <div className='flex items-center justify-center '>
            {phase === "intro" ? (
                <motion.div
                    className='text-6xl md:text-2xl font-extrabold flex items-center justify-center font-fira'
                    initial='hidden'
                    animate='visible'
                    variants={{
                        hidden: {},
                        visible: {transition: {staggerChildren: 0.1}},
                    }}
                    onAnimationComplete={() =>
                        setTimeout(() => setPhase("typing"), 800)
                    }
                >
                    {/* <T */}
                    <motion.span
                        className='inline-block text-dark dark:text-light font-fira'
                        variants={{
                            hidden: {x: -50, opacity: 0},
                            visible: {
                                x: 0,
                                opacity: 1,
                                transition: {duration: 0.8, delay: 0.2},
                            },
                        }}
                    >
                        &lt;T
                    </motion.span>

                    {/* T trung tâm */}
                    <motion.span
                        className='inline-block mx-2 text-primary font-fira'
                        variants={{
                            hidden: {opacity: 0, scale: 0.8},
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: {duration: 1, delay: 0.6},
                            },
                        }}
                    >
                        T
                    </motion.span>

                    {/* A/> */}
                    <motion.span
                        className='inline-block text-dark dark:text-light font-fira'
                        variants={{
                            hidden: {x: 50, opacity: 0},
                            visible: {
                                x: 0,
                                opacity: 1,
                                transition: {duration: 0.8, delay: 1.0},
                            },
                        }}
                    >
                        A/&gt;
                    </motion.span>
                </motion.div>
            ) : (
                // Typing effect
                <motion.div
                    className='text-4xl md:text-2xl font-bold font-fira 
                     bg-gradient-to-r from-primary to-dark dark:to-light
                     bg-clip-text text-transparent'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}
                >
                    {typedText}
                    <motion.span
                        className='inline-block'
                        animate={{opacity: [1, 0, 1]}}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                        }}
                    >
                        |
                    </motion.span>
                </motion.div>
            )}
        </div>
    )
}

export default Logo
