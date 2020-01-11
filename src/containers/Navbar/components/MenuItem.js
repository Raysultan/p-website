import React from 'react'

import {StyledMenuItem} from '../styled'

export default ({link, children}) => (
  <StyledMenuItem href={link}>
    {children}
  </StyledMenuItem>
)
