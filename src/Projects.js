import React from "react"
import swrimg from "./images/swr-img.png"
import ayso76 from "./images/ayso-76.png"
import barlogic from "./images/barlogic.png"
import sharpdent from "./images/sharp-dentistry.png"
import tbn from "./images/the-biggest-nerd-img.png"

function ProjectRepo(props) {
  return (
    <a
      className='external-link'
      rel='noopener noreferrer'
      target='_blank'
      href={props.projectRepo}>
      <i className='fab fa-bitbucket'></i>
    </a>
  )
}

function LiveSite(props) {
  return (
    <a
      className='external-link'
      rel='noopener noreferrer'
      target='_blank'
      href={props.projectURL}>
      <i className='fas fa-external-link-alt'></i>
    </a>
  )
}

function MetaProjectRepo(props) {
  const repoExists = props.projectRepo
  const liveSiteExists = props.projectURL
  if (repoExists && liveSiteExists) {
    return (
      <div className='btn-group'>
        <ProjectRepo projectRepo={props.projectRepo} />
        <LiveSite projectURL={props.projectURL} />
      </div>
    )
  } else if (repoExists) {
    return (
      <div className='btn-group'>
        <ProjectRepo projectRepo={props.projectRepo} />
      </div>
    )
  } else if (liveSiteExists) {
    return (
      <div className='btn-group'>
        <LiveSite projectURL={props.projectURL} />
      </div>
    )
  } else {
    return ""
  }
}

function DesignerInfo(props) {
  return (
    <div className='project__meta--collab'>
      <span>
        Designer:
        <a target='_blank' rel='noopener noreferrer' href={props.designerURL}>
          {props.projectDesigner}
        </a>
      </span>
    </div>
  )
}

function MetaCollab(props) {
  const collabExists = props.projectDesigner

  if (collabExists) {
    return (
      <DesignerInfo
        projectDesigner={props.projectDesigner}
        designerURL={props.designerURL}
      />
    )
  } else {
    return ""
  }
}

function Project(props) {
  const mapTags = props.projectTags.map((projectTag) => {
    return (
      <li key={String(Math.min(Math.random() + 100)) + projectTag.toString()}>
        {projectTag}
      </li>
    )
  })

  return (
    <div className='project'>
      <div className='columns'>
        <div className='column'>
          <figure className='image'>
            <img alt='' className='center-element' src={props.src} />
          </figure>
        </div>
        <div className='column'>
          <div className='project__meta'>
            <div className='project__meta--basic'>
              <span className='project__meta--company'>
                <h3>{props.projectTitle}</h3>
                <div className='btn-group'>
                  <MetaProjectRepo
                    projectURL={props.projectURL}
                    projectRepo={props.projectRepo}
                  />
                </div>
              </span>
              <span className='project__meta--role'>
                Role: <i>{props.projectRole}</i>
              </span>
            </div>
            <MetaCollab
              projectDesigner={props.projectDesigner}
              designerURL={props.designerURL}
            />
          </div>
          <p>{props.projectDesc}</p>
          <hr />
          <ul className='tags'>{mapTags}</ul>
        </div>
      </div>
    </div>
  )
}

class Projects extends React.Component {
  render() {
    return (
      <section id='work' className='section-padding'>
        <div className='container'>
          {/*Add Ziliute and TRRS */}
          <Project
            src={swrimg}
            projectDesigner='Staci Maloney'
            designerURL='http://stacimaloney.com/'
            projectDesc='A custom WordPress theme for Southwest Review, the third longest-running literary quarterly in the United States.'
            projectTags={["Gulp", "JS", "Node/NPM", "PHP", "SCSS", "Wordpress"]}
            projectTitle='swr'
            projectURL='http://southwestreview.com/'
            projectRole='Developer'
            projectRepo='https://github.com/michelegrace/swrtheme'></Project>

          <Project
            src={tbn}
            projectDesigner=''
            designerURL=''
            projectDesc='A single-page website for a development agency that specializes in serving small business web needs. I focused on incorporating nostalgic imagery from pulp fiction comics to match the tongue-in-cheek branding and emphasize the personable tone of the company.'
            projectTags={["Photoshop", "Zeplin"]}
            projectTitle='The Biggest Nerd'
            projectURL='https://thebiggestnerd.com/'
            projectRole='Designer'
            projectRepo=''></Project>

          <Project
            src={trrs}
            projectDesigner=''
            designerURL=''
            projectDesc='Website for a local roofing company in Texas'
            projectTags={["Bootstrap", "Node/NPM", "SCSS", "SVG", "Wordpress"]}
            projectTitle='Texas Roofing and Restoration Services'
            projectURL='https://texasrrs.net/'
            projectRole='Designer & Developer'
            projectRepo=''></Project>

          <Project
            src={ayso76}
            projectDesigner=''
            designerURL=''
            projectDesc="A website for AYSO Beverly Hills Region 76. This project was done while working with inLeague, a software company specializing in youth soccer league management. inLeague's language of choice is ColdFusion and this site was built using Mura, a CMS written in CF."
            projectTags={["Bootstrap", "ColdFusion", "MuraCMS", "SCSS"]}
            projectTitle='AYSO 76'
            projectURL='https://www.ayso76.org/'
            projectRole='Designer & Developer'
            projectRepo=''></Project>
          <Project
            src={barlogic}
            projectDesigner='Julie Evans'
            designerURL='http://designsbyjulieatx.com/'
            projectDesc='A single-page website for Barlogic, a company offering a variety of products to help bar owners and restauranteurs run their businesses.'
            projectTags={["CSS Animation", "JS", "PHP"]}
            projectTitle='Barlogic'
            projectURL='http://barlogic.us'
            projectRole='Developer'
            projectRepo=''></Project>
        </div>
      </section>
    )
  }
}

export default Projects
