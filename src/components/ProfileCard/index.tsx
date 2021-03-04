import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import * as S from './styles'

import { AuthorProps } from 'types/api'
import { getImageUrl } from '../../utils/getImageUrl'

const icons = {
  twitter: <FaTwitter />,
  github: <GrGithub />,
  dribbble: <FaDribbble />
}

// type socialLinks = {
//   slug: string
//   link: string
// }

// type Props = {
//   name: string
//   role: string
//   image: string
//   socialLinks: socialLinks[]
//   description: string
// }

const ProfileCard: React.FC<AuthorProps> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image>
      <source srcSet={getImageUrl(photo.url)} type="image/webp" />
      <source srcSet={getImageUrl(photo.url)} type="image/png" />
      <img
        src={getImageUrl(photo.url)}
        loading="lazy"
        alt={photo.alternativeTex}
      />
    </S.Image>
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map(({ title, url }) => (
        <S.Link key={title}>
          <a href={url} title={title}>
            {icons[title.toLowerCase()]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
