// import { Parser } from '@json2csv/plainjs';
import { fetchIndex } from '../services/opensearchService';
import { toastMsg } from '../components/brockai/ToastNotify';
import router from 'next/router';

// export function convertToCsv(data: any) {
// 	try {
// 		const opts = {};
// 		const parser = new Parser(opts);
// 		const csv = parser.parse(data);
// 		return csv;
// 	} catch (error) {
// 		console.error('Error converting to CSV:', error);
// 		return '';
// 	}
// }

export const handleAxiosError = async (error: any) => {

	let toastDisplayed = false;

	if (error.message && error.message == 'Request failed with status code 401') {
		if (!toastDisplayed) {
			toastMsg('Not Authorized.', 'error');
			toastDisplayed = true;
		}
		router.push('/');
	}
	else {
		if (!toastDisplayed) {
			toastMsg('System Error.', 'error');
			toastDisplayed = true;
		}
		router.push('/');
	}
}

export const handleApiError = async (error: any) => {
	if (error.status != 200) {
		toastMsg('System Error.', 'error');
	}
}