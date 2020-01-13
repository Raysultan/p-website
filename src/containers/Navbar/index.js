import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

import Title from './components/Title'
import SocialLink from './components/SocialLink'
import { StyledLeftAbsoluteNavbar, StyledSocialLinkBox, StyledMenu, StyledMenuItem } from './styled'

const Navbar = ({display}) => (
  <StyledLeftAbsoluteNavbar display={display}>
    <Title subtitle='WEB DEVELOPER'>RAYSULTAN KARIMOV</Title>
    <StyledMenu>
      <StyledMenuItem onClick={() => scrollTo('#home')}>HOME</StyledMenuItem>
      <StyledMenuItem onClick={() => scrollTo('#skills')}>SKILLS</StyledMenuItem>
      <StyledMenuItem onClick={() => scrollTo('#experience')}>EXPERIENCE</StyledMenuItem>
      <StyledMenuItem onClick={() => scrollTo('#work')}>WORK</StyledMenuItem>
      <StyledMenuItem onClick={() => scrollTo('#contact')}>CONTACT</StyledMenuItem>
    </StyledMenu>
    <StyledSocialLinkBox>
      <SocialLink>GITHUB</SocialLink>
      <SocialLink>GMAIL</SocialLink>
      <SocialLink>VK</SocialLink>
    </StyledSocialLinkBox>
  </StyledLeftAbsoluteNavbar>
)

export default Navbar
