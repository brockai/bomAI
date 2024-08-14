
import React, { useContext } from 'react'
import Icon from '../components/icon/Icon';
import DataFrame from '@/components/brockai/DataFrame';
import FilePondUploader from '@/components/brockai/FilePond';
import Page from '@/layout/Page/Page';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import Head from 'next/head';
import NavBar from '@/components/brockai/NavBar';
import StepContext from '../context/stepContext';
import { useAuth0 } from '@auth0/auth0-react';

const Index = () => {

    const { step, setStep } = useContext(StepContext);
    const { isAuthenticated } = useAuth0();

    return (
        <PageWrapper>
            <Head>
                <title>BOM Check AI</title>
            </Head>
            <Page>
                <NavBar isAuthenticated={isAuthenticated}/>
                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                    <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 pt-2">
                        <p className="text-white text-2xl">
                            AI and machine learning to assist in checking Bill of Materials (BOM) components for regulatory compliance
                        </p>
                    </div>
                    <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
                        <div className="relative text-center"
                            onClick={() => {
                                if (setStep) {
                                    setStep('Step1')
                                }
                            }}>
                            <div className="flex items-center justify-center pb-3">
                                <Icon
                                    size='6x'
                                    icon='cloud_upload'
                                    style={{ color: step === 'Step1' ? 'red' : 'white' }}
                                />
                            </div>
                            <h6 className={`mb-2 fs-3 ${step === 'Step1' ? 'text-danger' : 'text-white'}`}>Step 1 - Upload BOM</h6>
                            <p className={`max-w-md mb-3 text-xl ${step === 'Step1' ? 'text-danger' : 'text-white'} sm:mx-auto pt-2`}>
                                Store BOM in Vector Database to Enable Processing & Training
                            </p>
                            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                                <svg
                                    className="w-8 text-white transform rotate-90 lg:rotate-0"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                        fill="none"
                                        strokeMiterlimit="10"
                                        x1="2"
                                        y1="12"
                                        x2="22"
                                        y2="12"
                                    />
                                    <polyline
                                        fill="none"
                                        strokeMiterlimit="10"
                                        points="15,5 22,12 15,19 "
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="relative text-center" onClick={() => {
                            if (setStep) {
                                setStep('Step2')
                            }
                        }}>
                            <div className="flex items-center justify-center pb-3">
                                <Icon
                                    size='6x'
                                    icon='Memory'
                                    style={{ color: step === 'Step2' ? 'red' : 'white' }}
                                />
                            </div>
                            <h6 className={`mb-2 fs-3 ${step === 'Step2' ? 'text-danger' : 'text-white'}`}>Step 2 - Process BOM</h6>
                            <p className={`max-w-md mb-3 text-xl ${step === 'Step2' ? 'text-danger' : 'text-white'} sm:mx-auto pt-2`}>
                                Extraction, Classification, Compliancy Probablity, Risk Assessment
                            </p>
                            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                                <svg
                                    className="w-8 text-light transform rotate-90 lg:rotate-0"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                        fill="none"
                                        strokeMiterlimit="10"
                                        x1="2"
                                        y1="12"
                                        x2="22"
                                        y2="12"
                                    />
                                    <polyline
                                        fill="none"
                                        strokeMiterlimit="10"
                                        points="15,5 22,12 15,19 "
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="relative text-center"
                            onClick={() => {
                                if (setStep) {
                                    setStep('Step3')
                                }
                            }}>
                            <div className="flex items-center justify-center pb-3">
                                <Icon
                                    size='6x'
                                    icon='verified_user'
                                    style={{ color: step === 'Step3' ? 'red' : 'white' }}
                                />
                            </div>
                            <h6 className={`mb-2 fs-3 ${step === 'Step3' ? 'text-danger' : 'text-white'}`}>Step 3 - Report & Train</h6>
                            <p className={`max-w-md mb-3 text-xl ${step === 'Step3' ? 'text-danger' : 'text-white'} sm:mx-auto pt-2`}>
                                Similar Files Lookup, Continous Feedback Loop, Model Trianing, Analytics
                            </p>
                        </div>
                    </div>
                    <div>
                        {step === 'Step1' && <FilePondUploader isAuthenticated={isAuthenticated}/>}
                        {step === 'Step2' && <DataFrame isAuthenticated={isAuthenticated}/>}
                        {step === 'Step3' && <DataFrame isAuthenticated={isAuthenticated}/>}
                    </div>
                </div>
            </Page>
        </PageWrapper>
    );
}

export default Index;