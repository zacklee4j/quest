import './App.css'
//import List from "./pages/manage/List";
import { RouterProvider } from 'react-router-dom'
import Routers from './router'

function App() {
  return (
    // <div className="App" >
    //   <h1 style={{background:'lightgreen'}}>questionaire star</h1>
    //   <List/>
    // </div>
    <RouterProvider router={Routers}></RouterProvider>
  )
}

export default App
