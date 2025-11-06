import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  const techStack = [
    { name: 'NestJS', color: 'text-red-500', icon: '🔴' },
    { name: 'MySQL', color: 'text-blue-500', icon: '🔵' },
    { name: 'MongoDB', color: 'text-green-500', icon: '🟢' },
    { name: 'Nginx', color: 'text-green-600', icon: '🟢' },
    { name: 'Redis', color: 'text-red-600', icon: '🔴' },
    { name: 'TypeScript', color: 'text-blue-600', icon: '🔷' }
  ];

  return (
    <section className="bg-gradient-secondary min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-brand-blue">AI-powered</span>
                <br />
                <span className="text-brand-dark">web and mobile</span>
                <br />
                <span className="text-brand-blue">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-3">
                <span className="text-gray-600">Powered by</span>
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  </div>
                  <span className="font-semibold text-gray-800">n8n</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start Discovery
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Portfolio Showcase</span>
              </button>
            </div>

            {/* Contact Options */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">T</span>
                </div>
                <span className="text-sm text-gray-600">Telegram</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">W</span>
                </div>
                <span className="text-sm text-gray-600">WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Brain */}
          <div className="relative flex justify-center">
            <div className="w-96 h-96 relative">
              {/* 3D Brain Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 relative">
                  {/* Brain rings */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute border-4 border-gray-300 rounded-full floating-element`}
                      style={{
                        width: `${60 + i * 20}px`,
                        height: `${60 + i * 20}px`,
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                        animationDelay: `${i * 0.2}s`,
                        opacity: 0.6 - i * 0.05
                      }}
                    />
                  ))}
                  
                  {/* Central brain core */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-brand-blue to-purple-600 rounded-full animate-pulse-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <p className="text-gray-600">We use only modern technologies</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-badge">
                <span className={`text-lg ${tech.color}`}>{tech.icon}</span>
                <span>#{tech.name.toLowerCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;