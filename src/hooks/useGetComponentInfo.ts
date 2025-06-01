import { useSelector } from 'react-redux'
import { StateType } from '../store'
import { ComponentsStateType } from '../store/componentsReducer'

function useGetComponentInfo() {
  const component = useSelector<StateType>(
    state => state.components
  ) as ComponentsStateType
  const { componentsList = [], selectedId = '' } = component
  return { componentsList, selectedId }
}

export default useGetComponentInfo
