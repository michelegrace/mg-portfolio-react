import React from 'react';
import PropTypes from 'prop-types';

function WorkHistory(props){
  const mapTasks = props.bulletPoints.map((bulletPoint)=>{
      return(
          <li key={bulletPoint.toString()}>{bulletPoint}</li>
      )})
    const companyNoteExists = props.companyNoteExists;
    if(companyNoteExists) {
      return (
        <div className="workHistory__detail">
          <h4>{props.role} / <a className="workHistory__detail--employer" href={(props.url || "")} rel="noopener noreferrer" target="_blank">{(props.company || "")}</a></h4>
          <span className="workHistory__detail--term">{props.employmentPeriod}</span>
          <p><i>{props.companyNote}</i></p>
          <ul className="workHistory__detail--list">
             {mapTasks}
          </ul>
        </div>
      );
    } else {
      return(
        <div className="workHistory__detail">
          <h4>{props.role} / <a className="workHistory__detail--employer" href={(props.url || "")} rel="noopener noreferrer" target="_blank">{(props.company || "")}</a></h4>
          {companyNoteExists}
          <span className="workHistory__detail--term">{props.employmentPeriod}</span>
          <ul className="workHistory__detail--list">
             {mapTasks}
          </ul>
        </div>
    )
    }
}

class Tab extends React.Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const {
        onClick,
        props: {
          activeTab,
          label,
        },
      } = this;
  
      let className = 'employer--item';
  
      if (activeTab === label) {
        className += ' active';
      }
  
      return (
        <li
          className="employer__list--item"
        >
        <span className={className}
                onClick={onClick}>
          {label}
          </span>
        </li>
      );
    }
  }

  class Tabs extends React.Component {
    static propTypes = {
      children: PropTypes.instanceOf(Array).isRequired,
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        activeTab: this.props.children[0].props.label,
      };
    }
  
    onClickTabItem = (tab) => {
      this.setState({ activeTab: tab });
    }
    render() {
      const {
        onClickTabItem,
        props: {
          children,
        },
        state: {
          activeTab,
        }
      } = this;
  
      return (
        <div className="employment">
          <ul className="tab-list employer--list column is-one-fifth">
            {children.map((child) => {
              const { label } = child.props;
              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />
              );
            })}
          </ul>
          <div className="workHistory column">
            {children.map((child) => {
              if (child.props.label !== activeTab) return undefined;
              return child.props.children;
            })}
          </div>
        </div>
      );
    }
  }

  function EmploymentTabs() {
    return (
      <div>
        <Tabs>
        <div className="workHistory__detail" label="Practice Cafe">
          <WorkHistory 
            company="Practice Cafe"
            companyNote=""
            url="https://www.practicecafe.com"
            role="Design Manager & Frontend Developer"
            employmentPeriod="2015 - Current"
            bulletPoints= {[" Trained and managed a team of two designers.",
            "Organized and ran lightning talks for the web team.",
            "Ran workshops in-house to help educate other teams about the basics of the web.",
            "Worked daily with the digital marketing team to create and optimize landers for various campaigns.",
            "Designed full websites, landers, and one-off social media posts for clients and internal use.",
            "Built performant and maintainable wordpress sites for various practices all over the U.S. and Canada.",
            "Maintained and debugged existing sites for clients on a variety of platforms and content management systems, such as Drupal and MODX."]} />
        </div>
        <div className="workHistory__detail" label="The Biggest Nerd">
        <WorkHistory 
            company="The Biggest Nerd"
            companyNoteExists={true}
            companyNote="The Biggest Nerd is a subcompany of Practice Cafe, that offers development services to businesses without in-house teams."
            url="https://www.thebiggestnerd.com"
            role="Designer & Frontend Developer"
            employmentPeriod="2018 - Current"
            bulletPoints= {["Designed and developed custom themes for a variety of businesses, including Asure Software.",
            "Maintained and made content and design updates to e-commerce sites, such as Tushy.",
            "Collaborated with project managers and fellow developers to help guide projects, establish standards and ensure clients get the best product possible."]} />
        </div>
        <div className="workHistory__detail" label="inLeague">
          <WorkHistory 
            company="inLeague"
            companyNote=""
            url="http://www.inleague.org"
            role="Designer & Frontend Developer"
            employmentPeriod="2015 - 2018"
            bulletPoints= {["Designed and coded a flexible, custom theme for a youth soccer regional league using the content management system Mura.",
            "Redesigned and delivered frontend code for the updated youth soccer league management web application.",
            "Designed and helped build out the mobile app version using PhoneGap."]} />
        </div>
        <div className="workHistory__detail" label="Freelance">
          <WorkHistory 
            company=""
            companyNote=""
            url=""
            anchor="#fr"
            role="Designer & Frontend Developer"
            employmentPeriod="June 2015 - Current"
            bulletPoints= {["Worked closely with a variety of clients one-on-one to design and build websites within budget and time constraints.",
            "Collaborated with freelance designers to help build preformant and dynamic themes for clients."]} />
        </div>
      </Tabs>
      </div>
    );
  }

export default EmploymentTabs;