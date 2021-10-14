import { Image, Div } from './styles'

import IMAGE_PATH from '../../assets/images/lettuse.jpg'

export const Lettuce = () => (
  <Div>
    <Image alt={'image'} src={`${IMAGE_PATH}`}></Image>
  </Div>
)
