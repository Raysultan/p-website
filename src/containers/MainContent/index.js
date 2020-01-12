import React from 'react'

import { StyledLefted, StyledMainContent, StyledFlex, StyledBlockHome, StyledMainText, StyledBlock, StyledHeader, StyledListBox, StyledListItem, StyledExperienceBox, StyledWorkBlock, StyledProjectsBox, StyledProjectsHead, StyledOtherWorkBlock, StyledContactBlock, StyledContactBox, StyledContactTitle, StyledMailToLink, StyledCopyRight } from './styled'
import List from './components/List'
import ExperienceLine from './components/ExperienceLine'
import ProjectCard from './components/ProjectCard'
import ProjectTable from './components/ProjectTable'

const other_projects = [
  {
    name: 'RECIPE BOOK API',
    used_tech: 'DJANGO DRF POSTGRESQL DOCKER',
    github_link: 'www.google.com',
  },
  {
    name: 'GRAPH ALGOS',
    used_tech: 'VUE FIREBASE',
    github_link: 'www.google.com',
  },
  {
    name: 'PRODUCTHUNT',
    used_tech: 'DJANGO POSTGRESQL',
    github_link: 'www.google.com',
  },
  {
    name: 'LEARN RSA',
    used_tech: 'HTML SASS JQUERY',
    github_link: 'www.google.com',
  },
  {
    name: 'BLOG ENGINE',
    used_tech: 'DJANGO POSTGRESQL',
    github_link: 'www.google.com',
  },
]

const MainContent = () => (
  <StyledMainContent>
    <StyledFlex>
      <StyledLefted />
      <StyledBlockHome>
        <a  name='#home'/>
        <StyledMainText>
          HELLO!
          <br />
          <br />
          I'M RAYSULTAN KARIMOV,
          A WEB DEVLOPER WHO FOCUSES ON WRITING CLEAN,
          ELEGANT AND EFFICIENT CODE. CURRENTLY GRADUTATING
          FROM SIBERIAN FEDERAL UNIVERSITY IN KRASNOYARSK,
          RUSSIA.
        </StyledMainText>
      </StyledBlockHome>
    </StyledFlex>

    <StyledFlex>
      <StyledLefted />
      <StyledBlock>
        <a  name='#skills'/>
        <StyledHeader>SKILLS</StyledHeader>
        <StyledListBox>
          <List title='LANGUAGES'>
            <StyledListItem>PYTHON</StyledListItem>
            <StyledListItem>JAVASCRIPT (ES6)</StyledListItem>
            <StyledListItem>HTML</StyledListItem>
            <StyledListItem>CSS/SASS</StyledListItem>
            <StyledListItem>SQL</StyledListItem>
          </List>
          <List title='FRAMEWORKS'>
            <StyledListItem>DJANGO</StyledListItem>
            <StyledListItem>REACT</StyledListItem>
          </List>
          <List title='LIBRARIES'>
            <StyledListItem>GATSBY JS</StyledListItem>
            <StyledListItem>REDUX</StyledListItem>
            <StyledListItem>STYLED-COMPONENTS</StyledListItem>
            <StyledListItem>BEAUTIFULSOAP4</StyledListItem>
          </List>
          <List title='TOOLS & TECH'>
            <StyledListItem>BASH</StyledListItem>
            <StyledListItem>GIT & GITHUB</StyledListItem>
            <StyledListItem>CHROME DEVTOOLS</StyledListItem>
            <StyledListItem>POSTGRESQL</StyledListItem>
            <StyledListItem>DOCKER</StyledListItem>
            <StyledListItem>POSTMAN</StyledListItem>
            <StyledListItem>CELERY</StyledListItem>
            <StyledListItem>REDIS</StyledListItem>
          </List>
        </StyledListBox>
      </StyledBlock>
    </StyledFlex>
    <StyledFlex>
      <StyledLefted />
      <StyledBlock>
        <a  name='#experience'/>
        <StyledHeader>EXPERIENCE</StyledHeader>
        <StyledExperienceBox>
          <ExperienceLine subtitle='BACKEND DEVELOPER'>
            ASPIRITY [INTERNSHIP] - 1 MONTH
          </ExperienceLine>
          <br />
          <br />
          <br />
          <ExperienceLine subtitle='TESTER'>
            SIBIRYAK-PROJECT [INTERNSHIP] - 1 MONTH
          </ExperienceLine>
        </StyledExperienceBox>
      </StyledBlock>
    </StyledFlex>
    <StyledFlex>
      <StyledLefted />
      <StyledWorkBlock>
        <a name='#work'/>
        <StyledHeader>WORK</StyledHeader>
        <StyledProjectsBox>
          <StyledProjectsHead>FEATURED PROJECTS</StyledProjectsHead>
          <ProjectCard
            title='EL-JOURNAL'
            description = 'A NICER LOOK AT YOUR GITHUB AW  W  EWQEQW KJUUYUHQWJE NSADIJHKEWQ IUHSJDSAKJ IUQWEH KH'
            used_tech = {['REACT', 'REDUX', 'DJANGO', 'DRF', 'POSTGRESQL']}
            direct_link = 'www.google.com'
            github_link = 'www.yandex.ru'
            image = 'https://themes.getbootstrap.com/wp-content/uploads/2018/06/dashkit-1.3.0-alt@2x-1200x900.png'
          />
        </StyledProjectsBox>
      </StyledWorkBlock>
    </StyledFlex>
    <StyledFlex>
      <StyledLefted />
      <StyledOtherWorkBlock>
        <ProjectCard
          toggle={true}
          title='ROSCOSMOS API'
          description = 'A NICER LOOK AT YOUR GITHUB AW  W QWEWQEQW KJUUYUHQWJE NSADIJHKEWQ IUHSJDSAKJ IUQWEH KH'
          used_tech = {['DJANGO', 'DRF', 'CELERY', 'REDIS', 'BS4', 'POSTGRESQL', 'DOCKER']}
          direct_link = 'www.google.com'
          github_link = 'www.yandex.ru'
          image = 'https://themes.getbootstrap.com/wp-content/uploads/2018/06/dashkit-1.3.0-alt@2x-1200x900.png'
        />
        <ProjectTable
          title='OTHER NOTEWORTHY PROJECTS'
          projects={other_projects}
        />
      </StyledOtherWorkBlock>
    </StyledFlex>
    <StyledFlex>
      <StyledLefted />
      <StyledContactBlock>
        <a  name='#contact'/>
        <StyledHeader>CONTACT</StyledHeader>
        <StyledContactBox>
          <StyledContactTitle>
            MAIL ME ON <StyledMailToLink>KI.XBOZZ@GMAIL.COM</StyledMailToLink>
          </StyledContactTitle>
        </StyledContactBox>
        <StyledCopyRight>© 2020 DESIGNED & CODED BY R.KARIMOV<br />BUILT WITH GATSBY</StyledCopyRight>
      </StyledContactBlock>
    </StyledFlex>
  </StyledMainContent>
)

export default MainContent
