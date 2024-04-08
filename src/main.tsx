//node_modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './context/authContext.tsx'
//components
import App from './App.tsx'
//actions
//selector
//function
//constants
//styled
import './index.css'
import 'antd/dist/reset.css'
import Providers from './Provider.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Providers>
        <App />
      </Providers>
    </AuthProvider>
  </React.StrictMode>,
)
