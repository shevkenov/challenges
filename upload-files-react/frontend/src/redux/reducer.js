import actionTypes from './types';
import utils from '../utils/utils';

const INITIAL_STATE = {
    fileProgress: {}
}

const uploadFilesReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case actionTypes.SET_FILES_UPLOAD:
            return {
                ...state,
                fileProgress: {
                    ...state.fileProgress,
                    ...utils(state.fileProgress, action.payload),
                }
            }
    
        default:
            return state
    }
}

export default uploadFilesReducer;