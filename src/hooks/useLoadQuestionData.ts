//import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionService } from '../services/question'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetComponents } from '../store/componentsReducer'

function useLoadQuestionData() {
  const { id = '' } = useParams()
  const dispatch = useDispatch()
  const { data, loading, error, run } = useRequest(async (id: string) => {
    if (!id) throw new Error('id is missed!')
    const data = await getQuestionService(id)
    return data
  })
  // according to data got,set redux store
  useEffect(() => {
    if (!data) return
    const { title = '', componentsList = [] } = data
    let selectedId = ''
    if (componentsList.length > 0) {
      selectedId = componentsList[0].fe_id
    }

    // store componentsList into redux store
    dispatch(resetComponents({ componentsList, selectedId }))
  }, [data])
  // listen the change of id,if id has changed,then call run(the ajax function) to load data
  useEffect(() => {
    // run is the async funtion defined in useRequest.
    run(id)
  }, [id])
  return { loading, error }
}
export default useLoadQuestionData
