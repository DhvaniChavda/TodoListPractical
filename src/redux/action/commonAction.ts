import {TODO_LIST, TODO_LIST_UPDATE} from 'src/redux/types';

export const addTodoItem = (data: any) => {
  return {
    type: TODO_LIST,
    payload: data,
  };
};
export const updateTodoList = (data: any) => {
  return {
    type: TODO_LIST_UPDATE,
    payload: data,
  };
};
