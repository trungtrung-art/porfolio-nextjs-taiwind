import { calculateYearsFromDate } from "@/common/helpers"
import profilePic2 from "~/images/profile/developer-pic-2.png"
import profilePic3 from "~/images/profile/developer-pic-3.png"

export default function handler(req, res) {
    const expirentYears = calculateYearsFromDate("01/09/2018")

    const content = {
        bio: [
            `- Hello, I'm Trung(Việt Nam), you can call me Tristan – a Front End Engineer with over ${expirentYears} years of experience in web development and crafting exceptional user experiences.`,
            "- My journey into the world of information technology began during my high school years, where I enthusiastically explored and passionately learned about every aspect of the field. With a solid foundation in both computer hardware and software, continuously honed since my graduation in 2019, I`ve developed acomprehensive understanding of how technology operates and creates value.",
            "- However, my greatest passion and the focal point of my career lie in User Interface (UI) programming and the creation of outstanding UserExperiences (UX). I am fascinated by the abilityto transform complex ideas into intuitive,aesthetically pleasing, and easy-to-use interfaces – where visual aesthetics are elevated and brought closer to the user.",
            "- I believe that a truly great interface goes beyond mere visual appeal. It must be a harmonious blend of art and science, where every pixel and every interaction is meticulously designed to solve problems, streamline processes, and deliver maximum user satisfaction. More importantly, I firmly believe that every line of code and every design detail must strongly reflect and support business logic, contributing to the overall success of the project.",
            "- Whether developing a unique website, a smooth mobile application, or any other digital product, I consistently bring my commitment to design excellence and user - centered thinking to every task.I constantly seek out new methodologies and cutting - edge technologies to bring the visions of clients and partners to life in the most creative and effective way possible.",
            "- I eagerly look forward to the opportunity to connect and collaborate, bringing my skills, passion, and extensive experience as a seasoned Front End Engineer to your next project. Let`s build digital products that not only function flawlessly but also truly resonate with users.",
        ],
        imageUrl2: profilePic2,
        imageUrl3: profilePic3,
    }

    if (req.method === "GET") {
        res.status(200).json(content)
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}