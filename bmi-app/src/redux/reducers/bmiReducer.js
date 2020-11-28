import {
    ADD_BMI_STARTED,
    ADD_BMI_SUCCESS,
    ADD_BMI_ERROR,

} from "../actions/bmi";

const defaultState = {
    isLoading: false,
    didAdd: false,
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
        default:
            return state;
    }
}

export default bmiReducer;
