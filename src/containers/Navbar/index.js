import React from 'react'

import Title from './components/Title'
import SocialLink from './components/SocialLink'
import MenuItem from './components/MenuItem'
import {StyledLeftAbsoluteNavbar, StyledSocialLinkBox, StyledMenu} from './styled'

const Navbar = () => (
  <StyledLeftAbsoluteNavbar>
    <Title subtitle='WEB DEVELOPER'>RAYSULTAN KARIMOV</Title>

    <StyledMenu>
      <MenuItem link=''>HOME</MenuItem>
      <MenuItem link=''>SKILLS</MenuItem>
      <MenuItem link=''>EXPERIENCE</MenuItem>
      <MenuItem link=''>WORK</MenuItem>
      <MenuItem link=''>CONTACT</MenuItem>
    </StyledMenu>
    <StyledSocialLinkBox>
      <SocialLink>GITHUB</SocialLink>
      <SocialLink>GMAIL</SocialLink>
      <SocialLink>VK</SocialLink>
    </StyledSocialLinkBox>
  </StyledLeftAbsoluteNavbar>
)

export default Navbar
