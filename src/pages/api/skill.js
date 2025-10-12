export default function handler(req, res) {
    const content = [
        { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "SCSS", url: "https://sass-lang.com/documentation/" },
        {
            name: "HTML",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        { name: "Pug", url: "https://pugjs.org/api/getting-started.html" },
        {
            name: "JavaScript",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        { name: "ReactJS", url: "https://react.dev/" },
        { name: "NextJS", url: "https://nextjs.org/docs" },
        { name: "GatsbyJS", url: "https://www.gatsbyjs.com/docs/" },
        {
            name: "Web Design",
            url: "https://developer.mozilla.org/en-US/docs/Learn/Design_and_accessibility",
        },
        { name: "Figma", url: "https://help.figma.com/hc/en-us" },
        { name: "Firebase", url: "https://firebase.google.com/docs" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
        { name: "Bootstrap", url: "https://getbootstrap.com/docs/" },
        { name: "Shadcn", url: "https://ui.shadcn.com/docs" },
        { name: "Ant Design", url: "https://ant.design/docs/react/introduce" },
        {
            name: "Material UI",
            url: "https://mui.com/material-ui/getting-started/",
        },
        { name: "NodeJS", url: "https://nodejs.org/en/docs" },
        { name: "StencilJS", url: "https://stenciljs.com/docs/introduction" },
        { name: "Git", url: "https://git-scm.com/doc" },
        { name: "Docker", url: "https://docs.docker.com/" },
        { name: "TypeScript", url: "https://www.typescriptlang.org/docs/" },
        { name: "Stripe", url: "https://stripe.com/docs" },
        { name: "Strapi", url: "https://docs.strapi.io/" },
        { name: "PayPal", url: "https://developer.paypal.com/docs/" },
    ]

    if (req.method === "GET") {
        res.status(200).json(content)
    } else {
        res.status(405).json({ message: "Method not allowed" })
    }
}