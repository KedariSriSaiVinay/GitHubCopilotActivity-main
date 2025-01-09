import React from 'react';
import './App.css';

const siteProps = {
  title: "Kedari Sri Sai Vinay",
  description: "Welcome to my portfolio site, showcasing my projects and skills.",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername"
  }
};

// GitHub Copilot, please explain the purpose of each value in siteProps
// title: The name of the website displayed in the browser title bar.
// description: A brief description of the website, often used for SEO or meta tags.
// socialLinks: Object containing the social media URLs associated with the website.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{siteProps.title}</h1>
        <p>{siteProps.description}</p>

        <div className="social-media-icons">
          <a href={siteProps.socialLinks.github} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github"></i>
          </a>
          <a href={siteProps.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href={siteProps.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
