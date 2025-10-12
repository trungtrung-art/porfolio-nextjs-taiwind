import { calculateYearsFromDate } from "@/common/helpers"
import profilePic from "~/images/profile/developer-pic-1.png"

export default function handler(req, res) {
    const expirentYears = calculateYearsFromDate("01/09/2018")

    const content = {
        title: "Transforming Vision into Stunning Interfaces with Code and Design.",
        description: `I am a passionate Front - End Engineer, weaving stunning, responsive interfaces with Next.js, Tailwind CSS, and a flair for pixel - perfect designs that dance with performance and accessibility, turning complex E-commerce visions into unforgettable digital masterpieces with over ${expirentYears} years of expertise...`,
        imageUrl: profilePic,
    }

    if (req.method === "GET") {
        res.status(200).json(content)
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}