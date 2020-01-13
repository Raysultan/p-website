import React from 'react'

import {StyledProjectCard, StyledImage, StyledProjectCardBody, StyledProjectCardTitle, StyledProjectCardDescBox, StyledProjectCardDesc, StyledProjectCardUsedTechBox, StyledProjectCardUsedTech, StyledLinkBox, StyledLink} from '../styled'

export default ({toggle, title, description, used_tech, direct_link, github_link, image}) => {
  const used_tech_mapped = used_tech.map((el) => <StyledProjectCardUsedTech>{el}</StyledProjectCardUsedTech>)
  const used_tech_mapped_toggled = used_tech.map((el) => <StyledProjectCardUsedTech toggle>{el}</StyledProjectCardUsedTech>)
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
            <StyledLink
              href={direct_link}
              target='_blank'
              aria-label='Direct Link'
              target='_blank'
            >
              DIRECT LINK
            </StyledLink>
          )
          }

          { github_link && (
            <StyledLink
              href={github_link}
              target='_blank'
              aria-label='Github Link'
            >
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
      <StyledProjectCardBody toggle>
        <StyledProjectCardTitle>{title}</StyledProjectCardTitle>
        <StyledProjectCardDescBox toggle>
          <StyledProjectCardDesc toggle>{description}</StyledProjectCardDesc>
          <StyledProjectCardUsedTechBox toggle>
            {used_tech_mapped_toggled}
          </StyledProjectCardUsedTechBox>
        </StyledProjectCardDescBox>
        <StyledLinkBox>
          { direct_link && (
            <StyledLink
              toggle
              href={direct_link}
              aria-label='Direct Link'
              target='_blank'
            >
              DIRECT LINK
            </StyledLink>
          )
          }

          { github_link && (
            <StyledLink
              toggle
              href={github_link}
              aria-label='Github Link'
              target='_blank'
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