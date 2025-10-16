import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import Link from "next/link"
import {LinkArrow} from "@/components/Icons"
import HireMe from "@/components/HireMe"
import TransitionEffect from "@/components/TransitionEffect"
import BlurText from "@/components/BlurText"
import TextType from "@/components/TextType"
import {useEffect, useState} from "react"

export default function Home() {
    const [content, setContent] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch("/api/home")
            .then((res) => res.json())
            .then((data) => setContent(data))
            .catch((err) => console.error(err))
    }, [])

    useEffect(() => {
        fetch("/api/user")
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((err) => console.error(err))
    }, [])

    return (
        <>
            <Head>
                <title> TrungTrungArt | Home</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect />
            <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
                <Layout className='pt-0 md:pt-16 sm:pt-8'>
                    <div className='flex items-center justify-between w-full lg:flex-col'>
                        <div className='w-1/2 md:w-full text-center'>
                            <Image
                                src={content?.imageUrl}
                                alt='TrungTrungArt'
                                className='h-auto w-[70%] lg:hidden md:inline-block md:w-full m-auto'
                                priority
                                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                            />
                        </div>
                        <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                            <BlurText
                                text={content.title || ""}
                                delay={150}
                                animateBy='words'
                                direction='top'
                                className='justify-start !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl lg:justify-center '
                            />

                            <TextType
                                className='my-4 text-base font-medium md:text-sm sm:text-xs '
                                text={content.description || ""}
                                as='p'
                                typingSpeed={7}
                            />

                            <div className='flex items-center self-start mt-2 lg:self-center'>
                                <Link
                                    href='/portfolio/CV-TRAN-THIEN-TRUNG.pdf'
                                    target={"_blank"}
                                    className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base '
                                    download={true}
                                >
                                    Resume <LinkArrow className='w-6 ml-1' />
                                </Link>
                                <Link
                                    href={`mailto:${user.email}}`}
                                    className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                <HireMe />
                <div className='absolute right-8 bottom-8 inline-block w-48 md:hidden opacity-5'>
                    <Image
                        src={lightBulb}
                        alt='TrungTrungArt'
                        className='w-full h-auto'
                    />
                </div>
            </main>
        </>
    )
}
