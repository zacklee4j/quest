import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '../../components/QuestionComponent'
import {
  getNextSelectedId,
  insertNewComponent,
} from '../../utils/getNextSelectedId'
import cloneDeep from 'lodash.clonedeep'

// store component infomation
export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  isHidden?: boolean
  isLocked?: boolean
  //all the pomponents should use this props,so it should contain all kinds of compnents's infomation.
  props: ComponentPropsType
}

// define state type
export type ComponentsStateType = {
  selectedId: string
  componentsList: Array<ComponentInfoType>
  copiedComponent: ComponentInfoType | null
}
// initialize state
const INIT_COMPONENT_LIST: ComponentsStateType = {
  selectedId: '',
  componentsList: [],
  copiedComponent: null,
}

export const componentReducer = createSlice({
  name: 'component',
  initialState: INIT_COMPONENT_LIST,
  reducers: {
    // reset all components
    resetComponents: (
      state: ComponentsStateType,
      act: PayloadAction<ComponentsStateType>
    ) => {
      return act.payload
    },
    // change selected id
    changeSelectedId: (
      state: ComponentsStateType,
      act: PayloadAction<string>
    ) => {
      state.selectedId = act.payload
    },
    // add new component
    addNewComponent: (
      state: ComponentsStateType,
      act: PayloadAction<ComponentInfoType>
    ) => {
      const newComponent = act.payload
      insertNewComponent(state, newComponent)
    },
    // update component peops
    changeComponentProps: (
      state: ComponentsStateType,
      act: PayloadAction<{ fe_id: string; newProps: ComponentPropsType }>
    ) => {
      const { fe_id, newProps } = act.payload
      // find the component to update
      const targetComponent = state.componentsList.find(c => c.fe_id === fe_id)
      if (targetComponent) {
        targetComponent.props = {
          ...targetComponent.props,
          ...newProps,
        }
      }
    },
    deleteSelectedComponent: (state: ComponentsStateType) => {
      const { componentsList, selectedId } = state
      if (!selectedId) return
      const selectedIndex = componentsList.findIndex(
        c => c.fe_id === selectedId
      )
      // selected a new component
      state.selectedId = getNextSelectedId(selectedId, componentsList)
      state.componentsList.splice(selectedIndex, 1)
    },
    hiddenSelectedComponent: (
      state: ComponentsStateType,
      act: PayloadAction<{ fe_id: string; isHidden: boolean }>
    ) => {
      const { componentsList = [] } = state
      const { fe_id, isHidden } = act.payload
      let newSelectedId = ''
      if (isHidden) {
        newSelectedId = getNextSelectedId(fe_id, componentsList)
      } else {
        newSelectedId = fe_id
      }
      state.selectedId = newSelectedId
      const curComponent = componentsList.find(c => c.fe_id === fe_id)

      if (curComponent) {
        curComponent.isHidden = isHidden
      }
    },
    lockSelectedComponent: (
      state: ComponentsStateType,
      act: PayloadAction<{ fe_id: string }>
    ) => {
      // get selected component fe_id
      const { fe_id } = act.payload
      const { componentsList } = state
      if (!fe_id) return
      // get selected Component
      const curCopmp = componentsList.find(c => c.fe_id === fe_id)
      if (curCopmp) {
        curCopmp.isLocked = !curCopmp.isLocked
      }
    },
    copySelectedComponent: (state: ComponentsStateType) => {
      const { selectedId, componentsList } = state
      const selectedComponent = componentsList.find(c => c.fe_id === selectedId)
      if (!selectedComponent) return
      state.copiedComponent = cloneDeep(selectedComponent)
    },
    pasteCopiedComponent: (state: ComponentsStateType) => {
      const { copiedComponent } = state
      if (!copiedComponent) return
      copiedComponent.fe_id = nanoid()
      insertNewComponent(state, copiedComponent)
    },
  },
})

export const {
  resetComponents,
  changeSelectedId,
  addNewComponent,
  changeComponentProps,
  hiddenSelectedComponent,
  deleteSelectedComponent,
  lockSelectedComponent,
  copySelectedComponent,
  pasteCopiedComponent,
} = componentReducer.actions
export default componentReducer.reducer
