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
						<a href="https://brockai.com/"
							className="flex items-center text-white no-underline mr-2"
						>
							<img src="/brockai.png" alt="BrockAI Logo" width={40} />

						</a>
						<div className="font-light fs-5 text-danger">brockai.com</div>
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
