import React from 'react';

class Welcome extends React.Component {
    render(){
      return(
        <section id="welcome" className="columns is-gapless is-relative is-marginless is-mobile">
          <div className="column">
              <div className="design block"></div>
          </div>
          <div className="column">
              <div className="dev block"></div>
          </div>
          <div className="welcome__intro">
              <h1 className="mega">get you a girl who can do both</h1>
              <span className="is-uppercase intro-text">Design & Development</span>
          </div>
        </section>
      );
    }
  }

  export default Welcome;