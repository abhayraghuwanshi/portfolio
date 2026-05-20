

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 90 },
        { name: 'Python', level: 80 },
        { name: 'React.js', level: 75 },
        { name: 'FastAPI', level: 70 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Azure', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Jenkins', level: 85 },
      ],
    },
    {
      title: 'Databases & Tools',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'Redis', level: 85 },
        { name: 'RabbitMQ', level: 80 },
        { name: 'Elasticsearch', level: 75 },
        { name: 'Grafana', level: 80 },
      ],
    },
    {
      title: 'Architecture & Design',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      skills: [
        { name: 'Microservices', level: 95 },
        { name: 'System Design', level: 90 },
        { name: 'REST APIs', level: 95 },
        { name: 'Event-Driven', level: 85 },
        { name: 'CI/CD', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 px-4 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 relative inline-block">
            Technical Skills
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-full" />
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">Technologies and tools I'm proficient with</p>
        </div>

        {/* Skills Grid - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark-bg-light p-6 rounded-xl border border-gray-800 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2.5 bg-accent/10 rounded-lg text-accent">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-gray-300 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-dark-bg/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent-dark rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
