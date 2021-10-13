import { IngrBtn } from './styles'

export const Button = ({ text, onClick, disabled = false }) => (
  <IngrBtn className={'ingr-btn'} onClick={() => onClick()} disabled={disabled}>
    {text}
  </IngrBtn>
)
