import { Image, Div } from './styles'

import IMAGE_PATH from '../../assets/images/meat.jpg'

export const Meat = () => (
  <Div>
    <Image alt={'image'} src={`${IMAGE_PATH}`}></Image>
  </Div>
)
