import tw from 'twin.macro'
import { Button, Logo } from '../components'
import { Body } from '../components/Body'
import { Header } from '../components/Header'

const App = () => (
  <Body>
    <div tw="flex flex-col justify-center h-full space-y-5">
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
  </Body>
)

export default App
