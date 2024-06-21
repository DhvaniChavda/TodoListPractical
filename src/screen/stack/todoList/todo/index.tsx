import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import {TodoListItem} from 'src/component/custom/item';

interface ITodoProps {
  item: any;
  onTaskClick: (arg: number) => void;
  onTaskCheckChanged: (arg: number) => void;
  onTaskDeleteButtonClick: (arg: number) => void;
}
export default ({
  item,
  onTaskClick,
  onTaskCheckChanged,
  onTaskDeleteButtonClick,
}: ITodoProps): JSX.Element => {
  const renderTodoItem = ({item, index}: {item: any; index: number}) => {
    return (
      <TodoListItem
        item={item}
        index={index}
        onTaskClick={onTaskClick}
        onTaskCheckChanged={onTaskCheckChanged}
        onTaskDeleteButtonClick={onTaskDeleteButtonClick}
      />
    );
  };

  return (
    <View style={styles.vContainer}>
      <FlatList
        data={item}
        renderItem={renderTodoItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
