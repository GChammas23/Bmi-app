import { getUsers, deleteUser, createUser } from '../../actions/users.actions';
import { toast } from 'react-toastify'

export const GET_USERS_STARTED = 'GET_USERS_STARTED'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export const CREATE_USER_STARTED = 'CREATE_USER_STARTED'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR'

export const DELETE_USER_SUCCESS = 'DELETE_USERS_SUCCESS'
export const DELETE_USER_STARTED = 'DELETE_USERS_STARTED'
export const DELETE_USER_ERROR = 'DELETE_USERS_ERROR'

const usersActions = {

  getUsers: () => async (dispatch) => {
    try {
      dispatch({
        type: GET_USERS_STARTED,
      });
      let response = await getUsers()
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: {
          data: response.res,
        },
      });
    } catch (error) {
      toast.error('ERROR GETTING USERS' + error)
      dispatch({
        type: GET_USERS_ERROR,
      });
    }
  },

  deleteUser: (data) => async (dispatch) => {
    try {
      dispatch({
        type: DELETE_USER_STARTED,
      });
      let response = await deleteUser(data);
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: {
          message: response.message,
          result: response.data,
        }
      });
    } catch (err) {
      dispatch({
        type: DELETE_USER_ERROR,
      })
    }
  },
  createUser: (data) => async (dispatch) => {
    try {
      dispatch({
        type: CREATE_USER_STARTED,
      });
      let response = await createUser(data);
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: {
          message: response.message,
          result: response.result,
        }
      });
    } catch (err) {
      dispatch({
        type: CREATE_USER_ERROR,
        payload: {
          message: 'failed to create account!',
        }
      })
    }
  }
};

export default usersActions;