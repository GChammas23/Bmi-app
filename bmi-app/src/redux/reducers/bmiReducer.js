import {
    ADD_BMI_STARTED,
    ADD_BMI_SUCCESS,
    ADD_BMI_ERROR,

    GET_VALUES_STARTED,
    GET_VALUES_SUCCESS,
    GET_VALUES_ERROR,

} from "../actions/bmi";

const defaultState = {
    isLoading: false,
    didAdd: false,
    values: [],
};

function bmiReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_BMI_STARTED:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case ADD_BMI_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                didAdd: true,
            });
        case ADD_BMI_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                didAdd: false,
            })

        case GET_VALUES_STARTED:
            return Object.assign({}, state, {
                isLoading: true,
                values: [],
            });
        case GET_VALUES_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                values: action.payload.data,
            });
        case GET_VALUES_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                values: [],
            })
        default:
            return state;
    }
}

export default bmiReducer;
