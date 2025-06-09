import React from 'react';
import { FileText } from 'lucide-react';
import '../styles/TaskSection.scss';

const BasicSection: React.FC = () => {
  return (
    <section id="basic" className="task-section">
      <div className="container">
        <div className="section-header">
          <span className="task-number">Task 1</span>
          <h2>Basic HTML Structure</h2>
          <p>Creating a foundation with semantic HTML elements</p>
        </div>
        <div className="task-content">
          <div className="task-description">
            <h3>What You'll Learn</h3>
            <p>
              In this task, you'll build a basic HTML page that includes various elements like headings, 
              paragraphs, images, and links. You'll learn about semantic HTML and how to structure 
              content properly.
            </p>
            <div className="task-skills">
              <span>HTML5</span>
              <span>Semantic Tags</span>
              <span>Content Structure</span>
            </div>
          </div>
          <div className="task-preview">
            <div className="code-block">
              <FileText size={24} className="code-icon" />
              <pre>
                <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic HTML Page</title>
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>About Us</h2>
      <p>This is a paragraph about our company...</p>
      <img src="company.jpg" alt="Our Company">
    </section>
  </main>
  <footer>
    <p>&copy; 2025 My Website</p>
  </footer>
</body>
</html>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicSection;