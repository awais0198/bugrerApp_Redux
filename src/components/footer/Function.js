import { Button } from '..'
import './styles.css'

export const Functions = ({ text, handleAddItem, handleRemoveItem, ingredientQuantity }) => {
  return (
    <>
      <p>
        <b>{text} </b>
      </p>
      <div className={'ingr-btns'}>
        <Button text={'Add'} onClick={handleAddItem} />
        <Button
          text={'Remove'}
          onClick={handleRemoveItem}
          disabled={ingredientQuantity > 0 ? false : true}
        />
      </div>
    </>
  )
}
