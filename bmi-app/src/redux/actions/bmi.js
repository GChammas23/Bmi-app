import { addBmi, getValues } from '../../actions/bmi.actions';


export const ADD_BMI_STARTED = 'ADD_BMI_STARTED'
export const ADD_BMI_SUCCESS = 'ADD_BMI_SUCCESS'
export const ADD_BMI_ERROR = 'ADD_BMI_ERROR'

export const GET_VALUES_STARTED = 'GET_VALUES_STARTED'
export const GET_VALUES_SUCCESS = 'GET_VALUES_SUCCESS'
export const GET_VALUES_ERROR = 'GET_VALUES_ERROR'

const bmiActions = {

    addBmi: (data) => async (dispatch) => {
        try {
            dispatch({
                type: ADD_BMI_STARTED,
            });
            let response = await addBmi(data)
            dispatch({
                type: ADD_BMI_SUCCESS,
                payload: {
                    data: response.res,
                },
            });
        } catch (error) {
            dispatch({
                type: ADD_BMI_ERROR,
            });
        }
    },

    getValues: (username) => async (dispatch) => {
        try {
            dispatch({
                type: GET_VALUES_STARTED,
            });
            let response = await getValues(username)
            dispatch({
                type: GET_VALUES_SUCCESS,
                payload: {
                    data: response.result,
                },
            });
        } catch (error) {
            dispatch({
                type: GET_VALUES_ERROR,
            });
        }
    },
}

export default bmiActions;