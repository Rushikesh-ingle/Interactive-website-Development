import React, { useState, useEffect } from 'react';
import { Database, RefreshCw } from 'lucide-react';
import '../styles/TaskSection.scss';

interface Post {
  id: number;
  title: string;
  body: string;
}

const ApiSection: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPosts = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError('Error fetching data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section id="api" className="task-section">
      <div className="container">
        <div className="section-header">
          <span className="task-number">Task 5</span>
          <h2>API Integration</h2>
          <p>Fetching and displaying dynamic content</p>
        </div>
        <div className="task-content">
          <div className="task-description">
            <h3>What You'll Learn</h3>
            <p>
              In this task, you'll integrate an external API (JSONPlaceholder) using the fetch() method.
              You'll learn how to make HTTP requests, handle responses, and dynamically display the 
              fetched data in your web application.
            </p>
            <div className="task-skills">
              <span>API Requests</span>
              <span>Asynchronous JS</span>
              <span>Promise Handling</span>
              <span>Dynamic Content</span>
            </div>
          </div>
          <div className="task-preview">
            <div className="api-demo">
              <div className="api-header">
                <h3><Database size={18} /> JSONPlaceholder API</h3>
                <button 
                  className="refresh-btn"
                  onClick={fetchPosts}
                  disabled={loading}
                >
                  <RefreshCw size={16} className={loading ? 'spinning' : ''} />
                  Refresh
                </button>
              </div>
              
              {error && <div className="error-message">{error}</div>}
              
              <div className="posts-container">
                {loading ? (
                  <div className="loading">Loading posts...</div>
                ) : (
                  posts.map(post => (
                    <div key={post.id} className="post-card">
                      <h4>{post.title}</h4>
                      <p>{post.body.substring(0, 100)}...</p>
                    </div>
                  ))
                )}
              </div>
              
              <div className="code-sample">
                <pre>
                  <code>{`// Fetching data from JSONPlaceholder API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Process and display the data
    const postsContainer = document.getElementById('posts');
    
    data.forEach(post => {
      const postEl = document.createElement('div');
      postEl.className = 'post';
      postEl.innerHTML = \`
        <h3>\${post.title}</h3>
        <p>\${post.body}</p>
      \`;
      postsContainer.appendChild(postEl);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;