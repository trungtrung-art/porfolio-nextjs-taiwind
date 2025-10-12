export default function handler(req, res) {
    const content = {
        email: "tt2861997@gmail.com",
        urlLinked: "https://www.linkedin.com/in/thiện-trung-tristan-thien-439913213",
        urlGithub: "https://github.com/trungtrung-art",
    }

    if (req.method === "GET") {
        res.status(200).json(content)
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}