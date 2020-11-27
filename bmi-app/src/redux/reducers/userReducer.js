import {
  GET_USER_STARTED,
  GET_USER_SUCCESS,
  GET_USER_ERROR,

  CREATE_USER_STARTED,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,

  FIND_USERNAME_STARTED,
  FIND_USERNAME_SUCCESS,
  FIND_USERNAME_ERROR,

  DELETE_USER_STARTED,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,

} from "../actions/users";

const defaultState = {
  isLoading: false,
  delMessage: '',
  createMessage: '',
  didCreate: false,
  didLogin: false,
  foundUser: null,
};

function userReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USER_STARTED:
      return Object.assign({}, state, {
        isLoading: true,
        didLogin: false,
      });
    case GET_USER_SUCCESS:
      if (action.payload.data != null) {
        return Object.assign({}, state, {
          isLoading: false,
          didLogin: true,
        });
      }
      else {
        return Object.assign({}, state, {
          isLoading: true,
          didLogin: false,
        });
      }

    case GET_USER_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        didLogin: false,
      });

    case CREATE_USER_STARTED:
      return Object.assign({}, state, {
        isLoading: true,
        didCreate: false,
      });
    case CREATE_USER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        didCreate: true,
        createMessage: action.payload.message,
      });
    case CREATE_USER_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        didCreate: false,
        createMessage: action.payload.message,
      });

    case FIND_USERNAME_STARTED:
      return Object.assign({}, state, {
        isLoading: true,
        foundUser: null,
      });

    case FIND_USERNAME_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        foundUser: action.payload.result,
      });

    case FIND_USERNAME_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        foundUser: null,
      });

    case DELETE_USER_STARTED:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case DELETE_USER_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        delMessage: 'DELETED SUCCESSFULLY',
      });
    case DELETE_USER_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        delMessage: 'UNABLE TO DELETE.',
      });
    default:
      return state;
  }
}

export default userReducer;
