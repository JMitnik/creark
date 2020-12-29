import styled, { css } from 'styled-components'
import tw, { theme } from 'twin.macro'

export const HeaderWrapper = styled.div(({ isSmall }) => [
  tw``,
  isSmall && tw``,
  css``
])

export const Header = () => (
  <HeaderWrapper tw="mt-4">
    <div>test</div>
  </HeaderWrapper>
)
