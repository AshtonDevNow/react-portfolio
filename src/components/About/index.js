import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  // Below is when I can get the useState effect to work.  Need to get
  // const [letterClass, setLetterClass] = useState('text-animate')

  // Can't get this effect to work
  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>Make this about where I'm from and Tech expreience.</p>
        <p>
          Here can be about what other industries and countries I worked in.
          Link resume.
        </p>
        <p>
          This last paragraph can be about how I can adapt to the job and how I
          use my free time to study Tech.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="DD0031" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="DD0031" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="DD0031" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="DD0031" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="DD0031" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
