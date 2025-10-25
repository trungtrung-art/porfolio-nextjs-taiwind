import React, {useEffect, useRef, useState} from "react"
import Link from "next/link"
import Logo from "./Logo"
import {useRouter} from "next/router"
import {GithubIcon, LinkedInIcon, MoonIcon, SunIcon, MusicIcon} from "./Icons"
import {motion} from "framer-motion"
import useThemeSwitcher from "./hooks/useThemeSwitcher"
import {THEME_DARK, THEME_LIGHT} from "@/common/contants"
import {Volume2, VolumeX} from "lucide-react"

const CustomLink = ({href, title, className = ""}) => {
    const router = useRouter()

    return (
        <Link href={href} className={` ${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
                    router.asPath === href ? "w-full" : "w-0"
                } dark:bg-light`}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className = "", toggle}) => {
    const router = useRouter()

    const handleOnClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button
            className={` ${className} relative group text-light dark:text-dark my-2`}
            onClick={() => handleOnClick()}
        >
            {title}
            <span
                className={`h-[1px] inline-block bg-light absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
                    router.asPath === href ? "w-full" : "w-0"
                } dark:bg-dark`}
            >
                &nbsp;
            </span>
        </button>
    )
}

function NavBar(props) {
    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({})

    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)

    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        fetch("/api/user")
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((err) => console.error(err))
    }, [])

    const handleClickOpen = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (!isOpen) return

        const handleClickOutside = (event) => {
            const menu = menuRef.current
            const button = buttonRef.current

            if (
                menu &&
                !menu.contains(event.target) &&
                button &&
                !button.contains(event.target)
            ) {
                handleClickOpen()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () =>
            document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen, handleClickOpen])

    const toggleMusic = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
        } else {
            audioRef.current
                .play()
                .then(() => {
                    setIsPlaying(true)
                })
                .catch(() => {
                    console.log(
                        "⚠️ Trình duyệt chặn autoplay — sẽ phát khi người dùng click.",
                    )
                })
        }
    }

    useEffect(() => {
        // Thử bật nhạc ngay khi load
        audioRef.current
            .play()
            .then(() => {
                setIsPlaying(true)
            })
            .catch(() => {
                // Nếu autoplay bị chặn, chờ người dùng tương tác
                const startMusicOnFirstAction = () => {
                    toggleMusic()
                    document.removeEventListener(
                        "click",
                        startMusicOnFirstAction,
                    )
                }

                // Khi người dùng click đầu tiên vào trang, bật nhạc
                document.addEventListener("click", startMusicOnFirstAction)
            })

        // Cleanup khi unmount
        return () => {
            audioRef.current?.pause()
            document.removeEventListener("click", toggleMusic)
        }
    }, [])

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
            <button
                className='flex-col justify-center items-center hidden lg:flex'
                onClick={() => handleClickOpen()}
                ref={buttonRef}
            >
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                        isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${
                        isOpen ? "opacity-0" : "opacity-100"
                    }`}
                ></span>
                <span
                    className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${
                        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                ></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href='/' title='Home' className='mr-4' />
                    <CustomLink href='/about' title='About' className='mr-4' />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a
                        href={user.urlGithub}
                        target={"_blank"}
                        whileHover={{y: -2}}
                        whileTap={{scale: 0.9}}
                        className='w-6 mx-3'
                    >
                        <GithubIcon width='24px' height='24px' />
                    </motion.a>
                    <motion.a
                        href={user.urlLinked}
                        target='_blank'
                        whileHover={{y: -2}}
                        whileTap={{scale: 0.9}}
                        className='w-6 mx-3'
                    >
                        <LinkedInIcon width='24px' height='24px' />
                    </motion.a>

                    {/* Toggle Music */}
                    <motion.button
                        whileHover={{y: -2}}
                        whileTap={{scale: 0.9}}
                        onClick={toggleMusic}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 transition-colors ${
                            mode === THEME_LIGHT
                                ? "bg-dark text-light"
                                : "bg-light text-dark"
                        }`}
                    >
                        {isPlaying ? (
                            <Volume2
                                size={20}
                                strokeWidth='3'
                                className={
                                    mode === THEME_LIGHT
                                        ? "fill-light"
                                        : " fill-dark"
                                }
                            />
                        ) : (
                            <VolumeX
                                size={20}
                                strokeWidth='3'
                                className={
                                    mode === THEME_LIGHT
                                        ? "fill-light"
                                        : " fill-dark"
                                }
                            />
                        )}
                    </motion.button>
                    <audio
                        ref={audioRef}
                        src='/music/music-background.mp3'
                        loop
                        preload='auto'
                        autoPlay={true}
                    />

                    <button
                        onClick={() => {
                            setMode(mode === THEME_LIGHT ? "dark" : "light")
                        }}
                        className={`ml-3 flex items-center justify-center rounded-full p-1  ${
                            mode === THEME_LIGHT
                                ? "bg-dark text-light"
                                : "bg-light text-dark"
                        }`}
                    >
                        {mode === THEME_DARK ? (
                            <SunIcon className='fill-dark' />
                        ) : (
                            <MoonIcon className='fill-dark' />
                        )}
                    </button>
                </nav>
            </div>

            {isOpen ? (
                <motion.div
                    initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
                    animate={{scale: 1, opacity: 1}}
                    className='min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
                    ref={menuRef}
                >
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomMobileLink
                            href='/'
                            title='Home'
                            className=''
                            toggle={handleClickOpen}
                        />
                        <CustomMobileLink
                            href='/about'
                            title='About'
                            className=''
                            toggle={handleClickOpen}
                        />
                    </nav>

                    <nav className='flex items-center justify-center flex-wrap mt-2'>
                        <motion.a
                            href='hhtps://twitter.com'
                            target={"_blank"}
                            whileHover={{y: -2}}
                            whileTap={{scale: 0.9}}
                            className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'
                        >
                            <GithubIcon width='24px' height='24px' />
                        </motion.a>
                        <motion.a
                            href='hhtps://twitter.com'
                            target={"_blank"}
                            whileHover={{y: -2}}
                            whileTap={{scale: 0.9}}
                            className='w-6 mx-3 sm:mx-1'
                        >
                            <LinkedInIcon width='24px' height='24px' />
                        </motion.a>

                        {/* Toggle Music */}
                        <motion.button
                            whileHover={{y: -2}}
                            whileTap={{scale: 0.9}}
                            onClick={toggleMusic}
                            className={`ml-3 flex items-center justify-center rounded-full p-1 transition-colors ${
                                mode === THEME_LIGHT
                                    ? "bg-dark text-light"
                                    : "bg-light text-dark"
                            }`}
                        >
                            {isPlaying ? (
                                <Volume2
                                    size={20}
                                    strokeWidth='3'
                                    className={
                                        mode === THEME_LIGHT
                                            ? "fill-light"
                                            : " fill-dark"
                                    }
                                />
                            ) : (
                                <VolumeX
                                    size={20}
                                    strokeWidth='3'
                                    className={
                                        mode === THEME_LIGHT
                                            ? "fill-light"
                                            : " fill-dark"
                                    }
                                />
                            )}
                        </motion.button>

                        <button
                            onClick={() => {
                                setMode(mode === THEME_LIGHT ? "dark" : "light")
                            }}
                            className={`ml-3 flex items-center justify-center rounded-full p-1  ${
                                mode === THEME_LIGHT
                                    ? "bg-dark text-light"
                                    : "bg-light text-dark"
                            }`}
                        >
                            {mode === THEME_DARK ? (
                                <SunIcon className='fill-dark' />
                            ) : (
                                <MoonIcon className='fill-dark' />
                            )}
                        </button>
                    </nav>
                </motion.div>
            ) : null}

            <div className='absolute lg:right-[20px] lg:translate-x-[0] lg:translate-y-[-45%] top-[50%] translate-x-[50%] translate-y-[-50%] right-[50%] '>
                <Logo />
            </div>
        </header>
    )
}

NavBar.propTypes = {}

export default NavBar
