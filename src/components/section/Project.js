import React from 'react';
import '../assets/style/Project.scss';
import robotHand from '../assets/images/robot_hand.jpg'
import beatBox from '../assets/images/beatbox.jpg'
import schulichRacing from '../assets/images/schulichRacing.jpg'
import ignite from '../assets/images/ignite.png'
import upSkill from '../assets/images/upskill.jfif'
import compiler from '../assets/images/compiler.png'
import beam from '../assets/images/beam.png'
import a4h from '../assets/images/A4H.png'
import selfDrive from '../assets/images/selfDrive.gif'
import snake from '../assets/images/snake.png'
import AspectRatio from '@mui/joy/AspectRatio';


function Project() {
  return  (
    <div className="projects-container" id="project">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <AspectRatio ratio={0.9}>
            <a href="https://hackaday.io/project/191190-helping-hands" target="_blank" rel="noreferrer"><img src={robotHand} className="zoom" alt="thumbnail" width="100%"/></a>
          </AspectRatio>
          <a href="https://hackaday.io/project/191190-helping-hands" target="_blank" rel="noreferrer"><h2>Helping H.A.N.D.S.</h2></a>
          <p>I designed a PCB to power a x86-64-linux powered SOC-FPGA board (Altera DE1). Our SOC aided in NLP from our FIR-filtered microphones. This then translated over to ROS-controlled servos on our Robot Hand to produce sign language</p>
          <p>Used: C++, ROS, PYTHON, VERILOG</p>
        </div>
        <div className="project">
          <AspectRatio ratio={0.9}>
            <a href="https://beatbox.brightengineering.ca/" target="_blank" rel="noreferrer"><img src={beatBox} className="zoom" alt="thumbnail" width="100%"/></a>
            </AspectRatio>
          <a href="https://beatbox.brightengineering.ca/" target="_blank" rel="noreferrer"><h2>Beat Box</h2></a>
          <p>With BeatBox, you can tune your guitar with the flick of a string. No button presses, no complicated equipment. Just you and your instrument.  Created a classical guitar tuner from scratch, used an AVR 128 as the microcontroller and used the Fast-Fourier-Transform to decipher the correct frequencies</p>
          <p>Used: C, Multimeter, O-Scope, MicroController, Assembly</p>
        </div>
        <div className="project">
          <AspectRatio ratio={1.5}>
            <a href="https://github.com/UCalgaryRacing" target="_blank" rel="noreferrer"><img src={schulichRacing} className="zoom" alt="thumbnail" width="100%"/></a>
          </AspectRatio>
          <a href="https://github.com/UCalgaryRacing" target="_blank" rel="noreferrer"><h2>Schulich Racing Telemetry</h2></a>
          <p>Spearheaded the design and implementation of a web-based dashboard that displays historic and real-time telemetry data from a formula-style vehicle</p>
          <p>Used: Redis, GoLang, TypeScript, PostgreSQL, JWT, Express, C++</p>
        </div>
        <div className="project">
          <AspectRatio ratio={1.5}>
          <a href="https://devpost.com/software/upskill-ue310a" target="_blank" rel="noreferrer"><img src={upSkill} className="zoom" alt="thumbnail" width="100%"/></a>
          </AspectRatio>
          <a href="https://devpost.com/software/upskill-ue310a" target="_blank" rel="noreferrer"><h2>UpSkill</h2></a>
          <p>UpSkill was built using a combination of front-end and back-end technologies. The front-end was built using React.js, and the back-end utilized serverless architecture. The database was created using Firebase Firestore.</p>
          <p>Used: REACT, JS, AWS, FIREBASE</p>
        </div>
        <div className="project">
          <AspectRatio ratio={1.4}>
            <a href="https://devpost.com/software/beam-9tv7aj" target="_blank" rel="noreferrer"><img src={beam} className="zoom" alt="thumbnail" width="100%"/></a>
          </AspectRatio>
          <a  target="_blank" rel="noreferrer"><h2>Beam</h2></a>
          <p>Beam is a mobile application that enhances personal safety by leveraging real-time sentiment analysis and natural language processing (NLP). It continuously monitors conversations to detect aggression levels, and upon detecting a predefined safe word, it automatically triggers live streaming to a set of emergency contacts.</p>
          <p>Used: React Native, Fastapi, NLP, Postgresql,  Typescript</p>
        </div>
        <div className="project">
          <AspectRatio ratio={1.4}>
            <a href="https://github.com/abodthedude25/Go-Compiler" target="_blank" rel="noreferrer"><img src={compiler} className="zoom" alt="thumbnail" width="100%"/></a>
          </AspectRatio>
          <a href="https://github.com/abodthedude25/Go-Compiler" target="_blank" rel="noreferrer"><h2>GoLF</h2></a>
          <p>GoLF stands for "Go Language Fragment" and is a subset of the Go programming language, with minor changes to make it more amenable to implementation</p>
          <p>Used: C, RISC-V, C++, Yacc, Sieve, Python</p>
        </div>
        <div className="project">
          <AspectRatio ratio={1}>
            <a href="https://schulichignite.com/" target="_blank" rel="noreferrer"><img src={ignite} className="zoom" alt="thumbnail" width="100%" /></a>
          </AspectRatio>
          <a href="https://schulichignite.com/" target="_blank" rel="noreferrer"><h2>Blaze: Learning Management System</h2></a>
          <p>Created an LMS in DJANGO for a student-club teaching HS students coding, which I was the president of in my junior year</p>
          <p>Used: Django, Pthon, js, templating, Hugo</p>
        </div>
        <div className="project">
          <AspectRatio ratio={1}>
            <a href="https://github.com/Code-the-Change-YYC/Action4Humanity" target="_blank" rel="noreferrer"><img src={a4h} className="zoom" alt="thumbnail" width="100%"/></a>
          </AspectRatio>
          <a href="https://github.com/Code-the-Change-YYC/Action4Humanity" target="_blank" rel="noreferrer"><h2>Action4Humanity Volunteer Management App</h2></a>
          <p> Building a volunteer-management application which will facilitate communication more conveniently between the admin at Action4Humanity and volunteers. Utilized the T3 Stack.</p>
          <p>Used: NEXT.JS, PRISMA, TRPC, TS</p>
        </div>
        <div className="project">
          <AspectRatio ratio={1.5}>
            <a href="https://github.com/abodthedude25/Multiplayer-Snake-Game" target="_blank" rel="noreferrer"><img src={snake} className="zoom" alt="thumbnail" width="100%"/></a>
          </AspectRatio>
          <a href="https://github.com/abodthedude25/Multiplayer-Snake-Game" target="_blank" rel="noreferrer"><h2>Multi-Player Snake</h2></a>
          <p>An electronic classroom where multiple users can view and simultaneously play on a “chalkboard” with each person’s edits synchronized for the game of Snake </p>
          <p>Used: JS, Websockets, WebGL, Express</p>
        </div>
        <div className="project">
          <AspectRatio ratio={1.5}>
          <a href="https://github.com/abodthedude25/ROS2-Self-Driving-Car-AI-using-OpenCV" target="_blank" rel="noreferrer"><img src={selfDrive} className="zoom" alt="thumbnail" width="100%"/></a>
          </AspectRatio>
          <a href="https://github.com/abodthedude25/ROS2-Self-Driving-Car-AI-using-OpenCV" target="_blank" rel="noreferrer"><h2>Self-Driving Prius</h2></a>
          <p>ROS2 Prius Self Driving Car using AI/Deeplearning and Computer Vision</p>
          <p>Used: Python, ROS2, OpenCV, Shell, Path-Planning, Gazebo</p>
        </div>
      </div>
    </div>
  );
}

export default Project;