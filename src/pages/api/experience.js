export default function handler(req, res) {
    const content = [{
            company: "Elinext Viet Nam",
            position: "Middle Developer ReactJS",
            location: "Ho Chi Minh City",
            time: "06/2021 - 05/2025",
            description: [
                "- Develop high-quality, scalable UI using <strong>ReactJS, Next.js, TypeScript, Tailwind CSS<strong/>.",
                "- Optimize performance & SEO with <strong>SSR, ISR, lazy loading, and caching<strong/>.",
                "- Integrate & manage APIs (RESTful, GraphQL) using <strong>React Query, Redux Toolkit, Zustand.<strong/>",
                "- Implement complex business logic following <strong>SOLID<strong/> principles.",
                "- Collaborate with UI/UX designers, back-end devs, and product owners.",
                "- Enhance UX/UI with animations (Framer Motion).",
                "- Write unit and integration tests <strong>(Jest, React Testing Library, Cypress)<strong/>.",
                "- Code review, refactoring, and mentoring junior developers.",
                "- Research and apply new front-end technologies.",
                "- Setup <strong>CI/CD<strong/> pipelines with <strong>GitHub Actions<strong/>.",
                "- Follow security best practices <strong>(XSS, CSRF, CORS)<strong/>.",
                "- Migrate & refactor legacy codebases using modern <strong>TypeScript<strong/>.",
            ],
            projects: [{
                    name: "Exercise Software",
                    url: "https://exercisesoftware.com/",
                    description: "Exercise management platform for coaches and students.",
                    team: "1 Front-end, 1 Back-end",
                    duration: "1 year",
                    status: "Completed",
                },
                {
                    name: "TIV",
                    description: "CMS development project for vending machines.",
                    team: "2 Front-end, 1 Back-end, 1 Designer",
                    duration: "2+ years",
                    status: "Completed",
                },
                {},
            ],
        },
        {
            company: "3F Solutions (Google Partner)",
            position: "Junior Front-end Developer",
            location: "Ho Chi Minh City",
            time: "01/2019 - 04/2021",
            description: [
                "- Converted PSD/XD to responsive websites.",
                "- Integrated RESTful APIs for dynamic content.",
                "- Built community-based and self-learning websites.",
                "- Optimized for user engagement and conversions.",
                "- Worked on cryptocurrency exchange platforms using <strong>ReactJS<strong/>.",
            ],
            projects: [{
                    name: "Truyene",
                    url: "https://truyene.com/",
                    status: "Completed",
                    team: "2 Front-end, 1 Back-end",
                    duration: "6 months",
                },
                {
                    name: "FFF",
                    url: "https://fff.com.vn/",
                    status: "Completed",
                    team: "2 Front-end, 1 Back-end",
                    duration: "8 months",
                },
                {
                    name: "Hutkhach",
                    url: "https://hutkhach.com/",
                    status: "Completed",
                    team: "2 Front-end, 1 Back-end",
                    duration: "8 months",
                },
                {
                    name: "Webrank",
                    url: "https://webrank.vn/",
                    status: "Completed",
                    team: "3 Front-end, 1 Back-end",
                    duration: "5 months",
                },
                {
                    name: "NUT MONEY",
                    url: "https://docs.nut.money/",
                    status: "Completed",
                    team: "1 Front-end, 1 Back-end",
                    duration: "3 months",
                },
                {
                    name: "Moonship Finance",
                    url: "https://moonship.finance/",
                    status: "Completed",
                    team: "1 Front-end, 1 Back-end",
                    duration: "4 months",
                },
                {},
            ],
        },
        {
            company: "Cánh Cam Agency",
            position: "Fresher Front-end",
            location: "Ho Chi Minh City",
            time: "12/2018 - 03/2019",
            description: [
                "- Converted PSD/XD to responsive websites.",
                "- Collaborated with team to fix bugs and deliver features.",
                "- Designed UX/UI based on client requirements.",
            ],
            projects: [],
        },
        {
            company: "RunTime VN",
            position: "Fresher Front-end Developer",
            location: "Ho Chi Minh City",
            time: "08/2018 - 12/2018",
            description: [
                "- Converted PSD/XD to responsive websites.",
                "- Implemented client feedback to improve UI/UX.",
                "- Deployed HTML/CSS projects on WordPress.",
            ],
            projects: [],
        },
        {
            company: "Landing Page VietNam",
            position: "Intern Front-end",
            location: "Ho Chi Minh City",
            time: "04/2018 - 08/2018",
            description: [
                "- Converted PSD/XD to responsive websites.",
                "- Improved front-end coding skills and workflows.",
            ],
            projects: [],
        },
    ]

    if (req.method === "GET") {
        res.status(200).json(content)
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}