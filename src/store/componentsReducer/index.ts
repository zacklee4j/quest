import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComponentPropsType } from '../../components/QuestionComponent'
import { produce } from 'immer'
import { Component } from 'react'

// store component infomation
export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
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
  },
})

export const { resetComponents, changeSelectedId, addNewComponent } =
  componentReducer.actions
export default componentReducer.reducer
