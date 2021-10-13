import { Image, Div } from './styles'

import baconImage from '../../assets/images/bacon.jpg'

export const Bacon = () => (
  <Div>
    <Image alt={'image'} src={`${baconImage}`}></Image>
  </Div>
)
