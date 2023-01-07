import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faBootstrap,
  faCss3,
  faDocker,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faSheqel } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
import './index.scss'

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
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I’m a front-end developer capable of doing full stack web
            development. I have worked on a few projects including this website
            that can be seen in the portfolio section. These varied in and
            languages and frameworks including Ruby on Rails, Javascript, Wechat
            Devtools and many more. I have been working as a part - time free
            lancer for the last year after completing the Le Wagon full stack
            bootcamp, but ready to take my skills to next level to work and
            learn with the best.{' '}
          </p>
          <p>
            My previous experience were not directly tech role, but definitely
            involved having to use my knowledge. My current position as
            Operations Manager for logistics company allowed me to use my
            knowledge to introduce in programs to save time while and quality.
            This involved allowing dispatchers to easily track customers freight
            with accurate ETAs. A more stream line process of delivered freights
            paperwork directly sent with pre-generated invoices to accounting
            and much more.
          </p>
          <p>
            ’m very passionate about tech and how fast the world is changing and
            I want to adapt to that change, to help develop the new innovations.
            This passion along with my deverse experience of having to wear
            multiple hats as an Operations Manager and Language Learning
            Director at Walt Disney Company I will be able to adapt to any new
            vision a company has.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faDatabase} color="#Black" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
