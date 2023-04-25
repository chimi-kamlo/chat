import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('chat',()=>App);
// N'affiche pas <View />, mais insuffle pour avoir un exemple complet et redimensionnablke
const Example = () => (
  <View style={{ flex: 1 }}>
    <Provider store={store}>
      <App />
    </Provider>
  </View>
);

export default Example;