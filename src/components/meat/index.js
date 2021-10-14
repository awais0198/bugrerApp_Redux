import { Image } from '../image'
import { Div } from '../div'

import IMAGE_PATH from '../../assets/images/meat.jpg'

export const Meat = () => (
  <Div>
    <Image alt={'image'} src={`${IMAGE_PATH}`}></Image>
  </Div>
)
