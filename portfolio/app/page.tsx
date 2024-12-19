import Image from 'next/image'
import Portfolio from './components/PageComponents/Portfolio'
import About from './components/PageComponents/About'
import Contact from './components/PageComponents/Contact'
import Skills from './components/PageComponents/Skills'
import Education from './components/PageComponents/Education'
import Experience from './components/PageComponents/Experience'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <header className="min-h-screen relative bg-gradient-to-br from-primary-dark to-primary text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <Image
            className="rounded-full border-4 border-white shadow-xl mx-auto mb-8 animate-float"
            src="/assets/img/profilePic.png"
            alt="Profile Picture"
            width={240}
            height={240}
            priority
          />
          <h1 className="text-5xl font-bold font-montserrat mb-4">
            Melvin Sureshbabu
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-20 h-0.5 bg-accent"></div>
            <div className="text-accent">
              <i className="fas fa-code text-xl"></i>
            </div>
            <div className="w-20 h-0.5 bg-accent"></div>
          </div>
          
          <p className="text-xl font-lato text-gray-100 mb-8">
            Software Engineer
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/Melv1nS" 
               target="_blank"
               rel="noopener noreferrer"
               className="text-white hover:text-accent transition-colors duration-300">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/melvin-sureshbabu/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-white hover:text-accent transition-colors duration-300">
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </header>
      
      <About 
        className="bg-gray-50"
      />
      <Portfolio 
        title="Featured Projects" 
        className="bg-white"
      />
      <Experience 
        className="bg-gray-50"
      />
      <Education 
        className="bg-white"
      />
      <Skills 
        className="bg-gray-50"
      />
      <Contact 
        className="bg-white"
      />
    </>
  )
}