const modifyFile = (oldListOfFiles, files) => {
    let filesToUpload = {}

    for (let index = 0; index < files.length; index++) {
        const id = Object.keys(oldListOfFiles).length + index + 1;

        filesToUpload = {
            ...filesToUpload,
            [id]: {
                id,
                file: files[index],
                progress: 0
            }
        }
    }

    return filesToUpload
}

export default modifyFile;