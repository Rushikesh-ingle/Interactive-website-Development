import React, { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import '../styles/TaskSection.scss';

const InteractiveSection: React.FC = () => {
  const [bgColor, setBgColor] = useState('#ffffff');
  const colors = ['#e6f7ff', '#fff2e6', '#e6ffe6', '#f7e6ff', '#ffe6e6'];

  const changeBackgroundColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <section id="interactive" className="task-section alternate">
      <div className="container">
        <div className="section-header">
          <span className="task-number">Task 4</span>
          <h2>JavaScript Interactivity</h2>
          <p>Adding dynamic behavior to your website</p>
        </div>
        <div className="task-content reverse">
          <div className="task-preview">
            <div 
              className="interactive-demo"
              style={{ backgroundColor: bgColor }}
            >
              <Lightbulb size={48} />
              <p>Click the button to change the background color!</p>
              <button 
                className="color-change-btn"
                onClick={changeBackgroundColor}
              >
                Change Color
              </button>
              <div className="code-sample">
                <pre>
                  <code>{`// JavaScript for changing background color
document.getElementById('colorButton').addEventListener('click', function() {
  const colors = [
    '#e6f7ff', '#fff2e6', '#e6ffe6',
    '#f7e6ff', '#ffe6e6'
  ];
  
  // Get a random color from the array
  const randomColor = colors[
    Math.floor(Math.random() * colors.length)
  ];
  
  // Apply the color to the element
  document.getElementById('colorBox').style.backgroundColor = randomColor;
});`}</code>
                </pre>
              </div>
            </div>
          </div>
          <div className="task-description">
            <h3>What You'll Learn</h3>
            <p>
              In this task, you'll add interactivity to your website using JavaScript. You'll implement
              a button that changes the background color when clicked, learning about event listeners,
              DOM manipulation, and basic programming concepts.
            </p>
            <div className="task-skills">
              <span>Event Handling</span>
              <span>DOM Manipulation</span>
              <span>Functions</span>
              <span>Variables</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSection;