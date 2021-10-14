import { Image } from '../image'
import { Div } from '../div'

import IMAGE_PATH from '../../assets/images/lettuse.jpg'

export const Lettuce = () => (
  <Div>
    <Image alt={'image'} src={`${IMAGE_PATH}`}></Image>
  </Div>
)
