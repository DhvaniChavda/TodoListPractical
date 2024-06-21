import React, {useEffect, useState} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {ENUM, METHOD, STRING} from 'src/utils';

import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeButton} from 'src/component/custom/button';
import Todo from 'src/screen/stack/todoList/todo';
import Completed from 'src/screen/stack/todoList/completed';
import {navigate} from 'src/navigation/RootNavigation';
import {Routes} from 'src/navigation/route';
import {SIZES} from 'src/theme';
import {useDispatch, useSelector} from 'react-redux';
import {updateTodoList} from 'src/redux/action/commonAction';
import {TODO_LIST_UPDATE} from 'src/redux/types';
import All from 'src/screen/stack/todoList/all';

export default (): JSX.Element => {
  const {todoList} = useSelector((state: any) => ({
    todoList: state.common.todoList,
  }));

  const dispatch = useDispatch();
  const [activeType, setActiveType] = useState(ENUM.todo_list.all);
  const [todo_list, setTodoList] = useState<any>();
  const [deleteTaskIndex, setDeleteTaskIndex] = useState<any>();

  useEffect(() => {
    setTodoList(todoList);
  }, [todoList]);

  const onTodoClick = () => {
    setActiveType(ENUM.todo_list.todo);
  };
  const onCompletedClick = () => {
    setActiveType(ENUM.todo_list.completed);
  };
  const onAllClick = () => {
    setActiveType(ENUM.todo_list.all);
  };
  const onTaskClick = (index: number) => {
    navigate(Routes.ViewTaskDetail, {data: todo_list[index], index: index});
  };
  const onTaskCheckChanged = (index: number) => {
    const updatedTodoList = todoList.map((item: any, idx: number) => {
      if (idx === index) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }
      return item;
    });
    METHOD.savePref(TODO_LIST_UPDATE, updatedTodoList);
    dispatch(updateTodoList(updatedTodoList));
  };
  const onTaskDeleteButtonClick = (index: number) => {
    setDeleteTaskIndex(index);
    const newTask = [...todo_list];
    if (deleteTaskIndex !== -1) {
      newTask.splice(deleteTaskIndex, 1);

      METHOD.savePref(TODO_LIST_UPDATE, newTask);

      dispatch(updateTodoList(newTask));
    }
  };
  const renderTopBarContainer = () => {
    return (
      <View style={[styles.vHeader]}>
        <TouchableOpacity
          style={
            activeType == ENUM.todo_list.all
              ? styles.toActiveHeader
              : styles.toInactiveHeader
          }
          onPress={onAllClick}>
          <Text
            style={
              activeType == ENUM.todo_list.all
                ? styles.tActiveHeader
                : styles.tInactiveHeader
            }>
            {STRING.todo_list.all}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            activeType == ENUM.todo_list.todo
              ? styles.toActiveHeader
              : styles.toInactiveHeader
          }
          onPress={onTodoClick}>
          <Text
            style={
              activeType == ENUM.todo_list.todo
                ? styles.tActiveHeader
                : styles.tInactiveHeader
            }>
            {STRING.todo_list.todo}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            activeType == ENUM.todo_list.completed
              ? styles.toActiveHeader
              : styles.toInactiveHeader
          }
          onPress={onCompletedClick}>
          <Text
            style={
              activeType == ENUM.todo_list.completed
                ? styles.tActiveHeader
                : styles.tInactiveHeader
            }>
            {STRING.todo_list.completed}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderListContainer = () => {
    switch (activeType) {
      case ENUM.todo_list.todo:
        return (
          <Todo
            item={todo_list}
            onTaskClick={onTaskClick}
            onTaskCheckChanged={onTaskCheckChanged}
            onTaskDeleteButtonClick={onTaskDeleteButtonClick}
          />
        );
      case ENUM.todo_list.completed:
        return (
          <Completed
            item={todo_list}
            onTaskClick={onTaskClick}
            onTaskCheckChanged={onTaskCheckChanged}
            onTaskDeleteButtonClick={onTaskDeleteButtonClick}
          />
        );
      case ENUM.todo_list.all:
        return (
          <All
            item={todo_list}
            onTaskClick={onTaskClick}
            onTaskCheckChanged={onTaskCheckChanged}
            onTaskDeleteButtonClick={onTaskDeleteButtonClick}
          />
        );
      default:
        break;
    }
  };
  const renderButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.todo_list.add}
        onPress={onAddClick}
        customStyle={{marginBottom: SIZES.countPixelRatio(20)}}
      />
    );
  };
  const onAddClick = () => {
    navigate(Routes.AddTask);
  };
  return (
    <SafeAreaView edges={['top']} style={styles.SaContainer}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />

      <View style={[styles.vContainer]}>
        {renderTopBarContainer()}

        {renderListContainer()}
        {renderButtonContainer()}
      </View>
    </SafeAreaView>
  );
};
