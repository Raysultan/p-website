import styled from 'styled-components'

export const StyledMainContent = styled.div`
  background: #000000;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export const StyledFlex = styled.div`
  display: flex;
`

export const StyledLefted = styled.div`
  width: 260px;
  height: 100%;
  @media (max-width: 1110px) {
    width: 200px;
  }
  @media (max-width: 1000px) {
    width: 160px;
  }
  @media (max-width: 830px) {
    display: none !important;
  }
`

export const StyledBlockHome = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 5;
`

export const StyledMainText = styled.div`
  width: 750px;
  height: 235px;
  color: #FFFFFF;
  word-wrap: break-word;
  font-size: 24px;
  line-height: 1.4;
  @media (max-width: 1080px) {
    width: 50vw;
    height: auto;
  }
  @media (max-width: 1000px) {
    width: 60vw;
    font-size: 20px;
  }
`

export const StyledBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 5;
  padding: 100px;
  @media (max-width: 1000px) {
    padding: 64px;
  }
`

export const StyledHeader = styled.a`
  font-size: 52px;
  color: #FFFFFF;
  margin-bottom: 50px;
  @media (max-width: 830px) {
    font-size: 42px;
  }
`

export const StyledListItem = styled.li`
  list-style-type: none;
  font-size: 20px;
  color: #7D7474;
  line-height: 1.6;
  @media (max-width: 1300px) {
    font-size: 16px;
  }
`

export const StyledListTitle = styled.h3`
  font-size: 30px;
  line-height: 1.8;
  color: #FFFFFF;
  @media (max-width: 1300px) {
    font-size: 20px;
  }
`

export const StyledList = styled.ul`
  margin: 0 20px 20px 0;
`

export const StyledListBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1300px) {
    flex-wrap: wrap;
  }
`

export const StyledExperienceLineBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledExperienceTitle = styled.h2`
  font-size: 34px;
  color: #7D7474;
  margin-bottom: 10px;
  @media (max-width: 1300px) {
    font-size: 26px;
  }
  @media (max-width: 1060px) {
    font-size: 20px;
  }
`

export const StyledExperienceSubtitle = styled.span`
  font-size: 18px;
  color: #7D7474;
  @media (max-width: 1060px) {
    font-size: 14px;
  }
`

export const StyledExperienceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  @media (max-width: 1000px) {
    padding-bottom: 100px;
  }
`

export const StyledWorkBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 5;
  padding: 100px;
`

export const StyledProjectsBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledProjectsHead = styled.div`
  font-size: 36px;
  color: #7D7474;
  margin-bottom: 78px;
  @media (max-width: 920px) {
    font-size: 26px;
    margin-bottom: 40px;
  }
`

export const StyledProjectCard = styled.div`
  display: flex;
  height: 20vw;
  width: 60vw;
  border: 1px solid #FFFFFF;
  @media (max-width: 920px) {
    height: 25vw;
  }
  @media (max-width: 830px) {
    width: 80vw;
    height: 30vw;
  }
  @media (max-width: 720px) {
    height: 34vw;
    width: 100%;
  }
`

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
`

export const StyledProjectCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({toggle}) => toggle ? `flex-start` : `flex-end`};
  padding: 30px;
  @media (max-width: 1300px) {
    padding: 20px;
  }
`

export const StyledProjectCardTitle = styled.h3`
  font-size: 36px;
  color: #7D7474;
  margin-bottom: 15px;
  @media (max-width: 1110px) {
    font-size: 24px;
  }
  @media (max-width: 920px) {
    font-size: 18px;
  }
  @media (max-width: 720px) {
    font-size: 20px;
  }
`

export const StyledProjectCardDescBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

export const StyledProjectCardDesc = styled.div`
  font-size: 18px;
  color: #7D7474;
  @media (max-width: 1110px) {
    font-size: 14px;
  }
`

export const StyledProjectCardUsedTechBox = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
`

export const StyledProjectCardUsedTech = styled.span`
  font-size: 12px;
  color: #7D7600;
  margin: 4px 10px 0 0;
  font-weight: 600;
`

export const StyledLinkBox = styled.div`
  display: flex;
`

export const StyledLink = styled.a`
  color: #FFFFFF;
  font-size: 14px;
  margin: ${({toggle}) => toggle ? `0 16px 0 0` : `0 0 0 16px`};
  @media (max-width: 920px) {
    font-size: 12px;
  }
`

export const StyledOtherWorkBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 5;
  padding: 0 100px 100px 100px;
  @media (max-width: 1000px) {
    padding: 0 64px 64px 64px;
  }
`

export const StyledTableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  margin-top: 100px;
`

export const StyledTableTitle = styled.h3`
  font-size: 36px;
  color: #FFFFFF;
  margin-bottom: 30px;
  @media (max-width: 1110px) {
    font-size: 30px;
  }
  @media (max-width: 920px) {
    font-size: 24px;
  }
`

export const StyledTable = styled.table`
  border-collapse: collapse;
`

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid #FFFFFF;
`

export const StyledTableHeader = styled.th`
  font-size: 24px;
  color: #FFFFFF;
  text-align: left;
  padding: 10px;
  @media (max-width: 1110px) {
    font-size: 20px;
  }
`

export const StyledTableCell = styled.td`
  font-size: 18px;
  color: #7D7474;
  padding: 8px;
  @media (max-width: 1110px) {
    font-size: 16px;
  }
  @media (max-width: 720px) {
    font-size: 13px;
  }
`

export const StyledTableLink = styled.a`
  font-size: 16px;
  color: #FFFFFF;
  @media (max-width: 1110px) {
    font-size: 15px;
  }
  @media (max-width: 720px) {
    font-size: 13px;
  }
`

export const StyledContactBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 5;
  padding: 100px;
`

export const StyledContactBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledContactTitle = styled.h3`
  font-size: 50px;
  color: #7D7474;
  @media (max-width: 1110px) {
    font-size: 30px;
  }
`

export const StyledMailToLink = styled.a`
  font-size: 54px;
  color: #FFFFFF;
  @media (max-width: 1110px) {
    font-size: 32px;
  }
`

export const StyledCopyRight = styled.span`
  font-size: 14px;
  color: #FFFFFF;
  line-height: 1.6;
  @media (max-width: 1110px) {
    font-size: 12px;
  }
`