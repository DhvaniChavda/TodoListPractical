import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid} from 'react-native';

export default {
  savePref: (key: string, value: any) => {
    AsyncStorage.setItem(key, JSON.stringify(value), err => {});
  },
  getPref: (key: string) => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (err, result) => {
        if (result) {
          resolve(JSON.parse(result));
        } else {
          reject(false);
        }
      });
    });
  },
  showToast: (msg: string, isShort?: boolean) => {
    if (msg) {
      ToastAndroid.show(msg, isShort ? ToastAndroid.SHORT : ToastAndroid.LONG);
    }
  },
};
