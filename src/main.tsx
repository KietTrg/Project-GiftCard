//node_modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
//components
import App from './App.tsx'
//actions
//selector
//function
//constants
import {them} from './theme/them.tsx'
//styled
import './index.css'
import 'antd/dist/reset.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ConfigProvider theme={them}> <App /></ConfigProvider>
  </React.StrictMode>,
)
