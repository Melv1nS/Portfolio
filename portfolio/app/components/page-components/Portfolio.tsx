"use client";
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'
import { projects } from '../../constants/projects';
import { useState } from 'react';

export default function Portfolio({ title = "My Portfolio", className }: { title?: string, className?: string }) {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
            onClick={() => setSelectedProject(project)}
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
          >
            {/* Project Image with Overlay */}
            <div className="relative h-64 sm:h-72 lg:h-80">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Content */}
            <div className="relative p-6 bg-primary-light flex-1 flex flex-col">
              <h2 className="text-2xl font-semibold mb-3 text-white">{project.title}</h2>
              <p className="text-gray-200 mb-6 line-clamp-3">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent/90 px-3 py-1 rounded-full text-sm text-white hover:bg-accent transition-colors"
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

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative h-96">
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6">{selectedProject.description}</p>
              
              {/* Technologies in modal */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-accent/90 px-3 py-1 rounded-full text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <FaGithub size={20} />
                    View Source
                  </a>
                )}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  <FaExternalLinkAlt size={16} />
                  Visit Project
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}