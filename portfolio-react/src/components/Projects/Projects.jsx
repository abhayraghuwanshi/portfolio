


const Projects = () => {
  const projects = [
    {
      title: 'Dropquest',
      description:
        'Community-powered C2C delivery platform connecting users with travelers for personalized parcel delivery services. Full-stack marketplace with real-time features.',
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      tags: ['React.js', 'Spring Boot', 'PostgreSQL', 'Redis', 'OAuth2', 'JWT'],
      highlights: [
        'Real-time communication',
        'Role-based dashboards',
        'Location-based services',
      ],
      github: 'https://github.com/abhayraghuwanshi',
      demo: '#',
    },
    {
      title: 'AI Movie Script Generator',
      description:
        'AI-powered collaborative movie script generation platform with agent-based dialogue, interactive timeline editor, and real-time voice meeting integration.',
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
        </svg>
      ),
      tags: ['React', 'FastAPI', 'Python', 'WebSocket', 'Material-UI', 'AI Agents'],
      highlights: [
        'AI-driven script generation',
        'Real-time collaboration',
        'Voice meeting integration',
      ],
      github: 'https://github.com/abhayraghuwanshi',
      demo: '#',
    },
    {
      title: 'Hinge Genie',
      description:
        'Automated dating assistant using Android emulator commands and XML UI parsing to auto-swipe on Hinge, with AI-powered response generation for intelligent automatic messaging.',
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      tags: ['Python', 'AI/LLM', 'Android Emulator', 'XML Parsing', 'Automation', 'ADB'],
      highlights: [
        'Automated swiping via emulator',
        'AI-powered response generation',
        'XML-based UI interaction',
      ],
      github: 'https://github.com/abhayraghuwanshi',
      demo: '#',
    },
    {
      title: 'CoolDesk',
      description:
        'Modern tab manager for Chromium-based browsers with intelligent workspace organization, session management, and productivity-enhancing features for power users.',
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      tags: ['JavaScript', 'Chrome Extension', 'TypeScript', 'Web APIs', 'Storage APIs'],
      highlights: [
        'Workspace organization',
        'Session persistence',
        'Tab grouping automation',
      ],
      github: 'https://github.com/abhayraghuwanshi',
      demo: '#',
    },
    {
      title: 'K8s Diagram',
      description:
        'Kubernetes ingress configuration generator with visual diagram builder, YAML generation, and deployment validation for cloud-native applications.',
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      tags: ['Kubernetes', 'Ingress', 'YAML', 'Go', 'Docker', 'Cloud Native'],
      highlights: [
        'Visual diagram builder',
        'Auto YAML generation',
        'Deployment validation',
      ],
      github: 'https://github.com/abhayraghuwanshi',
      demo: '#',
    },
    {
      title: 'Spotify to YouTube Converter',
      description:
        'Automated playlist converter that transfers Spotify playlists to YouTube with intelligent song matching, metadata preservation, and batch processing capabilities.',
      icon: (
        <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
      tags: ['Python', 'Spotify API', 'YouTube API', 'Web Scraping', 'Data Matching'],
      highlights: [
        'Smart song matching',
        'Metadata preservation',
        'Batch conversion',
      ],
      github: 'https://github.com/abhayraghuwanshi',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-dark-bg to-dark-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
            Featured Projects
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-accent to-accent-dark rounded-full" />
          </h2>
          <p className="text-gray-400 mt-8">Showcasing my best work and technical expertise</p>
        </div>

        {/* Projects Grid - Pinterest Style Masonry */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-dark-card border border-dark-border rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
            >
              {/* Project Image Placeholder */}
              <div className={`relative ${index % 3 === 0 ? 'h-72' : index % 3 === 1 ? 'h-64' : 'h-80'} bg-gradient-to-br from-accent/10 via-dark-card to-dark-bg overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,193,7,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,152,0,0.1),transparent_50%)]" />
                <div className="flex items-center justify-center h-full text-accent/40 relative z-10">
                  {project.icon}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/95 to-accent-dark/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 flex items-center justify-center bg-white rounded-full text-dark-bg hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 flex items-center justify-center bg-white rounded-full text-dark-bg hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <div className="w-14 h-14 flex items-center justify-center bg-white/30 rounded-full text-black/30">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-dark-bg/50 border border-dark-border rounded-full text-accent text-xs font-semibold hover:bg-accent hover:text-dark-bg hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,193,7,0.2)] transition-all duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 bg-dark-bg/30 border border-dark-border rounded-full text-gray-400 text-xs font-semibold">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {project.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className="flex items-center gap-2 p-2 bg-accent/5 rounded-lg hover:bg-accent/10 hover:translate-x-0.5 transition-all duration-300"
                    >
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-xs">{highlight}</span>
                    </div>
                  ))}
                  {project.highlights.length > 2 && (
                    <div className="text-center text-gray-500 text-xs">
                      +{project.highlights.length - 2} more features
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
