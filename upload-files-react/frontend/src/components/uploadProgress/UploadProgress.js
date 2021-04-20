import React, {useEffect} from 'react';
import { connect, useDispatch } from 'react-redux'

import UploadItem from '../uploadItem/UploadItem'; 
import { Wrapper, Button, Heading } from './styles/uploadProgress';

import { uploadFiles } from '../../redux/actions';

const UploadProgress = (props) => {
    const dispatch = useDispatch();

    const {fileProgress} = props;
    
    useEffect(() => {

        const filesForUpload = Object.values(fileProgress).filter(file => file.progress === 0);
        dispatch(uploadFiles(filesForUpload))

    }, [fileProgress])
    
    const length = Object.keys(fileProgress).length
    return length ? (
        <Wrapper>
            <Heading>Uploading file</Heading>
            {
                Object.values(fileProgress).map(item => (
                    <UploadItem key={item.id} file={item} />
                ))
            }  
        </Wrapper>
    ) : null
}

const mapStateToProps = state => ({
    fileProgress: state.UploadFile.fileProgress
})

export default connect(mapStateToProps)(UploadProgress)
