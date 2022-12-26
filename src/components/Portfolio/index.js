// import React, { useState } from 'react'
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import './index.scss'
// import ProjectItem from './ProjectItem'
// // import Football from '../../assets/images/football.png'
// import { ProjectList } from '../../assets/helpers/ProjectList'

// const Portfolio = () => {
//   const [letterClass, setLetterClass] = useState('text-animate')
//   return (
//     <>
//       <div className="container portfolio-page">
//         <div className="text-zone">
//           <h1 className="page-title">
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={'Portfolio'.split('')}
//               idx={15}
//             />
//           </h1>
//           <p>Here is and overview of the projects.</p>

//           <div className="project">
//             <div className="projectList">
//               {/* <projectItem
//               name="Boredem Bakey"
//               image="../../assets/images/football.png"
//             /> */}
//               {/* <projectItem name="Giggle" image={Football}  />
//                 <projectItem name="Equiprent" image={}/> */}

//               <div className="projectList">
//                 {ProjectList.map((project, idx) => {
//                   return (
//                     <ProjectItem
//                       id={idx}
//                       name={project.name}
//                       image={project.image}
//                     />
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Loader type="pacman" />
//     </>
//   )
// }

// export default Portfolio
