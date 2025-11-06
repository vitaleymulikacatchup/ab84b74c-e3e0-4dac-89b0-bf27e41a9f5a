import React from 'react';
import { ExternalLink, TrendingUp, Users, Award } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Case Studies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence with innovative solutions.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-12 text-white">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-4">Dios</h3>
                <p className="text-blue-100 mb-6">
                  A comprehensive digital transformation project that revolutionized the client's business operations through AI-powered automation and modern web technologies.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold mb-1">$2.5M</div>
                  <div className="text-blue-100 text-sm">Revenue Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">150%</div>
                  <div className="text-blue-100 text-sm">User Growth</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">AI/ML</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Cloud</span>
              </div>

              <button className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                <span>View Case Study</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="p-12 flex items-center justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-md">
                {/* Dashboard mockup */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-800">Analytics Dashboard</h4>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-12 h-12 text-blue-500" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <Users className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Users</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <Award className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Goals</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <TrendingUp className="w-5 h-5 text-gray-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Growth</div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-medium">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;