import { useSelector } from 'react-redux'
import { StateType } from '../store'
import { ComponentsStateType } from '../store/componentsReducer'

function useGetComponentInfo() {
  const component = useSelector<StateType>(
    state => state.components
  ) as ComponentsStateType
  const { componentsList = [], selectedId = '', copiedComponent } = component
  const selectedComponent = componentsList.find(c => c.fe_id === selectedId)
  return { componentsList, selectedId, selectedComponent, copiedComponent }
}

export default useGetComponentInfo
