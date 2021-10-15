import { IngrBtn } from 'components/button/styles'

export const Button = ({ text, onClick, disabled = false }) => (
  <IngrBtn className={'ingr-btn'} onClick={() => onClick()} disabled={disabled}>
    {text}
  </IngrBtn>
)
