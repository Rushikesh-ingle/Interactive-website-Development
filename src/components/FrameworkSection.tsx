import React from 'react';
import { Layout, Grid, FileText } from 'lucide-react';
import '../styles/TaskSection.scss';

const FrameworkSection: React.FC = () => {
  return (
    <section id="framework" className="task-section">
      <div className="container">
        <div className="section-header">
          <span className="task-number">Task 7</span>
          <h2>CSS Framework Integration</h2>
          <p>Using Bootstrap for component-based styling</p>
        </div>
        <div className="task-content">
          <div className="task-description">
            <h3>What You'll Learn</h3>
            <p>
              In this task, you'll refactor your project using Bootstrap, a popular CSS framework.
              You'll learn how to implement component-based styling, use the grid system for layout,
              and leverage pre-built components to enhance your website's appearance and functionality.
            </p>
            <div className="task-skills">
              <span>Bootstrap</span>
              <span>Grid System</span>
              <span>Components</span>
              <span>Responsive Utilities</span>
            </div>
          </div>
          <div className="task-preview">
            <div className="framework-demo">
              <div className="bs-components">
                <div className="bs-header">
                  <Grid size={20} />
                  <h3>Bootstrap Components</h3>
                </div>
                <div className="bs-row">
                  <div className="bs-col">
                    <div className="bs-card">
                      <div className="bs-card-img"></div>
                      <div className="bs-card-body">
                        <h4>Card Title</h4>
                        <p>Some quick example text to build on the card.</p>
                        <button className="bs-btn">Go somewhere</button>
                      </div>
                    </div>
                  </div>
                  <div className="bs-col">
                    <div className="bs-alert">
                      <strong>Success!</strong> Operation completed successfully.
                    </div>
                    <div className="bs-form">
                      <label>Email address</label>
                      <input type="email" placeholder="name@example.com" />
                    </div>
                    <button className="bs-btn bs-btn-primary">Primary</button>
                    <button className="bs-btn bs-btn-secondary">Secondary</button>
                  </div>
                </div>
              </div>
              <div className="code-sample">
                <FileText size={18} />
                <pre>
                  <code>{`<!-- Bootstrap implementation example -->
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text...</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="alert alert-success" role="alert">
        <strong>Success!</strong> Operation completed.
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email">
      </div>
      <button class="btn btn-primary me-2">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
    </div>
  </div>
</div>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;