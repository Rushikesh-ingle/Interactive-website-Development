import React from 'react';
import { FileCode } from 'lucide-react';
import '../styles/TaskSection.scss';

const SassSection: React.FC = () => {
  return (
    <section id="sass" className="task-section alternate">
      <div className="container">
        <div className="section-header">
          <span className="task-number">Task 8</span>
          <h2>Sass Implementation</h2>
          <p>Creating structured, maintainable CSS</p>
        </div>
        <div className="task-content reverse">
          <div className="task-preview">
            <div className="sass-demo">
              <div className="sass-examples">
                <div className="example-item">
                  <h4>Variables</h4>
                  <div className="code-sample">
                    <pre>
                      <code>{`// Variables in Sass
$primary-color: #3B82F6;
$secondary-color: #14B8A6;
$accent-color: #F97316;
$font-stack: 'Poppins', sans-serif;
$base-spacing: 8px;

body {
  font-family: $font-stack;
  color: darken($primary-color, 30%);
  margin: $base-spacing * 2;
}`}</code>
                    </pre>
                  </div>
                </div>
                <div className="example-item">
                  <h4>Nesting</h4>
                  <div className="code-sample">
                    <pre>
                      <code>{`// Nesting in Sass
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  &__header {
    padding: 16px;
    border-bottom: 1px solid #eee;
    
    h3 {
      margin: 0;
      color: $primary-color;
    }
  }
  
  &__body {
    padding: 16px;
    
    p {
      line-height: 1.6;
    }
  }
}`}</code>
                    </pre>
                  </div>
                </div>
                <div className="example-item">
                  <h4>Mixins</h4>
                  <div className="code-sample">
                    <pre>
                      <code>{`// Mixins in Sass
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin button($bg-color, $text-color) {
  background-color: $bg-color;
  color: $text-color;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

.cta-button {
  @include button($primary-color, white);
}

.container {
  @include flex-center;
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="task-description">
            <h3>What You'll Learn</h3>
            <p>
              In this final task, you'll implement Sass to create structured, maintainable CSS.
              You'll learn how to use variables, nesting, mixins, and other Sass features to write 
              more efficient stylesheet code, and how to compile it into regular CSS for production.
            </p>
            <div className="task-skills">
              <span>Sass/SCSS</span>
              <span>Variables</span>
              <span>Nesting</span>
              <span>Mixins</span>
              <span>Functions</span>
              <span>Partials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SassSection;