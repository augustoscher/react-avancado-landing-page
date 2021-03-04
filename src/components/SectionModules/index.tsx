import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import CardModule from 'components/CardModule'

import content from './content'
import * as S from './styles'
import { ModulesProps } from '../../types/api'

type Props = {
  modules: ModulesProps
}

const SectionModules = ({ modules }: Props) => (
  <Container>
    <Heading reverseColor>{modules.title}</Heading>

    <S.Content>
      {modules.modules.map(({ title, subtitle, description }, index) => (
        <CardModule key={index} title={title} subTitle={subtitle}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </CardModule>
      ))}
    </S.Content>
  </Container>
)

export default SectionModules
