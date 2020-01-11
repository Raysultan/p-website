import React from "react"
import styled from 'styled-components'

import './index.css'
import Navbar from '../containers/Navbar'
import MainContent from '../containers/MainContent'

const StyledBody = styled.div`
  display:flex;
  justify-content: space-between;
`

const IndexPage = () => (
  <StyledBody>
    <Navbar />
    <MainContent />
  </StyledBody>
)

export default IndexPage
