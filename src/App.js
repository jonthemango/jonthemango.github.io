import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import SidePanel from './SidePanel';
function App() {

  const yearSince = (year) => {
    return new Date().getFullYear() - year;
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="animated fadeIn">Jon Mongeau</h1>
        <h2 className="animated fadeIn">Software Developer</h2>
        <p className="bio animated fadeIn">I am a passionate software developer interested in the role of <span className="hyper">data</span> in systems of the future. I am a full-stack <span className="hyper">web</span> developer with advanced skills in Python.</p>
        <p className="bio animated fadeIn">Check out my <a target="_blank" rel="noopener" href="https://github.com/jonthemango" class="hyper">Github</a> to see what I am working on now</p>
        
        <div className="cards">
          <Card title="Micro Services" description={"Experience with building robust microservices. I love using flask or express to build RESTful APIs."} icon="lni-code-alt"></Card>
          <Card title="Frontend Development" description={"Over " + yearSince(2012) +  " years of building beautiful user interfaces. I love using React and Vue."} icon="lni-radio-button"></Card>
          <Card title="Dev Ops" description={"Code, Build, Test, Release. Experience with AWS, Azure and Firebase. Use of tools like Travis, Git and pytest."} icon="lni-cloud"></Card>
          <Card title="Data Science" description={"Interest in big data algorithms, machine learning and statistics. Currently studying algorithms for numerical methods."} icon="lni-database"></Card>
        </div>
        
      </div>
    </div>
  );
}

export default App;
