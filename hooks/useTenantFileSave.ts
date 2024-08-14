import { useContext } from 'react';
import { fetchIndex, postDoc, updateIndex } from '../services/opensearchService';
import dayjs from 'dayjs';

const useTenantFileSave = () => {

    const tenantFileSave = async (file: any, binaryString: any) => {

        const tenant_id = localStorage.getItem('bai_tenant') || 'bclayton403';

        try {

            const queryFile = (fileName: string) => {
                return {
                    "query": {
                        "bool": {
                            "must": [
                                {
                                    "match_phrase": {
                                        "name": fileName
                                    }
                                }
                            ]
                        }
                    }
                }
            }

            const filePayload = {
                "index": process.env.NEXT_PUBLIC_OPENSEARCH_DB_ENVIRONMENT + tenant_id,
                "query": queryFile(file.file.name)
            };

            const fileHit = await fetchIndex(filePayload);

            if (!fileHit || fileHit.length === 0) {

                const data = {
                    name: file.file.name,
                    base64: binaryString,
                    size: file.file.size,
                    type: file.file.type,
                    timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                    review: false,
                    extraction: false,
                    classification: false,
                };

                const document = {
                    index: process.env.NEXT_PUBLIC_OPENSEARCH_DB_ENVIRONMENT + tenant_id,
                    data: data
                };

                return await postDoc(document);

            }

            else {
                const updateQuery = {
                    "query": {
                        "bool": {
                            "must": [
                                {
                                    "match": {
                                        "_id": fileHit[0]._id
                                    }
                                }
                            ]
                        }
                    },
                    script: {
                        lang: 'painless',
                        source: `
                            ctx._source.base64 = params.base64;
                            ctx._source.size = params.size;
                            ctx._source.type = params.type;
                            ctx._source.timestamp = params.timestamp;
                        `,
                        params: {
                            base64: binaryString,
                            size: file.file.size,
                            type: file.file.type,
                            timestamp: file.file.lastModified
                        }
                    }
                }

                const serializedQuery = JSON.stringify(updateQuery);

                const updatePayload = {
                    index: process.env.NEXT_PUBLIC_OPENSEARCH_DB_ENVIRONMENT + tenant_id,
                    query: serializedQuery,
                    _id: fileHit[0]._id
                };

                return await updateIndex(updatePayload);

            }
        } catch (error: any) {
            return error;
        }
    };

    return { tenantFileSave };
};

export default useTenantFileSave;

