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
import store, { persiststore } from './stores/index.ts';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <AuthProvider>
      <ConfigProvider theme={them}>
        <Provider store={store}>
          <PersistGate persistor={persiststore} loading={null}>
            <App />
          </PersistGate>
        </Provider>
      </ConfigProvider>
    </AuthProvider>
  </React.StrictMode>,
)
