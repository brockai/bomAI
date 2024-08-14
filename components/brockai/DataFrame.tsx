import React, { useEffect, useState } from 'react';
import Icon from '../icon/Icon';
import PageWrapper from '@/layout/PageWrapper/PageWrapper';
import Head from 'next/head';
import Page from '@/layout/Page/Page';
import useIsMobile from '@/hooks/useIsMobile';
import { fetchIndex } from '@/services/opensearchService';
import dayjs from 'dayjs';

interface DataFrameComponentProps {
    isAuthenticated: boolean;
}

const DataFrame: React.FC<DataFrameComponentProps> = ({ isAuthenticated }) => {

    const [tenantFiles, setTenantFiles] = useState<any | null>(null);

    const tenant_id = localStorage.getItem('bai_tenant') || 'bclayton403';

    const isMobile = useIsMobile();

    const fetchTenantFiles = async () => {

        try {
            const fileQuery = () => {
                return {
                    "query": {
                        "match_all": {}
                    },
                    "size": 100,
                    "_source": ["timestamp", "name", "size", "type", "review", "extraction", "classification", "probabilty"]
                }
            }

            const payload = {
                index: process.env.NEXT_PUBLIC_OPENSEARCH_DB_ENVIRONMENT + tenant_id,
                "query": fileQuery
            }
            const tenantFiles = await fetchIndex(payload);

            if (tenantFiles) {
                const files = tenantFiles.map((obj: any, idx: number) => {
                    const { _source } = obj;
                    const { name, ...rest } = _source;
                    return { key: idx, name: name, ...rest };
                });
                console.log(files)
                setTenantFiles(files);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTenantFiles();
    }, []);

    return (
        <PageWrapper>
            <Head>
                <title>BOM Files</title>
            </Head>
            <Page>
                <div className='container-fluid'>
                    <div className={`container-fluid ${isMobile ? 'overflow-x-auto' : ''}`}>
                        <div>
                            <div className='row mt-1 mb-3'>
                                <table className="table table-modern table-hover">
                                    <thead>
                                        <tr>
                                            <th>
                                                Time&nbsp;Stamp
                                            </th>
                                            <th>
                                                Name
                                            </th>
                                            <th>
                                                Size
                                            </th>
                                            <th>
                                                Type
                                            </th>
                                            <th className="text-center align-middle">
                                                Under&nbsp;Review
                                            </th>
                                            <th className="text-center align-middle">
                                                Extraction
                                            </th>
                                            <th className="text-center align-middle">
                                                Classification
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tenantFiles && tenantFiles.length > 0 && tenantFiles.map((file: any, index: number) => (
                                            <tr key={index}>
                                                <td className="fs-6">{file['timestamp']}</td>
                                                <td className="fs-6">{file['name']}</td>
                                                <td className="fs-6">{file['size']}</td>
                                                <td>{file['type']}</td>
                                                <td className="text-center align-middle">
                                                    {file['review'] ? (
                                                        <span className="fs-3" style={{ color: 'green' }}>&#10004;</span>
                                                    ) : (
                                                        <span className="fs-3" style={{ color: 'red' }}>&#10008;</span>
                                                    )}
                                                </td>
                                                <td className="text-center align-middle">
                                                    {file['extraction'] ? (
                                                        <span className="fs-3" style={{ color: 'green' }}>&#10004;</span>
                                                    ) : (
                                                        <span className="fs-3" style={{ color: 'red' }}>&#10008;</span>
                                                    )}
                                                </td>
                                                <td className="text-center align-middle">
                                                    {file['classification'] ? (
                                                        <span className="fs-3" style={{ color: 'green' }}>&#10004;</span>
                                                    ) : (
                                                        <span className="fs-3" style={{ color: 'red' }}>&#10008;</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>

        </PageWrapper >
    );
};

export default DataFrame;
