'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaServer, FaTools, FaExternalLinkAlt } from 'react-icons/fa';
import { SiVercel, SiNextdotjs, SiTypescript, SiTailwindcss, SiResend } from 'react-icons/si';

interface TechStack {
  category: string;
  icon: JSX.Element;
  items: {
    name: string;
    description: string;
    icon: JSX.Element;
    link?: string;
  }[];
}

const techStacks: TechStack[] = [
  {
    category: "Frontend Framework",
    icon: <FaCode className="text-2xl" />,
    items: [
      {
        name: "Next.js 14",
        description: "React framework with server-side rendering and static site generation",
        icon: <SiNextdotjs className="text-2xl" />,
        link: "https://nextjs.org/"
      },
      {
        name: "TypeScript",
        description: "Strongly typed programming language that builds on JavaScript",
        icon: <SiTypescript className="text-2xl" />,
        link: "https://www.typescriptlang.org/"
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework for rapid UI development",
        icon: <SiTailwindcss className="text-2xl" />,
        link: "https://tailwindcss.com/"
      }
    ]
  },
  {
    category: "Version Control",
    icon: <FaGithub className="text-2xl" />,
    items: [
      {
        name: "GitHub",
        description: "Source code hosted in a public repository",
        icon: <FaGithub className="text-2xl" />,
        link: "https://github.com/Melv1nS/portfolio"
      }
    ]
  },
  {
    category: "Backend Services",
    icon: <FaServer className="text-2xl" />,
    items: [
      {
        name: "Resend",
        description: "Modern email API for reliable contact form delivery",
        icon: <SiResend className="text-2xl" />,
        link: "https://resend.com/"
      }
    ]
  },
  {
    category: "Hosting & Deployment",
    icon: <FaServer className="text-2xl" />,
    items: [
      {
        name: "Vercel",
        description: "Hosting platform with automatic deployments and serverless functions",
        icon: <SiVercel className="text-2xl" />,
        link: "https://vercel.com/"
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function PortfolioStack({ className }: { className?: string }) {
  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          How This Portfolio is Built
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.category}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {stack.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {stack.category}
                </h3>
              </div>

              <div className="space-y-6">
                {stack.items.map((item) => (
                  <motion.div 
                    key={item.name} 
                    className="space-y-2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark text-sm inline-flex items-center gap-1"
                      >
                        Learn more
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
