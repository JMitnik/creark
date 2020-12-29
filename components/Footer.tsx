import styled, { css } from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Footer = styled.div(({ isSmall }) => [
  tw``,
  isSmall && tw``,
  css``
])
