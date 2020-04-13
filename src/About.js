import React from 'react';
import EmploymentTabs from './EmploymentTabs';

class About extends React.Component{

        // Encapsulate <Tabs/> component API as props for <Tab/> children
        renderChildrenWithTabsApiAsProps() {
            return React.Children.map(this.props.children, (child, index) => {
                return React.cloneElement(child, {
                    onClick : this.handleTabClick,
                    tabIndex: index,
                    isActive: index === this.state.activeTabIndex
                });
            });
        }
      
        // Render current active tab content
        renderActiveTabContent() {
            const {children} = this.props;
            const {activeTabIndex} = this.state;
            if(children[activeTabIndex]) {
                return children[activeTabIndex].props.children;
            }
        }

    render(){
      return(
        <section id="about" className="about columns section-padding">
        <div className="column is-two-fifths is-gapless about__portrait" data-aos="fade-right" data-aos-easing="linear" data-aos-offset="300">
            <div className="about__portrait--img"></div>
        </div>
        <div className="column is-three-fifths about__content">
            <div className="columns flex-direction-col">
                <div className="about__content--paragraph">
                    <h2>hello!</h2>
                    <p>As both a designer and developer, I love that I have the tools to solve problems and implement solutions. I believe that products can be simple, but they don't have to be boring.
                    </p>
                    <p>I'm always on the hunt for what's new and changing in the world of design and code. The plethora of things to learn and deep dive into is part of what drew me to tech in the first place. 
                        Currently, I am learning React, experimenting with Adobe XD and prototyping an app for foodies.</p>
                    <p>When I'm not glued to a screen I like practicing aerial arts, eating good food, and rolling for initiative. </p>
                    <p>I am currently available for freelance work and I'm always interested in participating in new, exciting projects. Feel free to get in touch!</p>
                </div>
                    <EmploymentTabs onClick={()=>this.props.onClick()} />
                <div className="column has-text-right">
                    <a href="public/images/m_smolensky_resume.pdf" className="has-text-right pink-link">Download Resume</a>
                </div>
            </div>
        </div>
    </section>
      );
    }
  }

export default About;

    // <p><i>The Biggest Nerd is a subcompany of Practice Cafe, that offers development services to businesses without in-house teams.</i></p>