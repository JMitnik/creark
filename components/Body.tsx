import styled, { css } from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Body = styled.div(({ isSmall }) => [
  tw`flex flex-col items-center justify-center h-screen`,
  tw`bg-gradient-to-b from-blue-700 to-blue-500`
])
