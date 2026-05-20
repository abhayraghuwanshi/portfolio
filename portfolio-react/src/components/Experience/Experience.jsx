


const Experience = () => {
  const experiences = [
    {
      period: "July 2021 - Present",
      title: "Software Developer",
      company: "Societe Generale",
      location: "Bangalore, India",
      description: "Building and maintaining enterprise-grade microservices for corporate banking operations, handling 900+ workflows/minute with event-driven architecture.",
      achievements: [
        "Architected and deployed 10+ microservices using Spring Boot and Temporal workflow engine",
        "Optimized database queries reducing response time by 40% for critical banking operations",
        "Implemented CI/CD pipelines achieving zero-downtime deployments on Azure",
        "Led migration of monolithic services to event-driven architecture using RabbitMQ",
        "Mentored 5 junior developers in microservices best practices and design patterns"
      ],
      technologies: ["Spring Boot", "Temporal", "Azure", "RabbitMQ", "PostgreSQL", "Docker", "Jenkins"]
    },
    {
      period: "Jan 2021 - June 2021",
      title: "Software Development Intern",
      company: "Societe Generale",
      location: "Bangalore, India",
      description: "Contributed to the development of banking workflow automation systems and gained hands-on experience with enterprise Java development.",
      achievements: [
        "Developed REST APIs for account management features serving 1000+ daily users",
        "Implemented automated testing suites increasing code coverage to 85%",
        "Collaborated with cross-functional teams in Agile sprints",
        "Participated in code reviews and technical design discussions"
      ],
      technologies: ["Java", "Spring Framework", "PostgreSQL", "Git", "Maven"]
    },
    {
      period: "2017 - 2021",
      title: "B.Tech in Metallurgical & Materials Engineering",
      company: "IIT Roorkee",
      location: "Roorkee, India",
      description: "Graduated from one of India's premier engineering institutes with strong foundation in problem-solving and analytical thinking.",
      achievements: [
        "Completed coursework in Data Structures, Algorithms, and Database Management",
        "Led technical team in college fest managing 500+ participants",
        "Published research paper on materials characterization techniques",
        "Active member of coding club and participated in multiple hackathons"
      ],
      technologies: ["C++", "Python", "MATLAB", "Research & Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Experience
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-full" />
          </h2>
          <p className="text-gray-400 mt-8">My professional journey</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-dark to-transparent -translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-8 items-start ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-5 h-5 rounded-full bg-accent shadow-[0_0_20px_rgba(255,193,7,0.5)] border-4 border-dark-bg z-10" />

                {/* Content - Alternating sides */}
                <div className={index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:col-start-2'}>
                  {index % 2 === 0 && <div className="hidden md:block" />}

                  <div className="card card-hover group h-full">
                    {/* Period Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4 ${index % 2 === 0 ? 'md:float-right' : ''
                      }`}>
                      <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-accent text-sm font-semibold">{exp.period}</span>
                    </div>

                    {/* Title & Company */}
                    <div className="mb-4 clear-both">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-300 mb-1">
                        <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className="flex items-start gap-3 p-3 bg-dark-bg/30 rounded-lg hover:bg-accent/5 hover:translate-x-1 transition-all duration-300"
                        >
                          <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-dark-bg/50 border border-dark-border rounded-full text-accent text-xs font-semibold hover:bg-accent hover:text-dark-bg transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                {index % 2 !== 0 && <div className="hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
