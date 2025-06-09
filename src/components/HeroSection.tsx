import React from 'react';
import { Code, Layout, PenTool, Zap } from 'lucide-react';
import '../styles/HeroSection.scss';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Front-End Development Internship</h1>
          <p className="subtitle">
            Build your skills from basic HTML to advanced front-end technologies
          </p>
          <div className="cta-buttons">
            <a href="#form" className="primary-btn">Get Started</a>
            <a href="#basic" className="secondary-btn">Explore Tasks</a>
          </div>
          <div className="hero-features">
            <div className="feature">
              <Code size={24} />
              <h3>HTML & CSS</h3>
              <p>Master the fundamentals of web development</p>
            </div>
            <div className="feature">
              <Zap size={24} />
              <h3>JavaScript</h3>
              <p>Add interactivity and dynamic functionality</p>
            </div>
            <div className="feature">
              <Layout size={24} />
              <h3>Responsive Design</h3>
              <p>Create websites that work on any device</p>
            </div>
            <div className="feature">
              <PenTool size={24} />
              <h3>Modern Frameworks</h3>
              <p>Learn Bootstrap and Sass for efficient styling</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape"></div>
    </section>
  );
};

export default HeroSection;