import styled from 'styled-components'


export const StyledLeftAbsoluteNavbar = styled.div`
  margin: 0;
  padding: 25px;
  height: 100vh;
  width: 260px;
  position: fixed;
  background: #2e2e2e;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledSocialLink = styled.a`
  margin-left: 15px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

export const StyledSocialLinkBox = styled.div`
  display: inline-block;
  bottom: 0;
`

export const StyledTitle = styled.h1`
  font-size: 32px;
  color: #FFFFFF;
  font-weight: 100;
`

export const StyledSubtitle = styled.h3`
  font-size: 20px;
  color: #7D7474;
  font-weight: 400;
`

export const StyledMenuItem = styled.a`
  font-size: 24px;
  line-height: 1.3;
  color: #FFFFFF;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
`
