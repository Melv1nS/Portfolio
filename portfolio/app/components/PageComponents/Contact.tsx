'use client'
import React, { useState } from 'react';

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className={`py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 text-gray-800">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-lg mx-auto text-sm md:text-base">
          Have a question or want to work together? Let's connect!
        </p>
        
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none
                         transition-all duration-300 ease-in-out
                         focus:border-primary bg-white
                         placeholder-transparent"
                  placeholder="Your name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600
                         transition-all duration-300 ease-in-out
                         peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                         peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm
                         peer-focus:text-primary"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none
                         transition-all duration-300 ease-in-out
                         focus:border-primary bg-white
                         placeholder-transparent"
                  placeholder="your.email@example.com"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600
                         transition-all duration-300 ease-in-out
                         peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                         peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm
                         peer-focus:text-primary"
                >
                  Email
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="peer w-full px-4 py-3 border-2 border-gray-200 rounded-lg outline-none
                       transition-all duration-300 ease-in-out
                       focus:border-primary bg-white
                       placeholder-transparent resize-none"
                placeholder="Your message"
              />
              <label
                htmlFor="message"
                className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600
                       transition-all duration-300 ease-in-out
                       peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                       peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-sm
                       peer-focus:text-primary"
              >
                Message
              </label>
            </div>

            {status.message && (
              <div 
                className={`p-4 rounded-lg transform transition-all duration-300 ease-in-out
                           ${status.type === 'success' 
                             ? 'bg-green-50 text-green-700 border border-green-200' 
                             : 'bg-red-50 text-red-700 border border-red-200'
                           }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary-dark text-white 
                       py-4 px-6 rounded-lg font-medium text-base md:text-lg
                       transform transition-all duration-300 ease-in-out
                       hover:scale-[1.02] hover:shadow-lg
                       active:scale-[0.98]
                       disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
