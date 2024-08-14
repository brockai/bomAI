import React, { useContext, useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import Button from '../bootstrap/Button';
import { fetchIndex, postDoc, updateIndex } from '@/services/opensearchService';
import StepContext from '../../context/stepContext';
import useTenantFileSave from '../../hooks/useTenantFileSave';
import { useAuth0 } from '@auth0/auth0-react';
import Icon from '../icon/Icon';

registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize
);

interface FilePondComponentProps {
    isAuthenticated: boolean;
}

const FilePondUploader: React.FC<FilePondComponentProps> = ({ isAuthenticated }) => {
    
    const [files, setFiles] = useState<any[]>([]);
    const { setStep } = useContext(StepContext);

    const { tenantFileSave } = useTenantFileSave();

    const { loginWithRedirect } = useAuth0();
    
    const handleLogin = () => {
        loginWithRedirect();
    };

    const handleUploadClick = async () => {

        files.forEach((fileItem) => {

            const file = fileItem.file;
            const reader = new FileReader();

            reader.onloadend = async () => {

                const binaryString = reader.result;
                const fileName = fileItem.file.name;

                if (reader.result) {
                    const reponse = await tenantFileSave(fileItem, binaryString);

                    if ((reponse && reponse.result === "created") || (reponse && reponse.updated === 1)) {
                        if (setStep) {
                            setStep('Step2')
                        }
                    }

                };
            }
            reader.readAsBinaryString(file);
        });

    };

    return (

        <div className="pt-4">
            <FilePond
                files={files}
                allowMultiple={false}
                maxFiles={5}
                name="files"
                onupdatefiles={setFiles}
                labelIdle='Drag & Drop your BOM file or <span class="filepond--label-action">Browse</span>'
                maxFileSize="25MB"
                disabled={!isAuthenticated}
                acceptedFileTypes={['text/csv']}
            />
            {!isAuthenticated && (
                <div className='pt-4'>
                    <Button
                        color='danger'
                        size='lg'
                        isOutline
                        className='w-100'
                        onClick={() => {
                            handleLogin();
                        }}
                    >
                        Please Sign In to Upload BOM
                    </Button>
                </div>
            )}
            {files && files.length > 0 && (
                <div className='pt-4'>
                    <Button
                        color='danger'
                        size='lg'
                        isOutline
                        className='w-100'
                        onClick={() => {
                            handleUploadClick();
                        }}
                    >
                        Upload BOM
                    </Button>
                </div>
            )}
        </div>
    );
};

export default FilePondUploader;

