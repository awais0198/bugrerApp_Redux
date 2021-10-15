import { Button } from 'components'
import { IngrBtns } from 'containers/footer/styles'

export const Functions = ({ text, handleAddItem, handleRemoveItem, ingredientQuantity }) => {
  return (
    <>
      <p>
        <b>{text} </b>
      </p>
      <IngrBtns>
        <Button text={'Add'} onClick={handleAddItem} />
        <Button
          text={'Remove'}
          onClick={handleRemoveItem}
          disabled={ingredientQuantity > 0 ? false : true}
        />
      </IngrBtns>
    </>
  )
}
