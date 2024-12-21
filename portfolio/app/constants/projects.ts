import { Project } from "../components/page-components/Portfolio";

export const projects: Project[] = [
    {
        id: "turbowrapped",
        title: "TurboWrapped",
        description: "A dynamic Spotify analytics platform that provides real-time insights into users' listening habits, offering a more comprehensive alternative to Spotify's annual wrapped feature.",
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
    }
];