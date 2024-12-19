"use client";

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

// Define the project type
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link: string;
  github?: string;
}

const projects = [
  {
    id: "turbowrapped",
    title: "Turbowrapped",
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
  }
];

export default function Portfolio({ title = "My Portfolio", className }: { title?: string, className?: string }) {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        {title}
      </motion.h1>
      
      <div className={`grid gap-8 ${
        projects.length === 1 
          ? 'grid-cols-1 max-w-4xl mx-auto' 
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      }`}>
        {projects?.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Project Image with Overlay */}
            <div className="relative h-64 sm:h-72 lg:h-80">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Content */}
            <div className="relative p-6 bg-primary-light">
              <h2 className="text-2xl font-semibold mb-3 text-white">{project.title}</h2>
              <p className="text-gray-200 mb-6 line-clamp-3">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary px-3 py-1 rounded-full text-sm text-gray-200 hover:bg-primary-dark transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex justify-end space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors"
                >
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}