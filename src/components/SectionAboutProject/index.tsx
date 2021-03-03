import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import * as S from './styles'
import { AboutProjectProps } from 'types/api'
import { getImageUrl } from '../../utils/getImageUrl'

type Props = {
  about: AboutProjectProps
}

const SectionAboutProject = ({ about }: Props) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image>
          <source
            srcSet={require('@images/project.png?webp')}
            type="image/webp"
          />
          <source srcSet={require('@images/project.png')} type="image/png" />
          <img
            src={getImageUrl(about.image.url)}
            loading="lazy"
            alt={about.image.alternativeText}
          />
        </S.Image>
        <div>
          <Heading>{about.title}</Heading>
          <S.Text
            dangerouslySetInnerHTML={{ __html: about.description }}
          ></S.Text>
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
