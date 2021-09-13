const actions = {
    GET_CONTENT_REQUEST: 'GET_CONTENT_REQUEST',
    GET_CONTENT_SUCCESS: 'GET_CONTENT_SUCCESS',
    GET_CONTENT_ERROR: 'GET_CONTENT_ERROR',

    getContent: (queryParams) => ({
      type: actions.GET_CONTENT_REQUEST,
      queryParams
    }),

    getContentSuccess: (payload = {}) => ({
      type: actions.GET_CONTENT_SUCCESS,
      payload
    }),
  
    getContentFailure: (payload = '', errors = {}) => ({
      type: actions.GET_CONTENT_ERROR,
      payload,
      errors
    })
  };
  
  export default actions;
  