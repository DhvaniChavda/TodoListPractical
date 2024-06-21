import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import {CompletedListItem} from 'src/component/custom/item';

interface ICopletedProps {
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
}: ICopletedProps): JSX.Element => {
  const renderTodoItem = ({item, index}: {item: any; index: number}) => {
    return (
      <CompletedListItem
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
      <FlatList data={item} renderItem={renderTodoItem} />
    </View>
  );
};
