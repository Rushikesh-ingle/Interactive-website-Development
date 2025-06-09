import React from 'react';
import { Palette } from 'lucide-react';
import '../styles/TaskSection.scss';

const StylingSection: React.FC = () => {
  return (
    <section id="styling" className="task-section alternate">
      <div className="container">
        <div className="section-header">
          <span className="task-number">Task 2</span>
          <h2>Inline CSS Styling</h2>
          <p>Adding visual appeal with direct styling</p>
        </div>
        <div className="task-content reverse">
          <div className="task-preview">
            <div className="code-block">
              <Palette size={24} className="code-icon" />
              <pre>
                <code>{`<h1 style="color: #3B82F6; font-family: 'Arial', sans-serif; text-align: center;">
  Welcome to My Website
</h1>

<p style="font-size: 18px; line-height: 1.6; color: #4B5563; margin-bottom: 20px;">
  This paragraph has inline styling applied directly to the element.
</p>

<div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <h2 style="color: #1E40AF; margin-bottom: 16px;">
    About Our Company
  </h2>
  <img 
    src="company.jpg" 
    alt="Company Image" 
    style="width: 100%; max-width: 400px; height: auto; border-radius: 4px;"
  >
</div>`}</code>
              </pre>
            </div>
          </div>
          <div className="task-description">
            <h3>What You'll Learn</h3>
            <p>
              In this task, you'll apply CSS styling directly to HTML elements using the inline style attribute.
              You'll learn how to modify colors, fonts, spacing, and other visual properties to enhance
              the appearance of your web page.
            </p>
            <div className="task-skills">
              <span>CSS Properties</span>
              <span>Color Theory</span>
              <span>Typography</span>
              <span>Box Model</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StylingSection;