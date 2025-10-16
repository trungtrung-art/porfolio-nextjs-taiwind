import React, {useEffect, useState} from "react"
import {CircularText} from "./Icons"
import Link from "next/link"

function HireMe() {
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch("/api/user")
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((err) => console.error(err))
    }, [])
    return (
        <div
            className='fixed left-4 bottom-4 flex item-center justify-center overflow-hidden
    md:right-8 md:top-[50px] md:left-auto md:bottom-auto md:absolute sm:right-0'
        >
            <div
                className='w-48 h-auto flex items-center justify-center relative
      md:w-24'
            >
                <CircularText className={"fill-dark dark:fill-light"} />
                <Link
                    href={`mailto:${user.email}`}
                    className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
          md:w-12 md:h-12 md:text-[10px]'
                >
                    Hire Me
                </Link>
            </div>
        </div>
    )
}

HireMe.propTypes = {}

export default HireMe
