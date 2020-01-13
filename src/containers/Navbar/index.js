import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

import Title from './components/Title'
import { StyledLeftAbsoluteNavbar, StyledSocialLinkBox, StyledMenu, StyledMenuItem, StyledSocialLink } from './styled'

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
      <StyledSocialLink href='https://github.com/Raysultan' target='_blank'>
        GITHUB
      </StyledSocialLink>
      <StyledSocialLink href='mailto: ki.xbozz@gmail.com' target='_blank'>
        GMAIL
      </StyledSocialLink>
      <StyledSocialLink href='https://vk.com/raysultan' target='_blank'>
        VK
      </StyledSocialLink>
    </StyledSocialLinkBox>
  </StyledLeftAbsoluteNavbar>
)

export default Navbar
