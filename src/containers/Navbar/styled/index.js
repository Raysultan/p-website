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
  @media (max-width: 1110px) {
    width: 200px;
  }
  @media (max-width: 1000px) {
    width: 160px;
  }
  @media (max-width: 830px) {
    display: ${({display}) => display} !important;
    position: relative;
    width: 100%;
    padding: 40px;
  }
`

export const StyledSocialLink = styled.a`
  margin-right: 8px;
  font-size: 16px;
  color: #FFFFFF;
  text-decoration: none;
  @media (max-width: 1110px) {
    font-size: 14px;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
  @media (max-width: 830px) {
    font-size: 16px;
    margin-right: 14px;
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
  @media (max-width: 1110px) {
    font-size: 26px;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 830px) {
    font-size: 22px;
  }
`

export const StyledSubtitle = styled.h3`
  font-size: 20px;
  color: #8B8484;
  margin-top: 4px;
  font-weight: 400;
  @media (max-width: 1110px) {
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    font-size: 12px;
  }
  @media (max-width: 830px) {
    font-size: 16px;
  }
`

export const StyledMenuItem = styled.a`
  font-size: 24px;
  line-height: 1.6;
  color: #FFFFFF;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1110px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 830px) {
    font-size: 23px;
  }
`

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
`
