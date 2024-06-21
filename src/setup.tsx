import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from 'src/redux/store';
import App from 'src/app';

const Setup = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <App />
      </View>
    </Provider>
  );
};
export default Setup;
