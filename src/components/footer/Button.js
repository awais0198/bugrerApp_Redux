import './styling.css'

export const Button = ({ text, onClick, disabled = false }) => (
  <button className={'ingr-btn'} onClick={() => onClick()} disabled={disabled}>
    {text}
  </button>
)
