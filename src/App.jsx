import React, { useState, useEffect } from 'react';

const ChaosAILanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredSolution, setHoveredSolution] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      id: 1,
      title: 'Cross-Department Data Integration',
      description: 'Break down data silos and enable seamless information flow between government departments with AI-powered integration.',
      icon: '🔗',
      benefits: ['Real-time data sync', 'Unified dashboards', 'No manual data entry']
    },
    {
      id: 2,
      title: 'Intelligent Workflow Automation',
      description: 'Automate repetitive government processes with AI, reducing manual work and accelerating service delivery.',
      icon: '⚡',
      benefits: ['40-60% process time reduction', 'Fewer errors', 'Increased capacity']
    },
    {
      id: 3,
      title: 'Smart Decision Support',
      description: 'Empower government officials with AI-driven insights and recommendations for better decision-making.',
      icon: '🎯',
      benefits: ['Data-driven decisions', 'Risk assessment', 'Predictive analytics']
    },
    {
      id: 4,
      title: 'Citizen Services Enhancement',
      description: 'Deliver faster, more accurate services to citizens through AI-enhanced government portals and processes.',
      icon: '👥',
      benefits: ['Faster processing', 'Better accuracy', 'Higher satisfaction']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            CHAOS AI Labs
          </div>
          <a
            href="mailto:contact@chaosailabs.com"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-semibold transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: 0.5
            }}
          />
          <div
            className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            style={{
              transform: `translateY(-${scrollY * 0.3}px)`,
              opacity: 0.5
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span
              className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20"
              style={{
                animation: 'fadeInDown 0.8s ease-out'
              }}
            >
              Government Digital Transformation
            </span>
          </div>

          <h1
            className="text-6xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.2s backwards'
            }}
          >
            Automate Government Workflows with AI
          </h1>

          <p
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.4s backwards'
            }}
          >
            Connect your departments, streamline processes, and deliver better services faster. Chaos AI Labs breaks down silos and empowers government agencies with intelligent automation.
          </p>

          {/* Animated workflow diagram */}
          <div className="mb-12">
            <div className="relative h-48 md:h-64 flex items-center justify-center">
              <svg
                viewBox="0 0 800 300"
                className="w-full max-w-2xl h-auto"
                style={{ filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))' }}
              >
                {/* Connecting lines with animation */}
                <defs>
                  <style>{`
                    @keyframes drawLine {
                      from { stroke-dashoffset: 200; }
                      to { stroke-dashoffset: 0; }
                    }
                    @keyframes pulse {
                      0%, 100% { opacity: 1; }
                      50% { opacity: 0.5; }
                    }
                    .animated-line {
                      stroke-dasharray: 200;
                      animation: drawLine 2s ease-out forwards;
                    }
                    .pulse-dot {
                      animation: pulse 2s ease-in-out infinite;
                    }
                  `}</style>
                </defs>

                {/* Departments */}
                <circle cx="120" cy="150" r="45" fill="url(#grad1)" opacity="0.9" />
                <text x="120" y="155" textAnchor="middle" className="text-xs font-bold" fill="white" dy="0">
                  Finance
                </text>

                <circle cx="400" cy="80" r="45" fill="url(#grad2)" opacity="0.9" />
                <text x="400" y="85" textAnchor="middle" className="text-xs font-bold" fill="white" dy="0">
                  Health
                </text>

                <circle cx="680" cy="150" r="45" fill="url(#grad3)" opacity="0.9" />
                <text x="680" y="155" textAnchor="middle" className="text-xs font-bold" fill="white" dy="0">
                  Education
                </text>

                <circle cx="400" cy="220" r="45" fill="url(#grad4)" opacity="0.9" />
                <text x="400" y="225" textAnchor="middle" className="text-xs font-bold" fill="white" dy="0">
                  Services
                </text>

                {/* Central AI core */}
                <circle cx="400" cy="150" r="35" fill="url(#grad-core)" opacity="0.95" className="pulse-dot" />
                <text x="400" y="157" textAnchor="middle" className="text-xs font-bold" fill="white" dy="0">
                  AI CORE
                </text>

                {/* Connecting lines */}
                <line x1="165" y1="150" x2="365" y2="150" stroke="#3b82f6" strokeWidth="2" className="animated-line" />
                <line x1="400" y1="125" x2="400" y2="115" stroke="#06b6d4" strokeWidth="2" className="animated-line" style={{ animationDelay: '0.3s' }} />
                <line x1="435" y1="150" x2="635" y2="150" stroke="#3b82f6" strokeWidth="2" className="animated-line" style={{ animationDelay: '0.6s' }} />
                <line x1="400" y1="185" x2="400" y2="175" stroke="#06b6d4" strokeWidth="2" className="animated-line" style={{ animationDelay: '0.9s' }} />

                {/* Gradient definitions */}
                <defs>
                  <radialGradient id="grad1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#0c4a6e" />
                  </radialGradient>
                  <radialGradient id="grad2">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#0c4a6e" />
                  </radialGradient>
                  <radialGradient id="grad3">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#0c4a6e" />
                  </radialGradient>
                  <radialGradient id="grad4">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#0c4a6e" />
                  </radialGradient>
                  <radialGradient id="grad-core">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              animation: 'fadeInUp 0.8s ease-out 0.6s backwards'
            }}
          >
            <a
              href="mailto:contact@chaosailabs.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Request Demo
            </a>
            <a
              href="#solutions"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Our Core Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Purpose-built AI solutions designed specifically for government agencies to solve real operational challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div
                key={solution.id}
                className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredSolution(solution.id)}
                onMouseLeave={() => setHoveredSolution(null)}
              >
                {/* Glow effect on hover */}
                {hoveredSolution === solution.id && (
                  <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-xl pointer-events-none" />
                )}

                <div className="relative z-10">
                  <div className="text-5xl mb-4">{solution.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-slate-400 text-lg mb-6">{solution.description}</p>

                  <div className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-slate-300">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-blue-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Government Agency?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join leading government departments already automating workflows and delivering better services with AI.
          </p>
          <a
            href="mailto:contact@chaosailabs.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700/30 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Chaos AI Labs. Transforming government through AI automation.</p>
          <p className="text-sm mt-2">contact@chaosailabs.com</p>
        </div>
      </footer>

      {/* Global animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default ChaosAILanding;
