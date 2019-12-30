import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from './Toolbar';
import {AboutSection, ExperienceSection} from './Section';


function App() {
  return (
    <div className = "AppBackground">
      <Toolbar/>
      <AboutSection section="About Me" 
        info1= "Hi there! I'm Henry, a software engineer based in 
        New York City, NY who enjoys building scalable and efficient applications that directly 
        affect the lives of everyday individuals. I deal with full stack applications with a keen
        interest in web applications and cloud services." 
        info2= "My most recent experience was at Express Scripts, a Fortune 25 company, where I 
        worked on QA automation and full stack development on one of their new web applications."
        info3= "Some of the technologies I have experience with are:"
        technologies = {["Python", "Java", "JavaScript", "React.js","HTML", "CSS", "Spring Framework", "Node.js", "Express.js"]} />
      <ExperienceSection section= "Experience"/>
    </div>
  );
}

export default App;
