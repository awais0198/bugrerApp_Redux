export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[text='${attr}']`)
  return wrapper
}
