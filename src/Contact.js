import React from "react"

class Contact extends React.Component {
  render() {
    return (
      <section
        id='contact'
        className='columns section-padding contact__section has-text-centered'>
        <div className='column'>
          <h1 className='contact__section--heading'>Drop me a line!</h1>

          <ul className='contact__section--social'>
            <li>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/michelegrace'>
                <i className='fab fa-github'></i>
              </a>
            </li>
            <li>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://twitter.com/waywarddesigner'>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a
                rel='noopener noreferrer'
                target='_blank'
                href='https://www.linkedin.com/in/mgrace00'>
                <i className='fab fa-linkedin-in'></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Contact
