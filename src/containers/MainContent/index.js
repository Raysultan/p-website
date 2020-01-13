import React from 'react'

import { StyledLefted, StyledMainContent, StyledFlex, StyledBlockHome, StyledMainText, StyledBlock, StyledHeader, StyledListBox, StyledListItem, StyledExperienceBox, StyledProjectsBox, StyledProjectsHead, StyledOtherWorkBlock, StyledContactBox, StyledContactTitle, StyledMailToLink, StyledCopyRight } from './styled'
import List from './components/List'
import ExperienceLine from './components/ExperienceLine'
import ProjectCard from './components/ProjectCard'
import ProjectTable from './components/ProjectTable'

const other_projects = [
  {
    name: 'RECIPE BOOK API',
    used_tech: 'DJANGO DRF POSTGRESQL DOCKER',
    github_link: 'https://github.com/Raysultan/recipe-app-api',
  },
  {
    name: 'GRAPH ALGOS',
    used_tech: 'VUE FIREBASE',
    github_link: 'https://github.com/Raysultan/graphalgos',
  },
  {
    name: 'PRODUCTHUNT',
    used_tech: 'DJANGO POSTGRESQL',
    github_link: 'https://github.com/Raysultan/product-hunt',
  },
  {
    name: 'LEARN RSA',
    used_tech: 'HTML SASS JQUERY',
    github_link: 'https://github.com/Raysultan/LearnRSA',
  },
  {
    name: 'BLOG ENGINE',
    used_tech: 'DJANGO POSTGRESQL',
    github_link: 'https://github.com/Raysultan/blog-engine',
  },
]

const MainContent = () => (
  <StyledMainContent>
    <StyledFlex>
      <StyledLefted />
      <StyledBlockHome id='home'>
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
      <StyledBlock id='skills'>
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
      <StyledBlock id='experience'>
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
      <StyledBlock id='work'>
        <StyledHeader>WORK</StyledHeader>
        <StyledProjectsBox>
          <StyledProjectsHead>FEATURED PROJECTS</StyledProjectsHead>
          <ProjectCard
            title='EL-JOURNAL'
            description = 'A SYSTEM FOR STUDENTS PERFORMANCE TRACKING IN SECONDARY SCHOOLS.'
            used_tech = {['REACT', 'REDUX', 'DJANGO', 'DRF', 'POSTGRESQL']}
            github_link = 'https://github.com/Raysultan/el-journal'
            image = 'https://raw.githubusercontent.com/Raysultan/el-journal/develop/images/timetable.png'
          />
        </StyledProjectsBox>
      </StyledBlock>
    </StyledFlex>
    <StyledFlex>
      <StyledLefted />
      <StyledOtherWorkBlock>
        <ProjectCard
          toggle={true}
          title='ROSCOSMOS API'
          description = 'OPEN SOURCE API BASED ON ROSCOSMOS DATA FOR ROCKETS, LAUNCHES, LAUNCH PADS, SPACETUGS, ETC.'
          used_tech = {['DJANGO', 'DRF', 'CELERY', 'REDIS', 'BS4', 'POSTGRESQL', 'DOCKER']}
          direct_link = 'http://roscosmos.xyz/'
          github_link = 'https://github.com/Raysultan/roscosmos-api'
          image = 'https://www.roscosmos.ru/cache/resized/news/index/splash/roscosmos_bluebackground.png'
        />
        <ProjectTable
          title='OTHER NOTEWORTHY PROJECTS'
          projects={other_projects}
        />
      </StyledOtherWorkBlock>
    </StyledFlex>
    <StyledFlex>
      <StyledLefted />
      <StyledBlock id='contact'>
        <StyledHeader>CONTACT</StyledHeader>
        <StyledContactBox>
          <StyledContactTitle>
            MAIL ME ON <StyledMailToLink href='mailto: ki.xbozz@gmail.com'>KI.XBOZZ@GMAIL.COM</StyledMailToLink>
          </StyledContactTitle>
        </StyledContactBox>
        <StyledCopyRight>© 2020 DESIGNED & CODED BY R.KARIMOV<br />BUILT WITH GATSBY</StyledCopyRight>
      </StyledBlock>
    </StyledFlex>
  </StyledMainContent>
)

export default MainContent
