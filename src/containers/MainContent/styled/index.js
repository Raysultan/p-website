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
  line-height: 1.2;
`

export const StyledBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 5;
  padding: 100px;
`

export const StyledHeader = styled.a`
  font-size: 52px;
  color: #FFFFFF;
`

export const StyledListItem = styled.li`
  list-style-type: none;
  font-size: 20px;
  color: #7D7474;
  line-height: 1.6;
`

export const StyledListTitle = styled.h3`
  font-size: 30px;
  line-height: 1.8;
  color: #FFFFFF;
`

export const StyledList = styled.ul`
`

export const StyledListBox = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledExperienceLineBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledExperienceTitle = styled.h2`
  font-size: 34px;
  color: #7D7474;
  margin-bottom: 10px;
`

export const StyledExperienceSubtitle = styled.span`
  font-size: 18px;
  color: #7D7474;
`

export const StyledExperienceBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 160px;
`

export const StyledWorkBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 5;
  padding: 0 100px 100px 100px;
`

export const StyledProjectsBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledProjectsHead = styled.div`
  font-size: 36px;
  color: #7D7474;
  margin-bottom: 78px;
`

export const StyledProjectCard = styled.div`
  display: flex;
  height: 30vh;
  width: 60vw;
  border: 1px solid #FFFFFF;
`

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export const StyledProjectCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({toggle}) => toggle ? `flex-start` : `flex-end`};
  padding: 35px;
`

export const StyledProjectCardTitle = styled.h3`
  font-size: 36px;
  color: #7D7474;
`

export const StyledProjectCardDescBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledProjectCardDesc = styled.div`
  font-size: 18px;
  color: #7D7474;
`

export const StyledProjectCardUsedTechBox = styled.div`
  display: flex;
  margin-top: 10px;
`

export const StyledProjectCardUsedTech = styled.span`
  font-size: 12px;
  color: #7D7474;
  margin-right: 10px;
`

export const StyledLinkBox = styled.div`
  display: flex;
`

export const StyledLink = styled.a`
  color: #FFFFFF;
  font-size: 14px;
  margin: ${({toggle}) => toggle ? `0 16px 0 0` : `0 0 0 16px`};
`

export const StyledOtherWorkBlock = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 5;
  padding: 0 100px 100px 100px;
`

export const StyledTableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
`

export const StyledTableTitle = styled.h3`
  font-size: 36px;
  color: #FFFFFF;
  margin-bottom: 30px;
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
`

export const StyledTableCell = styled.td`
  font-size: 18px;
  color: #7D7474;
  padding: 8px;
`

export const StyledTableLink = styled.a`
  font-size: 16px;
  color: #FFFFFF;
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
`

export const StyledMailToLink = styled.a`
  font-size: 54px;
  color: #FFFFFF;
`

export const StyledCopyRight = styled.span`
  font-size: 14px;
  color: #FFFFFF;
  line-height: 1.6;
`