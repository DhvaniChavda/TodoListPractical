import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
import styles from './style';
import {METHOD, STRING} from 'src/utils';

import {SafeAreaView} from 'react-native-safe-area-context';
import {navigate} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';
import {useDispatch} from 'react-redux';
import {updateTodoList} from 'src/redux/action/commonAction';
import {TODO_LIST_UPDATE} from 'src/redux/types';

export default (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      navigate(Routes.TodoList);
    }, 2000);
  }, []);
  useEffect(() => {
    getTodoList();
  }, []);
  const getTodoList = () => {
    METHOD.getPref(TODO_LIST_UPDATE)
      .then((res: any) => {
        if (res) {
          dispatch(updateTodoList(res));
        } else {
        }
      })
      .catch((err: any) => {
        console.log('err todolist====>', err);
      });
  };
  return (
    <SafeAreaView edges={['top']} style={styles.SaContainer}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      <View style={styles.SaContainer}>
        <Text style={styles.tTitle}>{STRING.splash.welcome}</Text>
      </View>
    </SafeAreaView>
  );
};
