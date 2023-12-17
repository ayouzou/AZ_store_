import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import storeAndPersistor from "./pages/templates/rayban/redux/store"
import App from './App';
import {PersistGate} from 'redux-persist/integration/react' 

import { Provider } from 'react-redux'
import { store } from './pages/templates/rayban/redux/store'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ storeAndPersistor.store}>
        <PersistGate loading={null} persistor={storeAndPersistor.persistor}>
            <App/>
        </PersistGate>
    </Provider>


    {/* <Provider store={store}>
      <App />
    </Provider> */}
  </React.StrictMode>,
)