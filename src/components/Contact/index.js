import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
  // Can't get this effect to work
  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])
  const [letterClass] = useState('text-animate')
  // We can prevent blank screen by putting () after the object to allow multiple hooks.
  const refForm = useRef()
  // Helps refer to the emailjs service

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'outlook',
        'template_oy7pjl5',
        refForm.current,
        '3xVDtnXovUkDvKJex'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          // avoids reloading the screen
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>This is to have content about best contact.</p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li>
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li>
                <input type="text" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>

              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Contact
