import React from 'react'

import {StyledProjectCard, StyledImage, StyledProjectCardBody, StyledProjectCardTitle, StyledProjectCardDescBox, StyledProjectCardDesc, StyledProjectCardUsedTechBox, StyledProjectCardUsedTech, StyledLinkBox, StyledLink} from '../styled'

export default ({toggle, title, description, used_tech, direct_link, github_link, image}) => {
  const used_tech_mapped = used_tech.map((el) => <StyledProjectCardUsedTech>{el}</StyledProjectCardUsedTech>)
  if(!toggle) return (
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
              GITHUB
            </StyledLink>
          )
          }
        </StyledLinkBox>
      </StyledProjectCardBody>
    </StyledProjectCard>
  )
  else return (
    <StyledProjectCard>
      <StyledProjectCardBody toggle={true}>
        <StyledProjectCardTitle>{title}</StyledProjectCardTitle>
        <StyledProjectCardDescBox>
          <StyledProjectCardDesc>{description}</StyledProjectCardDesc>
          <StyledProjectCardUsedTechBox>
            {used_tech_mapped}
          </StyledProjectCardUsedTechBox>
        </StyledProjectCardDescBox>
        <StyledLinkBox>
          { direct_link && (
            <StyledLink
              toggle={true}
              href={direct_link} aria-label='Direct Link'
            >
              DIRECT LINK
            </StyledLink>
          )
          }

          { github_link && (
            <StyledLink
              toggle={true}
              href={github_link} aria-label='Github Link'
            >
              GITHUB
            </StyledLink>
          )
          }
        </StyledLinkBox>
      </StyledProjectCardBody>
      <StyledImage src={image} />
    </StyledProjectCard>
  )
}