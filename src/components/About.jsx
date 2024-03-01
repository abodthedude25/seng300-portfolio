import React from "react";
import './assets/style/About.scss'
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase,  faUniversity } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
  return (
    <div className="items_wrapper">
      <h1>About Me</h1>
      <div className="about-page">
        <div className="align-items-center">
          <img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg" alt="Asset by Oziel Gómez" />
          <h2>Brief Summary</h2>
          <p>
            I am an active, passionate and driven student at the University of Calgary pursuing a double major in Electrical Engineering and Computer Science. As a former full stack engineer, I collaborated with agile teams to deliver RESTful web applications for a diverse population of 100,000+ customers. My expertise includes Full-Stack Development, DevOps, Machine Learning, Low-level systems, Embedded/Middleware Archetictures and Project Management.
          </p>
          <TypeAnimation
            sequence={[
              "If I am not coding, you can find me: Reading",
              1000,
              "If I am not coding, you can find me: Gyming",
              1000,
              "If I am not coding, you can find me: Traveling",
              1000,
              "If I am not coding, you can find me: Benging Netflix",
              1000,
              "If I am not coding, you can find me: Jamming",
              1000
            ]}
            wrapper="p"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <h2>Career Timeline</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            date="06/2024 – 09/2024"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faUniversity} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: 'red'}} >ENEL ENG & CS Double Degree</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'black'}}>Calgary, AB</h4>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'red'}}>University of Calgary</h4>
            <ul>
              <li> <b>Minor: </b> Computer Engineering</li>
              <li> <b>GPA: </b> 3.99</li>
              <li> <b>Undergraduate Coursework:</b> Operating Systems; Algorithms and Data Structures; Networks; Comp. Architecture; Machine Learning; Circuits; Logic Design; Signal Processing; Compilers; Database Design. </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            date="06/2024 – 09/2024"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: 'red'}} >Incoming SWE Intern</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'blue'}}>Seattle, WA</h4>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'green'}}>Google</h4>
            <ul>
              <li> Working on the metadata google cloud storage team. </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            date="08/2023 – 05/2024"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: 'blue'}} >ML Systems Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'blue'}}>Toronto, ON</h4>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'blue'}}>Qualcomm</h4>
            <ul>
              <li> <b>Compiled neural networks</b> to Qualcomm hardware, then analyzed results and prototyped algorithms to compilers and/or HW. <b>pybind11, TVM, Networking, Quantization.</b></li>
              <li> Ran, debuged, and analyzed <b>performance simulations</b> and suggested enhancements to tackle bottlenecks due to computing and system memory hierarchy. <b>chromeTrace, Netron, Jit-Profiling.</b></li>
              <li> Infastructed <b>Gitlab runners</b> to build and test servers to communicate with device clients, while caching to <b>reduce pipeline wait by 300%.</b></li>
              <li> <b>Applied, discovered and researched</b> techniques to optimize existing LLM training and serving, as well as improving the model quality. <b>Transformers, Spill/Fill Analysis.</b></li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="05/2023 – 09/2023"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: 'orange'}} >Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'orange'}}>Vancouver, BC</h4>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'orange'}}>Amazon</h4>
            <ul>
              <li> Wrote <b>ranking algorithm</b> for price, price-per-unit (PPU), reviews, and delivery-time. <b>Java</b>.</li>
              <li> Fetch items from twister microservice and widget recommendations to <b>create a batch API request.</b></li>
              <li> Updated the BuyAgain Detail page to accept new card features, which <b>updated the layout experience.</b></li>
              <li> <b>Lazy loaded page details through ajaxing</b> from middleware microservice architecture.</li>
              <li> <b>Integrated uiVerify tests</b> that validated the rendering of the skeleton card and the lazy loading of the Similar Items widget.</li>
              <li> Setup general <b>OpEx CSM metrics (i.e. latency, availability traffic)</b> for the lazy loading and individual components for widgets.</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="04/2022 – 09/2022"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: 'black'}} >Software Robotics Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'black'}}>Berlin, Germany</h4>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'black'}}>DAI-Labor</h4>
            <ul>
              <li> Designed and implemented two full-stacks on a 1/10th sized car: <b>path-planning and autonomous-driving</b>.</li>
              <li> Utilized robot middleware frameworks such as <b>ROS + Gazebo, Carla, and Blender in Ubuntu-Linux</b> to develop and integrate multi-sensor real-time systems with <b>navigation and computer vision algorithms.</b></li>
              <li> Developed a Strong knowledge of data handling and integrating with multi-sensor real-time systems, such as <b>point-cloud, odometry, mapping, and SLAM.</b></li>
              <li> Developed my knowledge of and experience in techniques for programming intelligent agent behaviors (e.g. <b>Behaviour Trees, Finite State Machines</b>), and Control Systems(e.g. <b>PID, Model Predictive Control</b>).</li>
              <li> Demonstrated knowledge of Continuous Integration, Continuous Deployment, and Automated Testing Using <b>GitLab, Rviz2, Rqt, Docker, and Kubernetes.</b></li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="04/2021 - 09/2021"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: 'black'}} >Undergraduate Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'black'}}>Calgary, AB</h4>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'black'}}>University of Calgary</h4>
            <ul>
              <li> Developed 73% of a COVID-19 Diagnoses Dashboard using <b>Flask and Python</b> to mainly develop <b>forms, databases, serial-port connections, RESTful API’s,</b> and middleware services.</li>
              <li> Utilized advanced computer vision algorithms using <b>science kit, pytorch and tensorflow.</b></li>
              <li> Experienced in developing web-based application front ends utilizing <b>HTML, CSS, and JavaScript.</b></li>
              <li> Server-side development experience such as <b>NodeLinux, NoSQL databases, DevOps, cloud-based services and microservices,</b> unit and automated testing skills.</li>
              <li> Actively participated in research projects under the guidance of Dr. Behrouz Far, the <b>graduate supervisor of the founder of Uber.</b></li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="09/2021 - 04/2023"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title" style={{color: 'black'}} >Software Engineer Club Member</h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'black'}}>Calgary, AB</h4>
            <h4 className="vertical-timeline-element-subtitle" style={{color: 'black'}}>Schulich Racing</h4>
            <ul>
              <li> Spearheaded the design and implementation of a web-based dashboard that displays historic and <b>real-time telemetry data from a formula-style vehicle.</b></li>
              <li> Developed custom API layer to handle all CRUD transactions and <b>JWT using Express.js</b></li>
              <li> <b>Improved the efficiency and readability of 65%</b> of poorly maintained <b>React and Typescript</b> code modules through code refactoring, optimization, and documentation.</li>
              <li> <b>Decreased memory latency by 45%</b> by implementing an in-memory data caching store using <b>Redis</b> to ingest, process, and analyze real-time data.</li>
            </ul>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default About;