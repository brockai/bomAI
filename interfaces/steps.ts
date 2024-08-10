type TSteps = 'Upload Files' | 'Processing' | 'Report';

interface TStep {
	name: TSteps;
}

export const STEPS: { [key: string]: TStep } = {
	UPLOAD_FILES: { name: 'Upload Files' },
	PROCESSING: { name: 'Processing' },
	REPORT: { name: 'Report' },
};



