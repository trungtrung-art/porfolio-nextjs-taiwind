import React, {useEffect, useRef} from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import profilePic from "~/images/profile/developer-pic-2.png"
import profilePic2 from "~/images/profile/developer-pic-3.png"
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

function about(props) {
    const expirentYears = calculateYearsFromDate("01/09/2018")

    return (
        <>
            <Head>
                <title> TrungTran | About Page </title>{" "}
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
                            <p className='font-medium'>
                                - Hello, I`m Trung ( Việt Nam ), you can call me
                                Tristan – a Front End Engineer with over 6 years
                                of experience in web development and crafting
                                exceptional user experiences.
                            </p>{" "}
                            <p className='my-4 font-medium'>
                                - My journey into the world of information
                                technology began during my high school years,
                                where I enthusiastically explored and
                                passionately learned about every aspect of the
                                field. With a solid foundation in both computer
                                hardware and software, continuously honed since
                                my graduation in 2019, I`ve developed a
                                comprehensive understanding of how technology
                                operates and creates value.
                            </p>{" "}
                            <p className='my-4 font-medium'>
                                - However, my greatest passion and the focal
                                point of my career lie in User Interface (UI)
                                programming and the creation of outstanding User
                                Experiences (UX). I am fascinated by the ability
                                to transform complex ideas into intuitive,
                                aesthetically pleasing, and easy-to-use
                                interfaces – where visual aesthetics are
                                elevated and brought closer to the user.
                            </p>{" "}
                            <p className='my-4 font-medium'>
                                - I believe that a truly great interface goes
                                beyond mere visual appeal. It must be a
                                harmonious blend of art and science, where every
                                pixel and every interaction is meticulously
                                designed to solve problems, streamline
                                processes, and deliver maximum user
                                satisfaction. More importantly, I firmly believe
                                that every line of code and every design detail
                                must strongly reflect and support business
                                logic, contributing to the overall success of
                                the project.
                            </p>{" "}
                            <p className='my-4 font-medium'>
                                - Whether developing a unique website, a smooth
                                mobile application, or any other digital
                                product, I consistently bring my commitment to
                                design excellence and user-centered thinking to
                                every task. I constantly seek out new
                                methodologies and cutting-edge technologies to
                                bring the visions of clients and partners to
                                life in the most creative and effective way
                                possible.
                            </p>{" "}
                            <p className='font-medium'>
                                - I eagerly look forward to the opportunity to
                                connect and collaborate, bringing my skills,
                                passion, and extensive experience as a seasoned
                                Front End Engineer to your next project. Let`s
                                build digital products that not only function
                                flawlessly but also truly resonate with users.
                            </p>{" "}
                        </div>{" "}
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-9 md:p-0'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:hidden' />
                            <PixelTransition
                                firstContent={
                                    <Image
                                        src={profilePic2}
                                        alt='TrungTran'
                                        className='w-full h-auto rounded-2xl'
                                        priority
                                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    />
                                }
                                secondContent={
                                    <Image
                                        src={profilePic}
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
                            {/* <Image
                                src={profilePic}
                                alt='CodeBucks'
                                className='w-full h-auto rounded-2xl'
                                priority
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            /> */}
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

about.propTypes = {}

export default about
