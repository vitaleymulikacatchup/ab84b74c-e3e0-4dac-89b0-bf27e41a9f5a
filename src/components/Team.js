import React from 'react';
import { User, Linkedin, Github } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "Lead Developer",
      bio: "Full-stack developer with 8+ years of experience in AI and modern web technologies.",
      avatar: "/images/team1.jpg",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Maria Garcia",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user-centered design and innovative digital experiences.",
      avatar: "/images/team2.jpg",
      linkedin: "#",
      github: "#"
    },
    {
      name: "David Kim",
      role: "AI Specialist",
      bio: "Machine learning engineer specializing in AI integration and automation solutions.",
      avatar: "/images/team3.jpg",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Sophie Wilson",
      role: "Project Manager",
      bio: "Experienced PM ensuring smooth project delivery and client satisfaction.",
      avatar: "/images/team4.jpg",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Sargas Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals behind our innovative solutions and exceptional client experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <User className="w-16 h-16 text-gray-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-brand-dark mb-2">
                {member.name}
              </h3>
              
              <p className="text-brand-blue font-medium mb-3">
                {member.role}
              </p>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>
              
              <div className="flex justify-center space-x-3">
                <a 
                  href={member.linkedin} 
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-gray-600" />
                </a>
                <a 
                  href={member.github} 
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <Github className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;