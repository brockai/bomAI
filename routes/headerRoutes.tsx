import React from 'react';

import HomeHeader from '../pages/_layout/_headers/HomeHeader';

const headers = [
	{
		path: '/*',
		element: <HomeHeader />,
	},
];

export default headers;
