import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const ChaosAIGovernment = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    console.log('Sending:', contactForm);
    
    const response = await fetch('https://mmcoqm8397.execute-api.ap-south-2.amazonaws.com/Prod', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: contactForm.name,
        email: contactForm.email,
        message: contactForm.message
      })
    });

    console.log('Response status:', response.status);
    const text = await response.text();
    console.log('Response text:', text);
    
    const data = JSON.parse(text);
    console.log('Parsed data:', data);

    if (data.success) {
      alert('✅ Thank you! We will contact you soon.');
      setContactForm({ name: '', email: '', message: '' });
    } else {
      alert('❌ Error: ' + (data.error || 'Unknown error'));
    }
  } catch (error) {
    console.error('Error:', error);
    alert('❌ Error: ' + error.message);
  }
};

  return (
    <div className="w-full bg-white text-gray-900">
      {/* Header & Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-900">
                Chaos AI Labs
              </div>
              <div className="ml-2 text-xs text-gray-600 font-semibold">
                Government Solutions
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium text-sm">About</a>
              <a href="#solutions" className="text-gray-700 hover:text-blue-900 font-medium text-sm">Solutions</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-900 font-medium text-sm">How It Works</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 font-medium text-sm">Contact</a>
              <button className="bg-blue-900 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-blue-800 transition">
                Request Demo
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <a href="#about" className="block py-2 text-gray-700 hover:text-blue-900">About</a>
              <a href="#solutions" className="block py-2 text-gray-700 hover:text-blue-900">Solutions</a>
              <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-blue-900">How It Works</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-900">Contact</a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Government Operations with AI
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Integrate departments seamlessly. Automate workflows intelligently. Deliver services faster.
              Chaos AI Labs empowers government agencies with cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded font-bold hover:bg-blue-50 transition">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white/10 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About Chaos AI Labs</h2>
          <div className="h-1 w-24 bg-blue-900 mb-8"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We are dedicated to transforming government operations through intelligent automation and seamless integration. Our mission is to break down departmental silos, reduce administrative burden, and enable faster, more efficient public service delivery.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                With over a decade of experience in enterprise solutions, we understand the unique challenges government agencies face. Our AI-powered platform is purpose-built for the public sector.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Purpose-Built for Government</h4>
                    <p className="text-gray-600 text-sm">Designed specifically for public sector workflows and compliance requirements</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">Enterprise Security</h4>
                    <p className="text-gray-600 text-sm">ISO 27001 certified, meets all government data protection standards</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-900 font-bold text-xl">✓</span>
                  <div>
                    <h4 className="font-bold text-gray-900">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Dedicated support team available round-the-clock for government agencies</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Core Solutions</h2>
          <div className="h-1 w-24 bg-blue-900 mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Department Integration',
                description: 'Connect multiple government departments on a unified platform. Share data seamlessly while maintaining security and compliance.',
                points: ['Real-time data synchronization', 'Unified dashboards', 'Inter-departmental workflows']
              },
              {
                title: 'Workflow Automation',
                description: 'Automate repetitive administrative tasks with intelligent AI. Reduce processing time by 40-60% and improve accuracy.',
                points: ['Process automation', 'Error reduction', 'Staff capacity increase']
              },
              {
                title: 'Decision Support System',
                description: 'Provide officials with AI-driven insights and recommendations. Make data-backed decisions faster and more effectively.',
                points: ['Predictive analytics', 'Risk assessment', 'Performance metrics']
              },
              {
                title: 'Citizen Portal Enhancement',
                description: 'Deliver faster, more accurate services to citizens. Improve satisfaction and reduce service delivery time.',
                points: ['Fast processing', 'Higher accuracy', 'Better citizen experience']
              }
            ].map((solution, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 p-8 rounded-lg hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-blue-900 mb-3">{solution.title}</h3>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-900">•</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
          <div className="h-1 w-24 bg-blue-900 mb-12"></div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Assessment', desc: 'We analyze your current systems and workflows' },
              { step: '2', title: 'Integration', desc: 'Connect departments on our platform' },
              { step: '3', title: 'Automation', desc: 'Deploy AI to automate key processes' },
              { step: '4', title: 'Optimization', desc: 'Continuous monitoring and improvement' }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-lg p-6 text-center shadow-md">
                  <div className="text-5xl font-bold text-blue-900 mb-3">{item.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/4 -right-3 text-blue-900 text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Get in Touch</h2>
          <div className="h-1 w-24 bg-blue-900 mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Email</h4>
                  <p className="text-gray-700">dharmasetu@chaos.org.in</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-2">Availability</h4>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-4">
                <label className="block text-gray-900 font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-900 font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-900 font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-900"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white font-bold py-2 rounded hover:bg-blue-800 transition"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Resources</h2>
          <div className="h-1 w-24 bg-blue-900 mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Documentation', desc: 'Comprehensive guides and API documentation', link: '#' },
              { title: 'Case Studies', desc: 'Real-world examples of government transformation', link: '#' },
              { title: 'Blog', desc: 'Latest insights on government AI and automation', link: '#' }
            ].map((resource, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-900 transition cursor-pointer">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{resource.title}</h3>
                <p className="text-gray-700 mb-4">{resource.desc}</p>
                <a href={resource.link} className="text-blue-900 font-bold hover:underline">
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Chaos AI Labs</h4>
              <p className="text-blue-100 text-sm">Transforming government operations through intelligent automation.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="text-blue-100 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Department Integration</a></li>
                <li><a href="#" className="hover:text-white">Workflow Automation</a></li>
                <li><a href="#" className="hover:text-white">Decision Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="text-blue-100 text-sm space-y-2">
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="text-blue-100 text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center text-blue-100 text-sm">
            <p>&copy; 2024 Chaos AI Labs. All rights reserved.</p>
            <p className="mt-2">Transforming Government through Artificial Intelligence</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChaosAIGovernment;
