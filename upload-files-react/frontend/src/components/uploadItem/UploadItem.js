import React from 'react'

import {Wrapper, LeftSide, ProgressBar, Progress, Label, Percentage} from './styles/UploadItem';

const UploadItem = ({file}) => {

    return (
        <Wrapper>
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
