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
        case actionTypes.SET_UPLOAD_PROGRESS:
            return {
                ...state,
                fileProgress: {
                    ...state.fileProgress,
                    [action.payload.id]: {
                        ...state.fileProgress[action.payload.id],
                        progress: action.payload.progress
                    }
                }
            }
        case actionTypes.SET_SUCCESS_UPLOAD_FILE:
            return {
                ...state,
                fileProgress: {
                    ...state.fileProgress,
                    [action.payload]: {
                        ...state.fileProgress[action.payload],
                        status: 1
                    }
                }
            }
        case actionTypes.SET_FAILURE_UPLOAD_FILE:
            return {
                ...state,
                fileProgress: {
                    ...state.fileProgress,
                    [action.payload]: {
                        ...state.fileProgress[action.payload],
                        status: 0,
                        progress: 0
                    }
                }
            }
        
        case actionTypes.SET_REMOVE_FILE:
            const remainFiles = Object.values(state.fileProgress).reduce((acc, cur, index) => {
                if(cur.id !== action.payload) {
                    acc = {
                        ...acc,
                        [index]: {
                            ...cur
                        }
                    }
                }
                return acc
            },{})

            return {
                ...state,
                fileProgress: {
                    ...remainFiles,
                }
            }
    
        default:
            return state
    }
}

export default uploadFilesReducer;