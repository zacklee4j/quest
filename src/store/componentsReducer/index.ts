import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '../../components/QuestionComponent'
import { produce } from 'immer'
import { Component } from 'react'
import getNextSelectedId from '../../utils/getNextSelectedId'

// store component infomation
export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  isHidden?: boolean
  //all the pomponents should use this props,so it should contain all kinds of compnents's infomation.
  props: ComponentPropsType
}

// define state type
export type ComponentsStateType = {
  selectedId: string
  componentsList: Array<ComponentInfoType>
}
// initialize state
const INIT_COMPONENT_LIST: ComponentsStateType = {
  selectedId: '',
  componentsList: [],
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
      const { selectedId, componentsList } = state
      const index = componentsList.findIndex(c => c.fe_id === selectedId)
      if (index < 0) {
        componentsList.push(newComponent)
      } else {
        componentsList.splice(index + 1, 0, newComponent)
      }
      state.selectedId = newComponent.fe_id
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
  },
})

export const {
  resetComponents,
  changeSelectedId,
  addNewComponent,
  changeComponentProps,
  hiddenSelectedComponent,
  deleteSelectedComponent,
} = componentReducer.actions
export default componentReducer.reducer
