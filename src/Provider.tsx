//node_modules
import { Provider } from "react-redux";
import store, { persiststore } from "./stores/index";
import { ConfigProvider } from "antd";
import { them } from "./theme/them";
import { PersistGate } from "redux-persist/integration/react";
import configAxios from "./api/configAxios";
//components
//actions
//selector
//function
//constants
//styled
const AxiosProvider = ({ children }: { children: React.ReactElement | null }) => {
  configAxios();
  return children;
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  // -------------------------- VAR ---------------------------
  // -------------------------- STATE -------------------------
  // -------------------------- REDUX -------------------------
  // -------------------------- FUNCTION ----------------------
  // -------------------------- EFFECT ------------------------
  // -------------------------- RENDER ------------------------
  // -------------------------- MAIN --------------------------

  return (
    <Provider store={store}>
      <AxiosProvider>
        <ConfigProvider theme={them}>
          <PersistGate persistor={persiststore} loading={null}>
            {children}
          </PersistGate>
        </ConfigProvider>
      </AxiosProvider>
    </Provider>
  )
}

export default Providers