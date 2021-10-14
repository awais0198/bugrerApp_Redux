import { Image } from '../image'
import { Div } from '../div'

import IMAGE_PATH from '../../assets/images/cheese.jpg'

export const Cheese = () => (
  <Div>
    <Image alt={'image'} src={`${IMAGE_PATH}`}></Image>
  </Div>
)
