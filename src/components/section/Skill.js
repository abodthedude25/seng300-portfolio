import React from 'react';
import '../assets/style/Skill.scss';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact,  
  faDocker, 
  faPython, 
   
} from '@fortawesome/free-brands-svg-icons';
import DjangoPlain from 'devicons-react/lib/icons/DjangoPlain';
import NpmOriginalWordmark from 'devicons-react/lib/icons/NpmOriginalWordmark';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import NodejsOriginalWordmark from 'devicons-react/lib/icons/NodejsOriginalWordmark';
import Css3OriginalWordmark from 'devicons-react/lib/icons/Css3OriginalWordmark';
import Html5OriginalWordmark from 'devicons-react/lib/icons/Html5OriginalWordmark';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import TypescriptOriginal from 'devicons-react/lib/icons/TypescriptOriginal';
import FlaskOriginalWordmark from 'devicons-react/lib/icons/FlaskOriginalWordmark';
import JavaOriginal from 'devicons-react/lib/icons/JavaOriginal';
import MysqlOriginal from 'devicons-react/lib/icons/MysqlOriginal';
import UnityOriginal from 'devicons-react/lib/icons/UnityOriginal';
import GitOriginal from 'devicons-react/lib/icons/GitOriginal';
import DockerOriginal from 'devicons-react/lib/icons/DockerOriginal';
import AmazonwebservicesOriginalWordmark from 'devicons-react/lib/icons/AmazonwebservicesOriginalWordmark';
import LinuxOriginal from 'devicons-react/lib/icons/LinuxOriginal';
import AndroidstudioOriginal from 'devicons-react/lib/icons/AndroidstudioOriginal';
import NextjsOriginal from 'devicons-react/lib/icons/NextjsOriginal';
import PytorchOriginal from 'devicons-react/lib/icons/PytorchOriginal';
import ApacheOriginal from 'devicons-react/lib/icons/ApacheOriginal';
import MongodbOriginal from 'devicons-react/lib/icons/MongodbOriginal';
import ScikitlearnOriginal from 'devicons-react/lib/icons/ScikitlearnOriginal';
import MatlabOriginal from 'devicons-react/lib/icons/MatlabOriginal';
import MatplotlibOriginal from 'devicons-react/lib/icons/MatplotlibOriginal';
import NumpyOriginal from 'devicons-react/lib/icons/NumpyOriginal';
import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import COriginal from 'devicons-react/lib/icons/COriginal';
import KubernetesOriginal from 'devicons-react/lib/icons/KubernetesOriginal';
import LlvmOriginal from 'devicons-react/lib/icons/LlvmOriginal';
import TrpcOriginal from 'devicons-react/lib/icons/TrpcOriginal';

import Chip from '@material-ui/core/Chip';

function Skill () {
  return  (
    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Specialties</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="4x"/>
            <h3>Full Stack Web Development</h3>
            <p>
            I've built 10+ RESTful web apps, mainly with the MERN stack. Proficient in JavaScript libraries such as React, Next.js, Node, and Express. I also love using the Django and Flask.
            </p>
            <p className="flex-chips">Tech stack: 
              <Chip variant="outlined" label="JavaScript" size="small" icon={<JavascriptOriginal  size="15" />} />
              <Chip variant="outlined" label="TypeScript" size="small" icon={<TypescriptOriginal  size="15" />} />
              <Chip variant="outlined" label="Flask" size="small" icon={<FlaskOriginalWordmark  size="25" />} />
              <Chip variant="outlined" label="NEXT.js" size="small" icon={<NextjsOriginal size="18"/> } />
              <Chip variant="outlined" label="HTML5" size="small" icon={<Html5OriginalWordmark  size="20" />} />
              <Chip variant="outlined" label="CSS3" size="small" icon={<Css3OriginalWordmark  size="20" />} />              
              <Chip variant="outlined" label="NodeJS" size="small" icon={<NodejsOriginalWordmark  size="30" />} />
              <Chip variant="outlined" label="React" size="small" icon={<ReactOriginal  size="20" />} />
              <Chip variant="outlined" label="npm" size="small" icon={<NpmOriginalWordmark  size="30" />} />
              <Chip variant="outlined" label="Django" size="small" icon={<DjangoPlain size="12"/> } />
              <Chip variant="outlined" label="MongoDB" size="small" icon={<MongodbOriginal size="20" />}/>
              <Chip variant="outlined" label="TRPC" size="small" icon={<TrpcOriginal size="20" />}/>
            </p>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="4x"/>
            <h3>Software Development</h3>
            <p>
            I enjoy working with agile teams to design and implement cross-platform solutions. Alongside my web development experience, I've created multiple video games using Unity. Also, I've worked with microcontrollers and sensors to create smart devices and IoT solutions.            </p>
            <p className="flex-chips">Tech stack: 
              <Chip variant="outlined" label="Java" size="small" icon={<JavaOriginal size="20" />} />
              <Chip variant="outlined" label="SQL" size="small" icon={<MysqlOriginal size="15" />}/>
              <Chip variant="outlined" label="C/C++/C#" size="small" icon={<COriginal size="15" />}/>
              <Chip variant="outlined" label="Unity" size="small" icon={<UnityOriginal size="20" />} />
              <Chip variant="outlined" label="Git" size="small" icon={<GitOriginal size="20" />} />
              <Chip variant="outlined" label="Docker" size="small" icon={<DockerOriginal size="20" />} />
              <Chip variant="outlined" label="AWS" size="small" icon={<AmazonwebservicesOriginalWordmark size="20" />} />
              <Chip variant="outlined" label="Linux" size="small" icon={<LinuxOriginal size="20" />} />
              <Chip variant="outlined" label="Android Studio" size="small" icon={<AndroidstudioOriginal size="20" />} />
              <Chip variant="outlined" label="Kubernetes" size="small" icon={<KubernetesOriginal size="20" />} />
            </p>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="4x"/>
            <h3>Machine Learning Systems</h3>
            <p>
            I've worked on multiple machine learning projects, from the model archeticture side all the way down to system level compilation. I'm proficient in Python and Pytorch, and I've used libraries such as Pandas, Matplotlib, and Sklearn.
            </p>
            <p className="flex-chips">Tech stack:
              <Chip variant="outlined" label="Python" size="small" icon={<PythonOriginal size="20"  />} />
              <Chip variant="outlined" label="Numpy" size="small" icon={<NumpyOriginal size="20"  />} />
              <Chip variant="outlined" label="Matplotlib" size="small" icon={<MatplotlibOriginal size="20"  />} />
              <Chip variant="outlined" label="Matlab" size="small" icon={<MatlabOriginal size="20"  />} />
              <Chip variant="outlined" label="Sklearn" size="small" icon={<ScikitlearnOriginal size="25"  />} />
              <Chip variant="outlined" label="Pytorch" size="small" icon={<PytorchOriginal size="20" />} />
              <Chip variant="outlined" label="C/C++" size="small" icon={<COriginal size="15" />}/>
              <Chip variant="outlined" label="Apache TVM" size="small" icon={<ApacheOriginal size="20" />}/>
              <Chip variant="outlined" label="LLVM" size="small" icon={<LlvmOriginal size="20" />}/>
              <Chip variant="outlined" label="Onnx" size="small" />

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;