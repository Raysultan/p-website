import React from 'react'

import {StyledList, StyledListTitle} from '../styled'

export default ({title, children}) => (
  <StyledList>
    <StyledListTitle>{title}</StyledListTitle>
    {children}
  </StyledList>
)