'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaTractor, FaCar } from 'react-icons/fa';

interface ExperienceProps {
  className?: string;
}

interface Experience {
  company: string;
  positions: {
    title: string;
    type: string;
    duration: string;
    achievements: string[];
  }[];
  location: string;
  icon: React.ReactNode;
  brandColor: string;
}

const Experience = ({ className }: ExperienceProps) => {
  const experiences: Experience[] = [
    {
      company: "John Deere",
      positions: [
        {
          title: "Software Engineer II",
          type: "Full-time",
          duration: "Jun 2024 - Present",
          achievements: [
            "Integrated SpyCloud, a 3rd party password checker, into the change/forgot password workflow which will prevent employees from changing their password to one that has been compromised on the internet. Directly prevents ~70,000 employees from having compromised passwords.",
            "Developed Python Automation to automatically create Okta Applications, Scopes, and Policies on Authorization Servers reducing manual tickets by ~30%"
          ]
        },
        {
          title: "Software Engineer",
          type: "Full-time",
          duration: "Jun 2023 - Jun 2024",
          achievements: [
            "Engineered an API which retrieves vulnerabilities from various security tools (Secrets, SAST, SAAS, and IAC), normalized them based on severity, and displayed them on a React Frontend. This helped developers prioritize vulnerabilities and increase the security scores of Deere repositories by 30%",
            "Developed internal tool which enables developers to add descriptive yaml files that ties repositories to their respective business products. Allows teams at Deere to retrieve granular security information on 26000+ repos.",
            "Constructed a Python wrapper for DeereAI, an internal LLM wrapping ChatGPT, which lowered time to delivery for AI projects at Deere saving developers an average of 2+ hours on DeereAI related python projects."
          ]
        },
        {
          title: "Software Engineer Intern",
          type: "Internship",
          duration: "Oct 2022 - Jun 2023",
          achievements: [
            "Built Python Automation to integrate and enhance various scanning tools such as BridgeCrew, Mend, Veracode, etc.",
            "Created automated unit and behavioral testing into numerous repositories using PyTest to reach 100% coverage",
            "Authored version updates and enhancements to an inhouse API wrapper for Github decreasing issues generated by 30%"
          ]
        }
      ],
      location: "Austin, Texas Metropolitan Area",
      icon: <FaTractor className="text-4xl" />,
      brandColor: "#367C2B"
    },
    {
      company: "Toyota Connected North America",
      positions: [
        {
          title: "Software Engineer Intern",
          type: "Internship",
          duration: "May 2022 - Aug 2022",
          achievements: [
            "Engineered Django Web Application which gave developers access to resources such as AWS, Gitlab, Vault, and Loft",
            "Reduced wait and setup times from 3+ days to 30 minutes or less",
            "Introduced a Gitlab Templating feature for repository creation which saved 1 hour on every creation"
          ]
        }
      ],
      location: "Plano, Texas, United States",
      icon: <FaCar className="text-4xl" />,
      brandColor: "#EB0A1E"
    }
  ];

  return (
    <section className={`py-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-2 shadow-sm"
                     style={{ backgroundColor: `${exp.brandColor}15` }}>
                  <div style={{ color: exp.brandColor }}>
                    {exp.icon}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.company}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt style={{ color: exp.brandColor }} />
                      {exp.location}
                    </span>
                  </div>

                  <div className="space-y-6">
                    {exp.positions.map((position, posIndex) => (
                      <motion.div
                        key={`${position.title}-${posIndex}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: posIndex * 0.1 }}
                        className="pl-4"
                        style={{ borderLeftColor: exp.brandColor, borderLeftWidth: '4px' }}
                      >
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <FaBriefcase style={{ color: exp.brandColor }} />
                          <h4 className="text-lg font-semibold text-gray-800">{position.title}</h4>
                          <span className="text-sm text-gray-500">({position.type})</span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                          <FaCalendar style={{ color: exp.brandColor }} />
                          {position.duration}
                        </div>

                        <ul className="space-y-2 mb-4">
                          {position.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-600">
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
