import React from 'react';
import '../assets/style/Hero.scss'
import headshot from '../assets/images/headshot.jpg'
import { CodeBlock, monokai } from 'react-code-blocks';

function Hero() {
  return  (
    <div className="container" id="about">
      <div className="about-section">
        <div className="content">
          <h1>Welcome to my portfolio 👋</h1>
          <p>
            This is where I showcase past projects beyond my work scope. 
            But before we dive in, please let me introduce myself:
          </p>
          <div className="desktop-codeblock">
            <CodeBlock
              text={
  `const person = {
    firstName: 'Abod',
    lastName: 'Abbas',
    role: 'Software Engineer',
    city: 'Calgary, AB',
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    }
  };
  
  function printIntro(obj) {
    console.log("Hi! I'm " + obj.fullName() 
      + ", a " + obj.role + " based in " + obj.city);
  };
  printIntro(person);`
                }
              language={'javascript'}
              showLineNumbers={false}
              theme={monokai}
            />
          </div>

          <div className="mobile-responsive-codeblock">
            <CodeBlock
              text={
  `const person = {
    firstName: 'Abod',
    lastName: 'Abbas',
    role: 'Software Engineer',
    city: 'Calgary, AB',
    fullName: function () {
      return this.firstName 
        + ' ' + this.lastName;
    }
  };
  
  function printIntro(obj) {
    console.log("Hi! I'm " 
      + obj.fullName() 
      + ", a " + obj.role 
      + " based in " 
      + obj.city);
  };
  printIntro(person);`
                }
              language={'javascript'}
              showLineNumbers={false}
              theme={monokai}
            />
          </div>
        </div>
        <div className="image-wrapper">
          <img src={headshot} alt="Asset by Oziel Gómez" />
        </div>
      </div>
    </div>
  );
}

export default Hero;