'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';

interface EducationProps {
  className?: string;
}

const Education = ({ className }: EducationProps) => {
  const educationData = [
    {
      school: "Texas McCombs School of Business",
      degree: "Bachelor of Business Administration (BBA)",
      major: "Management Information Systems",
      duration: "2019 - 2023",
      details: [
        "Minor: Entrepreneurship",
        "Certificate: Computer Science"
      ],
      icon: <FaUniversity className="text-4xl" />,
      brandColor: "#BF5700" // UT Austin burnt orange
    },
    {
      school: "Corvinus University of Budapest",
      degree: "Bachelor of Business Administration (BBA)",
      duration: "Feb 2023 - Jun 2023",
      details: ["Study Abroad Program"],
      icon: <FaSchool className="text-4xl" />,
      brandColor: "#00529C" // Corvinus blue
    }
  ];

  return (
    <section className={`py-20 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Education</h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-6 items-start p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-lg p-2"
                   style={{ backgroundColor: `${edu.brandColor}15` }}>
                <div style={{ color: edu.brandColor }}>
                  {edu.icon}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <FaGraduationCap style={{ color: edu.brandColor }} />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {edu.school}
                  </h3>
                </div>
                
                <p className="font-medium mt-1" style={{ color: edu.brandColor }}>
                  {edu.degree}
                </p>
                {edu.major && (
                  <p className="text-gray-600">
                    {edu.major}
                  </p>
                )}
                <p className="text-gray-500 text-sm">
                  {edu.duration}
                </p>
                
                <ul className="mt-2 space-y-1">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-gray-600">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
