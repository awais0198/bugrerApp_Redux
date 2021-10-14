import { Image } from '../image'
import { Div } from '../div'

import IMAGE_PATH from '../../assets/images/bacon.jpg'

export const Bacon = () => (
  <Div>
    <Image alt={'image'} src={`${IMAGE_PATH}`}></Image>
  </Div>
)
