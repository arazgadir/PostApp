import React, {FC} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigator from './App/modules/navigation/rootNavigator';
import { persistor, store } from './App/modules/redux/store';

const App: FC = () => {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
