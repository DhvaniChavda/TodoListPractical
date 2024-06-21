import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';
import Splash from 'src/screen/onboarding/splash';
import TodoList from 'src/screen/stack/todoList';
import View_task_detail from 'src/screen/stack/view_task_detail';
import Edit_tsk from 'src/screen/stack/edit_tsk';
import Add_task from 'src/screen/stack/add_task';

const Stack = createNativeStackNavigator();

export default (): JSX.Element | null => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'simple_push',
          animationDuration: 200,
        }}
        initialRouteName={Routes.Splash}>
        <Stack.Screen name={Routes.Splash} component={Splash} />
        <Stack.Screen name={Routes.TodoList} component={TodoList} />
        <Stack.Screen
          name={Routes.ViewTaskDetail}
          component={View_task_detail}
        />
        <Stack.Screen name={Routes.EditTask} component={Edit_tsk} />
        <Stack.Screen name={Routes.AddTask} component={Add_task} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
