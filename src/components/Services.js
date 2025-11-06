import React from 'react';
import { Globe, Package } from 'lucide-react';

const Services = () => {
  return (
    <section className="bg-gradient-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Explore our services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Web Development */}
          <div className="service-card text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                {/* Web Development Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-12 h-12 text-brand-blue" />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 right-0 w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              Web Development
            </h3>
            <p className="text-gray-600 mb-6">
              Modern, responsive websites built with cutting-edge technologies and AI-powered solutions.
            </p>
            <button className="text-brand-blue font-medium hover:underline">
              Learn More →
            </button>
          </div>

          {/* Mobile Development */}
          <div className="service-card text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                {/* Mobile Development Illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-28 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-20 bg-white rounded-md" />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-4 left-4 w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
                <div className="absolute bottom-4 right-4 w-5 h-5 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 left-0 w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              Mobile Development
            </h3>
            <p className="text-gray-600 mb-6">
              Native and cross-platform mobile applications that deliver exceptional user experiences.
            </p>
            <button className="text-brand-blue font-medium hover:underline">
              Learn More →
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              Get the same high-quality service for a smaller task
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you need a quick fix, a feature addition, or ongoing maintenance, we're here to help with projects of any size.
            </p>
            <button className="btn-primary">
              Start Small Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;