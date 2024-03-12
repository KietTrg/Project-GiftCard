import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'
import {them} from './theme/them.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ConfigProvider theme={them}> <App /></ConfigProvider>
  </React.StrictMode>,
)
