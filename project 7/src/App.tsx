import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Mail, Phone, ExternalLink, Users, Award, Zap, Cpu, Rocket } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'speakers', 'team', 'sponsors', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const speakers = [
    {
      name: "Sohini Shah"
    },
    {
      name: "Himanshi Rathi"
    },
    {
      name: "Nirav Shah"
    },
    {
      name: "Rohit Purohit"
    },
    {
      name: "Saumya Joshi"
    },
    {
      name: "Sudhir Naik"
    },
    {
      name: "Devang Nanavaty"
    },
    {
      name: "Radhika Bhandari"
    }
  ];

  const sponsors = [
    { name: "KK Jewels", logo: "KK", description: "Premium jewelry and luxury accessories" },
    { name: "Double Tree by Hilton", logo: "DT", description: "World-class hospitality and accommodation" },
    { name: "Sharma Hyundai", logo: "SH", description: "Leading automotive dealership and services" },
    { name: "Swelore Engineering Pvt Ltd", logo: "SE", description: "Innovative engineering solutions and technology" },
    { name: "Capital 8", logo: "C8", description: "Investment and financial services" },
    { name: "Savvy Group", logo: "SG", description: "Real estate development and construction" }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-red-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-red-600">TEDx</span>
              <span className="text-gray-900">AhmedabadIntSchool</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'speakers', 'team', 'sponsors', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 font-medium relative ${
                    activeSection === section 
                      ? 'text-red-600' 
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {section === 'team' ? 'Core Team' : section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-red-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {['home', 'about', 'speakers', 'team', 'sponsors', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 text-gray-700 hover:text-red-600 transition-colors font-medium"
                >
                  {section === 'team' ? 'Core Team' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 to-red-700">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 to-red-700/90"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border border-white/30 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rotate-12 animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-white/20 rounded-full animate-spin"></div>
          <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/20 transform rotate-45 animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
                <Zap className="text-white" size={16} />
                <span className="text-white font-medium">Official TEDx Event</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white">
              Future Frontiers
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4 text-white/90 font-light">
              TEDxAhmedabadIntSchool
            </h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Exploring the boundaries of innovation, technology, and human potential in the digital age
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2 text-white font-medium bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                <Calendar size={20} />
                <span>August 30, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-white font-medium bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                <MapPin size={20} />
                <span>JB Auditorium</span>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-red-600">
              About Future Frontiers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="text-red-600" size={32} />
                  <h3 className="text-2xl font-semibold text-red-600">What is TEDx?</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  TEDx events are independently organized TED-like conferences that bring together local voices to spark meaningful conversations and inspire action. Our event follows the same format and philosophy as TED, with live speakers, powerful ideas, and a passion for learning.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  TEDxAhmedabadIntSchool is an official TEDx event hosted by Ahmedabad International School, designed to showcase innovative ideas and inspire our community to think differently about the future.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="text-red-600" size={32} />
                  <h3 className="text-2xl font-semibold text-red-600">Future Frontiers Theme</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "Future Frontiers" explores the cutting edge of human innovation and discovery. From artificial intelligence to space exploration, from genetic engineering to quantum computing, we're examining the technologies and ideas that will shape tomorrow.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Join us as we push the boundaries of what's possible and discover how today's innovations will transform our world.
                </p>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <Users className="mx-auto mb-4 text-red-600" size={48} />
                <h4 className="text-xl font-semibold mb-2 text-red-600">Expert Speakers</h4>
                <p className="text-gray-700">Leading innovators and researchers sharing their groundbreaking work</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <Award className="mx-auto mb-4 text-red-600" size={48} />
                <h4 className="text-xl font-semibold mb-2 text-red-600">Official TEDx Event</h4>
                <p className="text-gray-700">Licensed by TED and following official TEDx guidelines</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <Zap className="mx-auto mb-4 text-red-600" size={48} />
                <h4 className="text-xl font-semibold mb-2 text-red-600">Innovation Focus</h4>
                <p className="text-gray-700">Exploring cutting-edge technologies and future possibilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-red-600">
            Featured Speakers
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div key={index} className="group bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                    {speaker.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-red-600 text-center">{speaker.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-red-600">
            Core Team
          </h2>
          
       <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                <img
                  src="/images/VS.jpeg"
                  alt="Vivaan Shodhan"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="bg-white rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                <img
                  src="/images/JA.jpeg"
                  alt="Vivaan Shodhan"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="bg-white rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                <img
                  src="/images/NS.jpeg"
                  alt="Vivaan Shodhan"
                  className="w-full h-96 object-cover"
                />
              </div>
              
               <div className="bg-white rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                <img
                  src="/images/DP.jpeg"
                  alt="Vivaan Shodhan"
                  className="w-full h-96 object-cover"
                />
              </div>
              
               <div className="bg-white rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                <img
                  src="/images/RP.jpeg"
                  alt="Vivaan Shodhan"
                  className="w-full h-96 object-cover"
                />
              </div>
              
               <div className="bg-white rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden">
                <img
                  src="/images/VN.jpg"
                  alt="Vivaan Shodhan"
                  className="w-full h-96 object-cover"
                />
              </div>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-red-600">
            Sponsors & Partners
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:border-red-300 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                    {sponsor.logo}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{sponsor.name}</h4>
                  <p className="text-gray-600 text-sm">{sponsor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-red-600">
            Get in Touch
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-red-600">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <Mail className="text-red-600" size={20} />
                  <span className="text-gray-700">tedx@ahmedabadintschool.edu</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <Phone className="text-red-600" size={20} />
                  <span className="text-gray-700">09327035107</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <MapPin className="text-red-600" size={20} />
                  <span className="text-gray-700">JB Auditorium<br />Ahmedabad, Gujarat 380009</span>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-4 text-red-600">Location</h4>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <p className="text-gray-900 mb-2 font-medium">JB Auditorium</p>
                <p className="text-gray-600 text-sm">
                  Located in the heart of Ahmedabad, easily accessible by public transport and with ample parking facilities.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-red-600">Send us a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Message subject"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-red-500 focus:outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-red-500">TEDx</span>
                <span className="text-white">AhmedabadIntSchool</span>
              </h3>
              <p className="text-gray-400 mb-4">
                An independently organized TED event exploring the Future Frontiers of innovation and human potential.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                  <ExternalLink size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                  <ExternalLink size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-red-500 transition-colors">About TEDx</a></li>
                <li><a href="#speakers" className="text-gray-400 hover:text-red-500 transition-colors">Speakers</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-red-500 transition-colors">Core Team</a></li>
                <li><a href="#sponsors" className="text-gray-400 hover:text-red-500 transition-colors">Sponsors</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-red-500">Event Details</h4>
              <div className="space-y-2">
                <p className="text-gray-400">Date: August 30, 2024</p>
                <p className="text-gray-400">Venue: JB Auditorium</p>
                <p className="text-gray-400">Theme: Future Frontiers</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              This independent TEDx event is operated under license from TED. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              © 2024 TEDxAhmedabadIntSchool. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;