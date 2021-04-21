import React from 'react';
import {useDispatch} from 'react-redux';

import { removeFile } from '../../redux/actions';

import {Wrapper, LeftSide, ProgressBar, Progress, Label, Percentage} from './styles/UploadItem';

const UploadItem = ({file}) => {
    const dsipatch = useDispatch();

    const handleRemoveFile = () => {
        if(file.status) {
            dsipatch(removeFile(file.id))
        }
    }

    return (
        <Wrapper onClick={handleRemoveFile}>
            <LeftSide>
                <ProgressBar>
                    <Progress width = {file.progress}/>
                    <Label>
                        {file.file.name}
                    </Label>
                </ProgressBar>
            </LeftSide>
            <Percentage>
                {file.progress}%
            </Percentage>
        </Wrapper>
    )
}

export default UploadItem
