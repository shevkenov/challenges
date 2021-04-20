import axios from 'axios';
import actionTypes from './types';

export const setUploadFiles = (data) => ({
    type: actionTypes.SET_FILES_UPLOAD,
    payload: data,
});

export const setFileProgress = (id, progress) => ({
    type: actionTypes.SET_UPLOAD_PROGRESS,
    payload: {
        id,
        progress
    }
});

export const successUploadFile = id => ({
    type: actionTypes.SET_SUCCESS_UPLOAD_FILE,
    payload: id,
});

export const failureUploadFile = id => ({
    type: actionTypes.SET_FAILURE_UPLOAD_FILE,
    payload: id,
});

export const removeFile = id => ({
    type: actionTypes.SET_REMOVE_FILE,
    payload: id,
})

export const uploadFiles = files => dispatch => {
    if(files.length){
        files.forEach(async file => {
            const formData = new FormData();
            formData.append('file', file.file);

            try {
                await(axios({
                    method: 'POST',
                    baseURL: 'http://localhost:5000',
                    url: '/upload',
                    data: formData,
                    onUploadProgress: progress => {
                        const {loaded, total} = progress;
                        const percentageProgress = Math.floor((loaded/total) * 100);
                        dispatch(setFileProgress(file.id, percentageProgress));
                    }
                }))

                dispatch(successUploadFile(file.id))
            } catch (error) {
                console.log(error)
                dispatch(failureUploadFile(file.id))
            }
        });
    }
}