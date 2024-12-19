'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

interface AboutProps {
  className?: string;
}

const About = ({ className }: AboutProps) => {
  
  const highlights = [
    {
      icon: <FaLaptopCode className="text-primary text-xl" />,
      title: "Software Engineer",
      detail: "@ John Deere"
    },
    {
      icon: <FaGraduationCap className="text-primary text-xl" />,
      title: "UT Austin",
      detail: "MIS, CS, & Entrepreneurship"
    },
    {
      icon: <FaCode className="text-primary text-xl" />,
      title: "Full Stack Developer",
      detail: ""
    }
  ];

  return (
    <section id="about" className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl -rotate-6"></div>
              <Image
                src="/assets/img/profilePic.png"
                alt="Melvin Sureshbabu"
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              About Me
            </h2>

            {/* Highlights Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-white shadow-sm"
                >
                  {item.icon}
                  <h3 className="font-semibold mt-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Hi, My name is Melvin Sureshbabu, I'm a Software Engineer @ John Deere currently based in Austin, TX. 
              I graduated from The University of Texas at Austin in Spring 23' with a major in Management Information 
              Systems and Minors in Computer Science and Entrepreneurship.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At UT I interned with Toyota Connected and John Deere in software engineering. I also worked for 
              multiple different startups and startup accelerators during my time on campus - I have a huge passion 
              for entrepreneurship and tech.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Outside of work I love playing piano, watching sports (Go Cowboys and Longhorns!), playing Valorant, 
              hitting the gym, attending music festivals, and trying new restaurants and cuisines!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
