import React from 'react';
import axios, { AxiosResponse } from 'axios';

interface WorkflowDispatchResponse {
    status: number;
    statusText: string;
}

export const triggerWorkflow = async () => {
    const GITHUB_TOKEN: string = process.env.NEXT_PUBLIC_GITHUB_TOKEN as string;
    const WORKFLOW_ID: string = 'triggerProcess.yml';
    const REPO: string = process.env.NEXT_PUBLIC_REPO as string;;
    const REPO_OWNER: string = process.env.NEXT_PUBLIC_REPO_OWNER as string;;

    const url: string = `https://api.github.com/repos/${REPO_OWNER}/${REPO}/actions/workflows/${WORKFLOW_ID}/dispatches`;

    try {
        const response: AxiosResponse<WorkflowDispatchResponse> = await axios.post(
            url,
            { ref: 'main' },
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: 'application/vnd.github.v3+json',
                },
            }
        );

        if (response.status === 204) {
            console.log('Workflow dispatched successfully');
            return
        } else {
            console.error('Error triggering workflow:', response.statusText);
        }
    } catch (error) {
        console.error('Error triggering workflow:', error);
    }
};
