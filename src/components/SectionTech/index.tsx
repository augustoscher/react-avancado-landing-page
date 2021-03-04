import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { TechProps } from '../../types/api'
import { getImageUrl } from '../../utils/getImageUrl'

const SectionTech = ({ title, techIcons }: TechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(({ icon }) => (
          <S.Icon key={icon.name}>
            <S.Icons
              src={getImageUrl(icon.url)}
              alt={icon.alternativeText}
              loading="lazy"
            />
            <S.IconsName>{icon.name}</S.IconsName>
          </S.Icon>
        ))}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
