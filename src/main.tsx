//node_modules
import React from 'react'
import ReactDOM from 'react-dom/client'
//components
import App from './App.tsx'
import Providers from './Provider.tsx';
//actions
//selector
//function
//constants
//styled
import './index.css'
import 'antd/dist/reset.css'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <App />
        <Toaster
          position="top-right"
        />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
)
