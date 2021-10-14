import { Image, Div } from './styles'

import IMAGE_PATH from '../../assets/images/cheese.jpg'

export const Cheese = () => (
  <Div>
    <Image alt={'image'} src={`${IMAGE_PATH}`}></Image>
  </Div>
)
