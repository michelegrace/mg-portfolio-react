import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeTabIndex: this.props.defaultActiveTabIndex
  };
  this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tabIndex) {
    console.log('clicked')
    this.setState({
        activeTabIndex: tabIndex === this.state.activeTabIndex ? this.props.defaultActiveTabIndex : tabIndex
    });
}

  render(){
    return (
      <main className="body-visible">
        <Header/>
        <Welcome />
        <Projects />
        <About onClick = {()=>this.handleTabClick} />
        <Contact />
        <footer className="has-text-centered"><i className="far fa-copyright"></i> 2019 Michele Smolensky / <a href="mailto:michele.smolensky@gmail.com">michele.smolensky@gmail.com</a></footer>
      </main>
    );
  }
}

export default App;
