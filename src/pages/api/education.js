export default function handler(req, res) {
    const content = [
        {
            degree: "Advanced Diploma (Level 5 VQF)",
            major: "Web Engineering",
            institution: "FPT University",
            grade: "Good",
            date_issued: "10/02/2020",
            mode_of_study: "Full-time",
        },
        {
            degree: "Intermediate Professional Education Diploma",
            major: "Applied Informatics",
            institution: "Ho Chi Minh City Technical and Economic College",
            grade: "Good",
            date_issued: "04/05/2017",
            mode_of_study: "Full-time",
        },
    ]

    if (req.method === "GET") {
        res.status(200).json(content)
    } else {
        res.status(405).json({message: "Method not allowed"})
    }
}
