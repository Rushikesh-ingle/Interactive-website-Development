import React from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';
import '../styles/TaskSection.scss';

const ResponsiveSection: React.FC = () => {
  return (
    <section id="responsive" className="task-section">
      <div className="container">
        <div className="section-header">
          <span className="task-number">Task 3</span>
          <h2>Responsive Design</h2>
          <p>Creating websites that work on any device</p>
        </div>
        <div className="task-content">
          <div className="task-description">
            <h3>What You'll Learn</h3>
            <p>
              In this task, you'll implement responsive design using media queries in an external CSS file.
              You'll learn how to adapt your layout and styling for different screen sizes, ensuring 
              your website looks great on mobile phones, tablets, and desktops.
            </p>
            <div className="task-skills">
              <span>Media Queries</span>
              <span>Flexible Layouts</span>
              <span>External CSS</span>
              <span>Viewport Settings</span>
            </div>
          </div>
          <div className="task-preview">
            <div className="responsive-demo">
              <div className="device-container">
                <div className="device mobile">
                  <Smartphone size={16} />
                  <span>Mobile</span>
                </div>
                <div className="device tablet">
                  <Tablet size={20} />
                  <span>Tablet</span>
                </div>
                <div className="device desktop">
                  <Monitor size={24} />
                  <span>Desktop</span>
                </div>
              </div>
              <div className="code-sample">
                <pre>
                  <code>{`/* Base styles for all devices */
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}

/* Mobile devices (up to 576px) */
@media (max-width: 576px) {
  .container {
    max-width: 100%;
  }
  h1 { font-size: 24px; }
}

/* Tablets (577px - 992px) */
@media (min-width: 577px) and (max-width: 992px) {
  .container {
    max-width: 720px;
  }
  h1 { font-size: 32px; }
}

/* Desktops (993px and up) */
@media (min-width: 993px) {
  .container {
    max-width: 1140px;
  }
  h1 { font-size: 40px; }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveSection;