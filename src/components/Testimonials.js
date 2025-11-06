import React from 'react';
import { Star, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Sargas delivered an exceptional AI-powered solution that transformed our business operations. The 12-week timeline was met perfectly, and the quality exceeded our expectations.",
      rating: 5,
      avatar: "/images/avatar1.jpg"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCorp",
      content: "The team's expertise in modern technologies and AI integration is outstanding. They built us a scalable platform that has driven significant growth.",
      rating: 5,
      avatar: "/images/avatar2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, DigitalFlow",
      content: "Professional, reliable, and innovative. Sargas turned our vision into reality with a beautiful, functional application that our users love.",
      rating: 5,
      avatar: "/images/avatar3.jpg"
    }
  ];

  return (
    <section className="bg-gradient-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <div className="font-semibold text-brand-dark">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;