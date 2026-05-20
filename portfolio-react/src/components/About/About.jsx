

const About = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "IIT Roorkee Graduate",
      description: "Bachelor's in Metallurgical & Materials Engineering"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "3+ Years Experience",
      description: "Building enterprise solutions at Societe Generale"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Microservices Expert",
      description: "Architecting scalable, high-performance systems"
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Cloud Native",
      description: "AWS & Azure certified with production deployments"
    }
  ];

  const expertise = [
    "Full-stack microservices architecture",
    "Event-driven systems with RabbitMQ & Kafka",
    "Cloud deployment on AWS & Azure",
    "CI/CD pipelines with Jenkins & Docker",
    "High-performance database optimization",
    "Real-time applications with WebSocket"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            About Me
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-full" />
          </h2>
          <p className="text-gray-400 mt-8">Get to know me better</p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Highlights */}
          <div className="space-y-6">
            <div className="card card-hover">
              <h3 className="text-2xl font-bold text-white mb-6">Who I Am</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm a passionate Software Developer with a strong foundation in building scalable
                microservices and cloud-native applications. Currently working at Societe Generale,
                I've contributed to enterprise-grade banking systems handling high-volume transactions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey from IIT Roorkee to the tech industry has equipped me with both theoretical
                knowledge and practical expertise in modern software development practices, DevOps,
                and system architecture.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="card card-hover group"
                >
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Expertise */}
          <div className="space-y-6">
            <div className="card card-hover">
              <h3 className="text-2xl font-bold text-white mb-6">What I Do</h3>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-dark-bg/30 rounded-xl hover:bg-accent/5 hover:translate-x-2 transition-all duration-300"
                  >
                    <svg
                      className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card card-hover bg-gradient-to-br from-accent/10 to-transparent border-accent/30">
              <div className="flex items-start gap-4">
                <svg
                  className="w-8 h-8 text-accent flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <div>
                  <h4 className="text-white font-semibold mb-2">Always Learning</h4>
                  <p className="text-gray-400 text-sm">
                    Constantly exploring new technologies and best practices to deliver
                    cutting-edge solutions. Currently diving deep into AI/ML integration
                    with backend systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
