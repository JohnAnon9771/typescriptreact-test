import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
  data: [],
  error: false,
  loading: false,
};

export const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      break;

    default:
      break;
  }
};
