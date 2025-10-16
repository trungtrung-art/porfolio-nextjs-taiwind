import React, {useEffect, useMemo, useState} from "react"
import {motion} from "framer-motion"
import {generateSkillPositions} from "@/common/helpers"
import {useMediaQuery} from "./hooks/useMediaQuery"

const Skill = ({name, x, y, link, logo}) => {
    return (
        <motion.a
            className='flex items-center justify-center rounded-full text-light p-4 shadow-dark cursor-pointer absolute 
    bg-light dark:text-dark 
    lg:p-3 md:p-2 
    shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.25)]
    transition-shadow duration-300'
            whileHover={{scale: 1.05}}
            initial={{x: 0, y: 0}}
            whileInView={{x: x, y: y, transition: {duration: 1.5}}}
            viewport={{once: true}}
            href={link}
            target='_blank'
        >
            <img
                src={logo}
                alt={name}
                className='w-10 h-10 object-contain md:w-6 md:h-6'
            />
        </motion.a>
    )
}

function Skills(props) {
    const [skills, setSkills] = useState([])

    const isMobile = useMediaQuery("(max-width: 640px)")
    const isTablet = useMediaQuery("(max-width: 1024px)")

    useEffect(() => {
        fetch("/api/skill")
            .then((res) => res.json())
            .then((data) => setSkills(data))
            .catch((err) => console.error(err))
    }, [])

    const listKillRandomPosition = useMemo(() => {
        if (isMobile) return generateSkillPositions(skills, [15, 35], 10)
        if (isTablet) return generateSkillPositions(skills, [10, 25], 8)
        return generateSkillPositions(skills, [5, 10], 5)
    }, [skills, isMobile, isTablet])

    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
                Skills{" "}
            </h2>{" "}
            <div
                className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh] dm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm '
            >
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{scale: 1.05}}
                >
                    Web{" "}
                </motion.div>{" "}
                {listKillRandomPosition.map((skill) => (
                    <Skill
                        key={skill.name}
                        name={skill.name}
                        logo={skill.logo}
                        x={skill.x}
                        y={skill.y}
                        link={skill.url}
                    />
                ))}{" "}
            </div>{" "}
        </>
    )
}

Skills.propTypes = {}

export default Skills
