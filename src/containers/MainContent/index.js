import React from 'react'

import { StyledLefted, StyledMainContent, StyledFlex, StyledBlockHome, StyledMainText, StyledBlockSkills } from './styled'

const MainContent = () => (
  <StyledMainContent>
    <StyledFlex>
      <StyledLefted />
      <StyledBlockHome>
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
      <StyledBlockSkills />
    </StyledFlex>
  </StyledMainContent>
)

export default MainContent
