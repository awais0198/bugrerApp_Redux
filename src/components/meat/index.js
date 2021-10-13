import { Image, Div } from './styles'

import meatImage from '../../assets/images/meat.jpg'

export const Meat = () => (
  <Div>
    <Image alt={'image'} src={`${meatImage}`}></Image>
  </Div>
)
