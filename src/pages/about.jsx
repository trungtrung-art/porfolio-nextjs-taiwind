"use client"

import React, {useEffect, useRef, useState} from "react"
import Head from "next/head"
import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Image from "next/image"
import {useInView, useMotionValue, useSpring} from "framer-motion"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import TransitionEffect from "@/components/TransitionEffect"
import PixelTransition from "@/components/PixelTransition"
import {calculateYearsFromDate} from "@/common/helpers"

const AnimatedNumber = ({value}) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (lastest) => {
            if (ref.current && lastest.toFixed(0) <= value) {
                ref.current.textContent = lastest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}> </span>
}

function About() {
    const [about, setAbout] = useState({})

    useEffect(() => {
        fetch("/api/about")
            .then((res) => res.json())
            .then((data) => setAbout(data))
            .catch((err) => console.error(err))
    }, [])

    const expirentYears = calculateYearsFromDate("01/09/2018")

    return (
        <>
            <Head>
                <title> TrungTrungArt | About Me </title>{" "}
                <meta name='description' content='any description' />
            </Head>{" "}
            <TransitionEffect />
            <main className='flex -w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText
                        text='Trung Tran'
                        className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
                    />
                    <div className='grid w-full grid-cols-9 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-5 md:order-2 md:col-span-9'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                                Biography{" "}
                            </h2>{" "}
                            {about?.bio?.length &&
                                about?.bio?.map((text, index) => {
                                    return (
                                        <p
                                            key={index}
                                            className={`font-medium ${
                                                index != 0 ? "my-4" : ""
                                            }`}
                                        >
                                            {text}
                                        </p>
                                    )
                                })}
                        </div>{" "}
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-9 md:p-0'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:hidden' />
                            <PixelTransition
                                firstContent={
                                    <Image
                                        src={about?.imageUrl2}
                                        alt='TrungTran'
                                        className='w-full h-auto rounded-2xl'
                                        priority
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    />
                                }
                                secondContent={
                                    <Image
                                        src={about?.imageUrl3}
                                        alt='TrungTran'
                                        className='w-full h-auto rounded-2xl'
                                        priority
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    />
                                }
                                gridSize={12}
                                pixelColor='#ffffff'
                                animationStepDuration={0.4}
                                className='custom-pixel-card'
                                aspectRatio={"150%"}
                            />
                        </div>{" "}
                        <div className='col-span-3 flex flex-col items-end justify-between xl:col-span-9 xl:flex-row xl:items-center md:order-4'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumber value={50} />+{" "}
                                </span>{" "}
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                    stisfied clients{" "}
                                </h2>{" "}
                            </div>{" "}
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumber value={40} />+{" "}
                                </span>{" "}
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                    project completed{" "}
                                </h2>{" "}
                            </div>{" "}
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumber value={expirentYears} />+{" "}
                                </span>{" "}
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                                    years of experience{" "}
                                </h2>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>

                    <Skills />
                    <Experience />
                    <Education />
                </Layout>{" "}
            </main>{" "}
        </>
    )
}

About.propTypes = {}

export default About
