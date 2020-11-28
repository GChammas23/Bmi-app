import { addBmi } from '../../actions/bmi.actions';


export const ADD_BMI_STARTED = 'CREATE_USER_STARTED'
export const ADD_BMI_SUCCESS = 'CREATE_USER_SUCCESS'
export const ADD_BMI_ERROR = 'CREATE_USER_ERROR'


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
                type: GET_USERS_ERROR,
            });
        }
    },
}

export default bmiActions;