"use client";

import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { FaCode, FaServer, FaShieldAlt, FaCloud, FaRocket } from 'react-icons/fa';

interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <FaCode className="text-2xl" />,
    skills: [
      { name: 'Next.js', level: 95, description: "Server-side rendering, API routes, and static site generation" },
      { name: 'React', level: 95, description: "Component architecture, hooks, and state management" },
      { name: 'TypeScript', level: 95, description: "Type-safe development and enhanced IDE support" },
    ]
  },
  {
    name: "Backend",
    icon: <FaServer className="text-2xl" />,
    skills: [
      { name: 'Python', level: 95, description: "API development, automation, and data processing" },
      { name: 'Node.js', level: 80, description: "Server-side JavaScript and API development" },
      { name: 'API Design', level: 90, description: "RESTful API architecture and implementation" },
      { name: 'SQL', level: 85, description: "Database design and query optimization" },
      { name: 'Supabase', level: 85, description: "Backend as a Service, real-time subscriptions, and authentication" },
      { name: 'Unit Testing', level: 85, description: "Test-driven development, Jest, Pytest, and test coverage optimization" },
    ]
  },
  {
    name: "Security",
    icon: <FaShieldAlt className="text-2xl" />,
    skills: [
      { name: 'Okta', level: 85, description: "Identity and access management implementation" },
    ]
  },
  {
    name: "Cloud",
    icon: <FaCloud className="text-2xl" />,
    skills: [
      { name: 'AWS', level: 85, description: "Cloud infrastructure, serverless computing, and DevOps" },
    ]
  },
  {
    name: "CI/CD",
    icon: <FaRocket className="text-2xl" />,
    skills: [
      { name: 'GitHub Actions', level: 90, description: "Automated workflows, testing, and deployment pipelines" },
      { name: 'Drone', level: 85, description: "Container-native continuous delivery platform" },
    ]
  }
];

interface SkillsProps {
  className?: string;
}

const Skills: FC<SkillsProps> = ({ className }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(skillCategories[0].name);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className={`py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Skills</h2>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          {skillCategories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all
                ${selectedCategory === category.name 
                  ? 'bg-primary text-white shadow-lg' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {skillCategories
            .find(cat => cat.name === selectedCategory)
            ?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative"
              >
                <div className="bg-white rounded-lg shadow-md p-6 border-2 border-primary/20 hover:border-primary transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg text-gray-800">{skill.name}</h3>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>

                  {/* Description Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredSkill === skill.name ? 1 : 0,
                      y: hoveredSkill === skill.name ? 0 : 10 
                    }}
                    className="absolute left-0 right-0 top-full mt-2 p-4 bg-gray-800 text-white text-sm rounded-lg shadow-xl z-10"
                  >
                    {skill.description}
                  </motion.div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
