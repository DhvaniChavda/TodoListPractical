import React, {useEffect, useRef, useState} from 'react';
import {StatusBar, Text, TextInput, View} from 'react-native';
import styles from './style';

import {SafeAreaView} from 'react-native-safe-area-context';
import {ToolbarWithTitle} from 'src/component/custom/toolbar';
import {ENUM, STRING} from 'src/utils';
import {goBack, navigate} from 'src/navigation/RootNavigation';
import {APP_IMAGES} from 'src/assets/images';
import {MultilineInput, ThemeInput} from 'src/component/custom/input';
import {Routes} from 'src/navigation/route';

export default ({route}: any): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const titleRef = useRef<TextInput>(null);
  const descRef = useRef<TextInput>(null);

  useEffect(() => {
    if (route.params && route.params.data) {
      setTitle(route.params.data.title);
      setDesc(route.params.data.desc);
    }
  }, [route.params]);
  const onChangeText = (text: string, type: number) => {
    switch (type) {
      case ENUM.view_task.title:
        setTitle(text);
      case ENUM.view_task.desc:
        setDesc(text);
    }
  };
  const renderTitleContainer = () => {
    return (
      <View>
        <Text style={styles.tLable}>{'Title'}</Text>

        <ThemeInput
          editable={false}
          placeholder={''}
          value={title}
          onChangeText={onChangeText}
          ref={titleRef}
          onSubmitEditing={() => descRef?.current?.focus()}
          keyboardType={'default'}
          returnKeyType={'next'}
          blurOnSubmit={false}
          type={ENUM.view_task.title}
        />
      </View>
    );
  };
  const renderDescContainer = () => {
    return (
      <View>
        <Text style={styles.tLable}>{'Desc'}</Text>

        <MultilineInput
          editable={false}
          placeholder={''}
          value={desc}
          onChangeText={onChangeText}
          ref={descRef}
          keyboardType={'default'}
          returnKeyType={'done'}
          blurOnSubmit={false}
          type={ENUM.view_task.desc}
        />
      </View>
    );
  };
  const onEditClick = () => {
    navigate(Routes.EditTask, {
      index: route.params.index,
      data: route.params.data,
    });
  };
  return (
    <SafeAreaView edges={['top']} style={styles.SaContainer}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent
      />
      <ToolbarWithTitle
        title={STRING.view_task.ViewTask}
        onBackPress={() => goBack()}
        isRightIcon={true}
        rightIcon={APP_IMAGES.ic_edit}
        onRightIconPress={onEditClick}
      />
      <View style={[styles.vContainer]}>
        {renderTitleContainer()}
        {renderDescContainer()}
      </View>
    </SafeAreaView>
  );
};
