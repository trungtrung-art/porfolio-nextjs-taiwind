import NavBar from "@/components/NavBar"
import {AnimatePresence} from "framer-motion"
import Head from "next/head"
import {useRouter} from "next/router"
import {Fira_Code, Montserrat} from "next/font/google"
import "@/styles/globals.css"

const fira = Fira_Code({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-fira",
})

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-mont",
})

export default function App({Component, pageProps}) {
    const router = useRouter()
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>{" "}
            <main
                className={`${montserrat.variable} ${fira.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
            >
                <NavBar />
                <AnimatePresence mode='wait'>
                    <Component key={router.asPath} {...pageProps} />{" "}
                </AnimatePresence>{" "}
            </main>{" "}
        </>
    )
}
