import {TODO_LIST, TODO_LIST_UPDATE} from 'src/redux/types';
import {METHOD} from 'src/utils';

interface commonState {
  todoList: any;
}

const initialState: commonState = {
  todoList: '',
};

type Action = {
  type: string;
  payload?: any;
};

const commonReducer = (
  state: commonState = initialState,
  action: Action,
): commonState => {
  switch (action.type) {
    case TODO_LIST:
      var newList = [...state.todoList, action.payload];
      METHOD.savePref(TODO_LIST_UPDATE, newList);
      return {...state, todoList: newList};
    case TODO_LIST_UPDATE:
      return {...state, todoList: action.payload};
    default:
      return state;
  }
};
export default commonReducer;
