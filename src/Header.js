import React from 'react';
import resume from './images/m_smolensky_resume.pdf'

function NavItem (props) {
    return(
      <a href={props.href} className="navbar-item">{props.sectionName}</a>
    );
  }
  
  class Header extends React.Component {
    render(){
      return(
        <header className="is-absolute">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <div className="navbar-logo logo" href="/">
                  <span className="firstname">michele</span>
                  <span className="lastname">smolensky</span>
              </div>
          </div>
          <button className="navbar-burger burger fadeIn" aria-label="menu" data-target="navbar">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
          </button>
          <div id="mainNav" className="navbar-menu">
              <div className="navbar-end">
                  <NavItem href="#work" sectionName="Work" />
                  <NavItem href="#about" sectionName="About" />
                  <NavItem href="#contact" sectionName="Contact" />
                  <NavItem href={resume} sectionName="Resume" />
              </div>
          </div>
        </nav>
      </header>
      )
    };
  }

  export default Header;