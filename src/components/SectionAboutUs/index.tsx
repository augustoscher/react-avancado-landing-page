import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import * as S from './styles'
import { AboutUsProps } from 'types/api'

type Props = {
  about: AboutUsProps
}

const SectionAboutUs = ({ about }: Props) => (
  <Container>
    <Heading reverseColor>{about.title}</Heading>

    <S.Content>
      {about.authors.map(({ name, role, description, photo, socialLinks }) => (
        <ProfileCard
          key={name}
          name={name}
          role={role}
          photo={photo}
          socialLinks={socialLinks}
          description={description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
