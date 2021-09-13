import actions from './actions';

const initState = {
  contentList: [],
  errorData: {},
  action: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case actions.GET_CONTENT_REQUEST:
      return {
        ...state,
        errorData: {},
        action: action.type
      };
    case actions.GET_CONTENT_SUCCESS: 
      return {
        ...state,
        contentList: action.payload,
        action: action.type
      };
    case actions.GET_CONTENT_ERROR:
      return {
        ...state,
        errorData: action.errors || {},
        action: action.type
      };
    default:
      return state;
  }
};
