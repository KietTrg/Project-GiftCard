//node_modules
import { Provider, useSelector } from "react-redux";
import store, { RootState, persiststore } from "./stores/index";
import { ConfigProvider } from "antd";
import { them } from "./theme/them";
import { PersistGate } from "redux-persist/integration/react";
// import configAxios from "./api/configAxios";
//components
//actions
//selector
//function
//constants
//styled
// const AxiosProvider = ({ children }: { children: React.ReactElement | null }) => {
//   configAxios();
//   return children;
// };

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
      {/* <AxiosProvider> */}
      <PersistGate persistor={persiststore} loading={null}>
        <ConfigProvider theme={them}>
          {children}
        </ConfigProvider>
      </PersistGate>
      {/* </AxiosProvider> */}
    </Provider>
  )
}

export default Providers