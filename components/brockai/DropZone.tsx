// src/DropZone.tsx
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Icon from '../icon/Icon';

const DropZone: React.FC = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        acceptedFiles.forEach((file: File) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('File reading was aborted');
            reader.onerror = () => console.log('File reading has failed');
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result;
                console.log(binaryStr);
            };

            reader.readAsArrayBuffer(file);
        });
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const brockaiBg = {
        backgroundColor: 'rgba(255, 75, 75, 0.2)', // Replace with your desired color
    };

    const textColorStyle = {
        color: 'rgba(255, 75, 75, 0.7)'
    }

    return (
        <div className='m-3'>
            <div className="pt-6">
                <div
                    {...getRootProps({
                        className: 'dropzone',
                    })}
                >
                    <input {...getInputProps()} />
                    <h4 className='pt-2 inline-flex items-center' style={textColorStyle}>
                        <Icon
                            icon='cloud_upload'
                        />
                        &nbsp;&nbsp;Drag 'n' drop some files here, or click to select files
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default DropZone;
