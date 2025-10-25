import React from "react"
import LogoLoop from "./LogoLoop"
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiSvelte,
    SiRemix,
    SiChakraui,
    SiMui,
    SiBootstrap,
    SiAntdesign,
    SiShadcnui,
    SiFramer,
    SiRedux,
    SiReactquery,
    SiRecoil,
    SiMobx,
} from "react-icons/si"

export const frontendFrameworks = [
    // Core frameworks
    {node: <SiReact />, title: "React", href: "https://react.dev"},
    {node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org"},
    {node: <SiSvelte />, title: "Svelte", href: "https://svelte.dev"},
    {node: <SiRemix />, title: "Remix", href: "https://remix.run"},

    // Languages & Styling
    {
        node: <SiTypescript />,
        title: "TypeScript",
        href: "https://www.typescriptlang.org",
    },
    {
        node: <SiTailwindcss />,
        title: "Tailwind CSS",
        href: "https://tailwindcss.com",
    },

    // UI Libraries
    {node: <SiChakraui />, title: "Chakra UI", href: "https://chakra-ui.com"},
    {node: <SiMui />, title: "MUI (Material UI)", href: "https://mui.com"},
    {
        node: <SiBootstrap />,
        title: "Bootstrap",
        href: "https://getbootstrap.com",
    },
    {node: <SiAntdesign />, title: "Ant Design", href: "https://ant.design"},
    {node: <SiShadcnui />, title: "shadcn/ui", href: "https://ui.shadcn.com"},
    {
        node: <SiFramer />,
        title: "Framer Motion",
        href: "https://www.framer.com/motion/",
    },

    // State management
    {node: <SiRedux />, title: "Redux", href: "https://redux.js.org"},
    {
        node: <SiReactquery />,
        title: "TanStack Query",
        href: "https://tanstack.com/query",
    },
    {node: <SiRecoil />, title: "Recoil", href: "https://recoiljs.org"},
    {node: <SiMobx />, title: "MobX", href: "https://mobx.js.org"},
]

// Alternative with image sources
const imageLogos = [
    {
        src: "/logos/company1.png",
        alt: "Company 1",
        href: "https://company1.com",
    },
    {
        src: "/logos/company2.png",
        alt: "Company 2",
        href: "https://company2.com",
    },
    {
        src: "/logos/company3.png",
        alt: "Company 3",
        href: "https://company3.com",
    },
]

function Footer() {
    return (
        <div className='pb-4'>
            <LogoLoop
                logos={frontendFrameworks}
                speed={120}
                direction='left'
                logoHeight={60}
                gap={40}
                pauseOnHover={false}
                scaleOnHover
                fadeOut
                fadeOutColor='#ffffff'
                ariaLabel='Technology partners'
            />
        </div>
    )
}

export default Footer
