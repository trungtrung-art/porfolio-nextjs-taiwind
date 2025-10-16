export default function handler(req, res) {
    const content = [
        {
            name: "CSS",
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "SCSS",
            url: "https://sass-lang.com/documentation/",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
        {
            name: "HTML",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "Pug",
            url: "https://pugjs.org/api/getting-started.html",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pug/pug-original.svg",
        },
        {
            name: "JavaScript",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "ReactJS",
            url: "https://react.dev/",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "NextJS",
            url: "https://nextjs.org/docs",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "GatsbyJS",
            url: "https://www.gatsbyjs.com/docs/",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg",
        },
        {
            name: "Figma",
            url: "https://help.figma.com/hc/en-us",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
        {
            name: "Firebase",
            url: "https://firebase.google.com/docs",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
        {
            name: "Tailwind CSS",
            url: "https://tailwindcss.com/docs",
            logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg",
        },
        {
            name: "Bootstrap",
            url: "https://getbootstrap.com/docs/",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
            name: "Shadcn",
            url: "https://ui.shadcn.com/docs",
            logo: "https://ui.shadcn.com/favicon.ico",
        },
        {
            name: "Ant Design",
            url: "https://ant.design/docs/react/introduce",
            logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/antdesign.svg",
        },
        {
            name: "Material UI",
            url: "https://mui.com/material-ui/getting-started/",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        },
        {
            name: "NodeJS",
            url: "https://nodejs.org/en/docs",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "StencilJS",
            url: "https://stenciljs.com/docs/introduction",
            logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/stencil.svg",
        },
        {
            name: "Git",
            url: "https://git-scm.com/doc",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
            name: "Docker",
            url: "https://docs.docker.com/",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
            name: "TypeScript",
            url: "https://www.typescriptlang.org/docs/",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
            name: "Stripe",
            url: "https://stripe.com/docs",
            logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
        },
        {
            name: "Strapi",
            url: "https://docs.strapi.io/",
            logo: "https://strapi.io/assets/strapi-logo-dark.svg",
        },
        {
            name: "PayPal",
            url: "https://developer.paypal.com/docs/",
            logo: "https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg",
        },
        {
            name: "GSAP",
            url: "https://greensock.com/docs/",
            logo: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
        },
    ]

    if (req.method === "GET") {
        res.status(200).json(content)
    } else {
        res.status(405).json({message: "Method not allowed"})
    }
}
