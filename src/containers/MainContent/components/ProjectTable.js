import React from 'react'

import {StyledTableBox, StyledTableTitle, StyledTable, StyledTableRow, StyledTableHeader, StyledTableCell, StyledTableLink} from '../styled'

export default ({title, projects}) => {
  const table_content = projects.map(el => (
    <StyledTableRow>
      <StyledTableCell>{el.name}</StyledTableCell>
      <StyledTableCell>{el.used_tech}</StyledTableCell>
      <StyledTableCell>
        <StyledTableLink href={el.github_link}>GITHUB</StyledTableLink>
      </StyledTableCell>
    </StyledTableRow>
  ))

  return (
    <StyledTableBox>
      <StyledTableTitle>{title}</StyledTableTitle>
      <StyledTable>
        <StyledTableRow>
          <StyledTableHeader>NAME</StyledTableHeader>
          <StyledTableHeader>USED TECH</StyledTableHeader>
          <StyledTableHeader>LINK</StyledTableHeader>
        </StyledTableRow>
        {table_content}
      </StyledTable>
    </StyledTableBox>
  )
}