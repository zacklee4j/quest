import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ManageLayout from '../layouts/ManageLayout'
import QuestionLayout from '../layouts/QuestionLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import Register from '../pages/Register'
import List from '../pages/manage/List'
import Star from '../pages/manage/Star'
import Trash from '../pages/manage/Trash'
import Edit from '../pages/question/Edit'
import Statistic from '../pages/question/Stat'
const Routers = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'manage',
        element: <ManageLayout />,
        children: [
          {
            path: 'list',
            element: <List />,
          },
          {
            path: 'star',
            element: <Star />,
          },
          {
            path: 'trash',
            element: <Trash />,
          },
        ],
      },

      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/question',
    element: <QuestionLayout />,
    children: [
      {
        path: 'edit/:id',
        element: <Edit />,
      },
      {
        path: 'statistic/:id',
        element: <Statistic />,
      },
    ],
  },
])
export default Routers

/**-------------------- */

// pathname
export const LOGIN_PATH = '/login'
export const REGISTER_PATH = '/register'
export const HOME_PATH = '/'
export const MANAGE_LIST_PATH = '/manage/list'
export const DYNAMIIC_EDIT_PATH = '/question/edit'

export function isLoginOrRegistered(path: string) {
  const list = [LOGIN_PATH, REGISTER_PATH]
  if (list.includes(path)) return true
  return false
}

export function isNoNeedUserInfo(path: string) {
  if ([LOGIN_PATH, REGISTER_PATH, HOME_PATH].includes(path)) return true
  return false
}
