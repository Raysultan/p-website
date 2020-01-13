import React from "react"
import styled from 'styled-components'
import {slide as Menu} from 'react-burger-menu'

import './index.css'
import Navbar from '../containers/Navbar'
import MainContent from '../containers/MainContent'

const StyledBody = styled.div`
  display:flex;
  justify-content: space-between;
`

const IndexPage = () => (
  <StyledBody>
    <Menu right>
      <Navbar />
    </Menu>
    <Navbar display='none'/>
    <MainContent />
  </StyledBody>
)

export default IndexPage
