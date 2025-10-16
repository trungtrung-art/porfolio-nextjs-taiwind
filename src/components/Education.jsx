import React, {useEffect, useRef, useState} from "react"
import {useScroll, motion} from "framer-motion"
import LilIcon from "./LilIcon"

const Detail = ({
    degree,
    date_issued,
    institution,
    grade,
    major,
    mode_of_study,
}) => {
    const ref = useRef(null)
    return (
        <li
            ref={ref}
            className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
        >
            <LilIcon reference={ref} />
            <motion.div
                initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, type: "spring"}}
                viewport={{once: true}}
                className='relative w-full bg-light dark:bg-dark border border-dark/10 dark:border-light/20 rounded-2xl shadow-md p-6 md:p-4'
            >
                {/* Header */}
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3'>
                    <h3 className='font-bold text-2xl sm:text-xl text-primary'>
                        {degree}
                    </h3>
                    <span className='text-sm text-dark/60 dark:text-light/60 italic'>
                        {mode_of_study}
                    </span>
                </div>

                {/* Main info */}
                <div className='space-y-2'>
                    <p className='text-lg sm:text-base font-semibold'>
                        <span className='text-dark dark:text-light/90'>
                            Major:
                        </span>{" "}
                        {major}
                    </p>
                    <p className='text-lg sm:text-base'>
                        <span className='font-semibold text-dark dark:text-light/90'>
                            Institution:
                        </span>{" "}
                        {institution}
                    </p>
                    <p className='text-lg sm:text-base'>
                        <span className='font-semibold text-dark dark:text-light/90'>
                            Grade:
                        </span>{" "}
                        {grade}
                    </p>
                    <p className='text-lg sm:text-base'>
                        <span className='font-semibold text-dark dark:text-light/90'>
                            Date Issued:
                        </span>{" "}
                        {date_issued}
                    </p>
                </div>
            </motion.div>
        </li>
    )
}

function Education(props) {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    })

    const [education, setEducations] = useState([])

    useEffect(() => {
        fetch("/api/education")
            .then((res) => res.json())
            .then((data) => setEducations(data))
            .catch((err) => console.error(err))
    }, [])
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Education
            </h2>

            <div
                ref={ref}
                className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'
            >
                <motion.div
                    style={{scaleY: scrollYProgress}}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl
        md:w-[2px] md:left-[30px] xs:left-[20px]
        '
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    {education.map(
                        (
                            {
                                degree,
                                date_issued,
                                institution,
                                grade,
                                major,
                                mode_of_study,
                            },
                            index,
                        ) => (
                            <Detail
                                key={index}
                                degree={degree}
                                major={major}
                                institution={institution}
                                grade={grade}
                                date_issued={date_issued}
                                mode_of_study={mode_of_study}
                            />
                        ),
                    )}
                </ul>
            </div>
        </div>
    )
}

Education.propTypes = {}

export default Education
