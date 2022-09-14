import 'react-native-gesture-handler'

import { Routes } from './src/routes'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Provider } from 'react-redux';
import { store } from './src/store';

function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ApplicationProvider>
    </>
  )
}

export default App
