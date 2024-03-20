//node_modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { ConfigProvider } from 'antd'
import { AuthProvider } from './context/authContext.tsx'
//components
import App from './App.tsx'
//actions
//selector
//function
//constants
import { them } from './theme/them.tsx'
//styled
import './index.css'
import 'antd/dist/reset.css'
import store from './stores/index.ts';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <AuthProvider>
      <ConfigProvider theme={them}>
        <Provider store={store}>
          <App />
        </Provider>

      </ConfigProvider>
    </AuthProvider>
  </React.StrictMode>,
)
