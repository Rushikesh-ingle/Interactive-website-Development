import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <GraduationCap size={36} />
            <h2>Cognifyz</h2>
            <p>Front-End Development Internship</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h3>Tasks</h3>
              <ul>
                <li><a href="#basic">Basic HTML</a></li>
                <li><a href="#styling">Inline CSS</a></li>
                <li><a href="#responsive">Responsive Design</a></li>
                <li><a href="#interactive">JavaScript Interactivity</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Advanced Tasks</h3>
              <ul>
                <li><a href="#api">API Integration</a></li>
                <li><a href="#form">Form Validation</a></li>
                <li><a href="#framework">CSS Framework</a></li>
                <li><a href="#sass">Sass Implementation</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul className="contact-info">
                <li>
                  <Mail size={16} />
                  <span>info@cognifyz.com</span>
                </li>
                <li>
                  <Phone size={16} />
                  <span>+91 123 456 7890</span>
                </li>
                <li>
                  <MapPin size={16} />
                  <span>Mumbai, Maharashtra, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" aria-label="Github"><Github size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
          </div>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Cognifyz Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;