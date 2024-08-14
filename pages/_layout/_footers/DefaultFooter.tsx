import React from 'react';
import classNames from 'classnames';
import Footer from '../../../layout/Footer/Footer';
import useDarkMode from '../../../hooks/useDarkMode';

const DefaultFooter = () => {
	const { darkModeStatus } = useDarkMode();

	return (
		<Footer>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col flex items-center'>
						<a href="https://bomai.brockai.com/"
							className="flex items-center text-white no-underline mr-2"
						>
							<img src="/brockai.png" alt="BrockAI Logo" width={40} />
							<div className="font-light fs-5 text-danger ml-2">BOM Check AI</div>
						</a>
					</div>
					<div className='col-auto flex items-center'>
						<a href="https://github.com/brockai/bomai"
							className="flex items-center text-white no-underline mr-2"
						>
							<img src="/github-mark-white.png" alt="Github" width={30} />
						</a>
					</div>
				</div>
			</div>
		</Footer>
	);
};

export default DefaultFooter;
