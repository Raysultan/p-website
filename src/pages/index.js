import React from "react"
import {Helmet} from 'react-helmet'
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
    <Helmet>
      <meta charSet='utf-8' />
      <title>Raysultan Karimov</title>
    </Helmet>
    <Menu right>
      <Navbar />
    </Menu>
    <Navbar display='none'/>
    <MainContent />
  </StyledBody>
)

export default IndexPage
