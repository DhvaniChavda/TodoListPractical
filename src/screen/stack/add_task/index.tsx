import React, {useRef, useState} from 'react';
import {StatusBar, Text, TextInput, View} from 'react-native';
import styles from './style';

import {SafeAreaView} from 'react-native-safe-area-context';
import {ToolbarWithTitle} from 'src/component/custom/toolbar';
import {ENUM, METHOD, STRING} from 'src/utils';
import {goBack} from 'src/navigation/RootNavigation';
import {MultilineInput, ThemeInput} from 'src/component/custom/input';
import {ThemeButton} from 'src/component/custom/button';
import {SIZES} from 'src/theme';
import {useDispatch, useSelector} from 'react-redux';
import {addTodoItem} from 'src/redux/action/commonAction';
import {TODO_LIST} from 'src/redux/types';

export default ({route}: any): JSX.Element => {
  const {todoList} = useSelector((state: any) => ({
    todoList: state.common.todoList,
  }));

  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const titleRef = useRef<TextInput>(null);
  const descRef = useRef<TextInput>(null);

  const dispatch = useDispatch();

  const onChangeText = (text: string, type: number) => {
    switch (type) {
      case ENUM.add_task.title:
        setTitle(text);
        break;
      case ENUM.add_task.desc:
        setDesc(text);
        break;
    }
  };
  const renderTitleContainer = () => {
    return (
      <View>
        <Text style={styles.tLable}>{'Title'}</Text>

        <ThemeInput
          placeholder={''}
          value={title}
          onChangeText={onChangeText}
          ref={titleRef}
          onSubmitEditing={() => descRef?.current?.focus()}
          keyboardType={'default'}
          returnKeyType={'next'}
          blurOnSubmit={false}
          type={ENUM.add_task.title}
        />
      </View>
    );
  };
  const renderDescContainer = () => {
    return (
      <View>
        <Text style={styles.tLable}>{'Desc'}</Text>

        <MultilineInput
          placeholder={''}
          value={desc}
          onChangeText={onChangeText}
          ref={descRef}
          keyboardType={'default'}
          returnKeyType={'done'}
          blurOnSubmit={false}
          type={ENUM.add_task.desc}
        />
      </View>
    );
  };
  const renderButtonContainer = () => {
    return (
      <ThemeButton
        title={STRING.add_task.save}
        customStyle={{marginBottom: SIZES.countPixelRatio(20)}}
        onPress={onSaveTask}
      />
    );
  };
  const onSaveTask = () => {
    if (title.trim() === '' || title.length <= 0) {
      METHOD.showToast(STRING.validation.vl_title);
    } else if (desc.trim() === '' || desc.length <= 0) {
      METHOD.showToast(STRING.validation.vl_desc);
    } else {
      let taskObj: any = {};
      let arr: Array<any> = todoList;
      taskObj.title = title;
      taskObj.desc = desc;
      taskObj.isDone = false;
      dispatch(addTodoItem(taskObj));
      goBack();
    }
  };
  return (
    <SafeAreaView edges={['top']} style={styles.SaContainer}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      <ToolbarWithTitle
        title={STRING.add_task.addTask}
        onBackPress={() => goBack()}
      />
      <View style={[styles.vContainer]}>
        {renderTitleContainer()}
        {renderDescContainer()}
        <View style={{flex: 1}} />
        {renderButtonContainer()}
      </View>
    </SafeAreaView>
  );
};
