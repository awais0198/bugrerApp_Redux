import { Image } from '../image'
import { Div } from '../div'

import IMAGE_PATH from '../../assets/images/top.jpg'

export const UpperBurger = () => (
  <Div>
    <Image alt={'image'} src={`${IMAGE_PATH}`}></Image>
  </Div>
)
