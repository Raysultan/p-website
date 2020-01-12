import React from 'react'

import {StyledProjectCard, StyledImage, StyledProjectCardBody, StyledProjectCardTitle, StyledProjectCardDescBox, StyledProjectCardDesc, StyledProjectCardUsedTechBox, StyledProjectCardUsedTech, StyledLinkBox, StyledLink} from '../styled'

export default ({title, description, used_tech, direct_link, github_link, image}) => {
  const used_tech_mapped = used_tech.map((el) => <StyledProjectCardUsedTech>{el}</StyledProjectCardUsedTech>)
  return (
    <StyledProjectCard>
      <StyledImage src={image} />
      <StyledProjectCardBody>
        <StyledProjectCardTitle>{title}</StyledProjectCardTitle>
        <StyledProjectCardDescBox>
          <StyledProjectCardDesc>{description}</StyledProjectCardDesc>
          <StyledProjectCardUsedTechBox>
            {used_tech_mapped}
          </StyledProjectCardUsedTechBox>
        </StyledProjectCardDescBox>
        <StyledLinkBox>
          { direct_link && (
            <StyledLink href={direct_link} aria-label='Direct Link'>
              DIRECT LINK
            </StyledLink>
          )
          }

          { github_link && (
            <StyledLink href={github_link} aria-label='Github Link'>
              GITHUB LINK
            </StyledLink>
          )
          }
        </StyledLinkBox>
      </StyledProjectCardBody>
    </StyledProjectCard>
  )
}