import React from 'react'
import * as S from './styles'
import { LogoProps } from '../../types/api'

const Logo = ({ url, alternativeText }: LogoProps) => (
  <S.LogoWrapper src={url} alt={alternativeText} />
)

export default Logo
