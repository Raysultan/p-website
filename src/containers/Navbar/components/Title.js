import React from 'react'

import {StyledTitle, StyledSubtitle} from '../styled'

export default ({subtitle, children}) => (
  <div>
    <StyledTitle>
      {children}
    </StyledTitle>
    <StyledSubtitle>
      [{subtitle}]
    </StyledSubtitle>
  </div>
)