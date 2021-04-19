import React from 'react';
import { connect } from 'react-redux'

import UploadItem from '../uploadItem/UploadItem'; 
import { Wrapper, Button, Heading } from './styles/uploadProgress';

const UploadProgress = (props) => {

    const {fileProgress} = props;
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
