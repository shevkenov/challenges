import actionTypes from './types';

const setUploadFiles = (data) => {
    return { 
        type: actionTypes.SET_FILES_UPLOAD,
        payload: data,
    }
};

export default setUploadFiles;