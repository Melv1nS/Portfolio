import { Project } from "../components/page-components/Portfolio";

export const projects: Project[] = [
    {
        id: "turbowrapped",
        title: "TurboWrapped",
        description: "A dynamic Spotify analytics platform that provides real-time insights into users' listening habits, offering a more comprehensive alternative to Spotify's annual wrapped feature. I'm waiting on approval from Spotify to release TurboWrapped to production. If you want to play around with the tool send me an email and I'll add you to the testing group!",
        imageUrl: "/assets/img/portfolio/turbowrapped.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma ORM",
            "Supabase",
            "Vercel",
            "GitHub Actions",
            "Spotify Web API",
            "MusicBrainz API",
        ],
        link: "https://turbowrapped.com",
        github: "https://github.com/Melv1nS/TurboWrapped",
    },
    {
        id: "cost-of-ai",
        title: "Cost of AI",
        description: "A tool that helps you understand the energy and water cost of sending a specific prompt to an AI service.",
        imageUrl: "/assets/img/portfolio/cost-of-ai.png",
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Vercel",
        ],
        link: "https://cost-of-ai.vercel.app/",
        github: "https://github.com/Melv1nS/CostOfAI",
    },
    {
        id: "domain-valid",
        title: "Domain Valid",
        description: "A tool that uses Claude 3.5 to generate a list of domain names based on a project description and then checks if they are available.",
        imageUrl: "/assets/img/portfolio/domain-valid.png",
        technologies: ["Claude 3.5", "Rapid API", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        link: "https://domainvalid.vercel.app/",
        github: "https://github.com/Melv1nS/domainvalid",
    }
];
