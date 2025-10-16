import React, {useEffect, useRef, useState} from "react"
import {useScroll, motion} from "framer-motion"
import LilIcon from "./LilIcon"

const Detail = ({
    position,
    company,
    companyLink,
    time,
    location,
    description,
    projects,
}) => {
    const ref = useRef(null)
    return (
        <li
            ref={ref}
            className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
        >
            <LilIcon reference={ref} />
            <motion.div
                initial={{y: 50}}
                whileInView={{y: 0}}
                transition={{duration: 0.5, type: "spring"}}
                className='w-[80%]'
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}{" "}
                    <a
                        href={companyLink}
                        target='_blank'
                        className='text-primary dark:text-primaryDark capitalize'
                    >
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | <strong>{location}</strong>
                </span>
                {description.map((work) => {
                    return (
                        <p
                            key={JSON.stringify(work)}
                            className='font-medium w-full md:text-sm'
                            dangerouslySetInnerHTML={{__html: work}}
                        />
                    )
                })}
                {projects && projects.length > 0 && (
                    <div className='mt-6'>
                        <h3 className='text-lg font-semibold text-primary dark:text-primaryDark mb-3'>
                            Projects :
                        </h3>
                        <ul className='space-y-3'>
                            {projects.map((proj, i) => (
                                <li
                                    key={i}
                                    className='p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-all duration-300'
                                >
                                    <div className='flex items-center justify-between'>
                                        {proj.url ? (
                                            <a
                                                href={proj.url}
                                                target='_blank'
                                                rel='noreferrer'
                                                className='text-primary dark:text-primaryDark font-medium hover:underline'
                                            >
                                                {proj.name}
                                            </a>
                                        ) : (
                                            <span className='text-gray-800 dark:text-gray-200 font-medium'>
                                                {proj.name || "..."}
                                            </span>
                                        )}
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${
                                                proj.status === "Completed"
                                                    ? "bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-300"
                                                    : "bg-yellow-100 text-yellow-600 dark:bg-yellow-800 dark:text-yellow-300"
                                            }`}
                                        >
                                            {proj.status}
                                        </span>
                                    </div>
                                    {proj.description && (
                                        <p className='text-sm text-gray-600 dark:text-gray-400 mt-1'>
                                            {proj.description}
                                        </p>
                                    )}
                                    <div className='mt-2 text-xs text-gray-500 dark:text-gray-400 flex gap-4'>
                                        {proj.team && (
                                            <span>👥 {proj.team}</span>
                                        )}
                                        {proj.duration && (
                                            <span>⏱️ {proj.duration}</span>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </motion.div>
        </li>
    )
}

function Experience(props) {
    const ref = useRef(null)
    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        fetch("/api/experience")
            .then((res) => res.json())
            .then((data) => setExperiences(data))
            .catch((err) => console.error(err))
    }, [])

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    })
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
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
                    {experiences.map(
                        ({
                            position,
                            company,
                            time,
                            location,
                            description,
                            projects,
                        }) => (
                            <Detail
                                key={position}
                                position={position}
                                company={company}
                                time={time}
                                location={location}
                                description={description}
                                projects={projects}
                            />
                        ),
                    )}
                </ul>
            </div>
        </div>
    )
}

Experience.propTypes = {}

export default Experience
