import { Image } from 'components/image'
import { Div } from 'components/div'

import IMAGE_PATH from 'assets/images/lettuse.jpg'

export const Lettuce = () => (
  <Div>
    <Image alt={'image'} src={`${IMAGE_PATH}`}></Image>
  </Div>
)
