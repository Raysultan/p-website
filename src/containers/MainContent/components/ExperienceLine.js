import React from 'react'

import {StyledExperienceLineBox, StyledExperienceTitle, StyledExperienceSubtitle} from '../styled'

export default ({subtitle, children}) => (
  <StyledExperienceLineBox>
    <StyledExperienceTitle>{children}</StyledExperienceTitle>
    <StyledExperienceSubtitle>{subtitle}</StyledExperienceSubtitle>
  </StyledExperienceLineBox>
)
