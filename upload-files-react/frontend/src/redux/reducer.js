import actionTypes from './types';
import utils from '../utils/utils';

const INITIAL_STATE = {
    fileProgess: {}
}

const uploadFilesReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case actionTypes.SET_FILES_UPLOAD:
            return {
                ...state,
                fileProgess: {
                    ...state.fileProgess,
                    ...utils(state, action.payload),
                }
            }
    
        default:
            return state
    }
}

export default uploadFilesReducer;