import { ComponentInfoType } from '../store/componentsReducer'

function getNextSelectedId(fe_id: string, componentsList: ComponentInfoType[]) {
  const visableComponentLists = componentsList.filter(c => !c.isHidden)
  const selectedIndex = visableComponentLists.findIndex(c => c.fe_id === fe_id)

  if (selectedIndex < 0) return ''

  let newSelectedId = ''
  const length = visableComponentLists.length
  console.log(selectedIndex, length)
  if (length <= 1) {
    newSelectedId = ''
  } else {
    if (selectedIndex + 1 === length) {
      newSelectedId = visableComponentLists[selectedIndex - 1].fe_id
    } else {
      console.log(visableComponentLists)
      newSelectedId = visableComponentLists[selectedIndex + 1].fe_id
    }
  }

  return newSelectedId
}

export default getNextSelectedId
