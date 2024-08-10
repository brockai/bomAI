import React from 'react';
import Button, { IButtonProps } from '../../../components/bootstrap/Button';
import Icon from '../../../components/icon/Icon';
import useDarkMode from '../../../hooks/useDarkMode';
import { useRouter } from 'next/router';

const HomeHeader = () => {
	const router = useRouter();
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();

	const brockaiBg = {
		backgroundColor: 'rgba(255, 75, 75, 0.2)', // Replace with your desired color
	};

	const textColorStyle = {
		color: '#ff4b4b'
	}

	const styledBtn: IButtonProps = {
		color: darkModeStatus ? 'dark' : 'light',
		hoverShadow: 'default',
		isLight: !darkModeStatus,
		size: 'lg',
	};
	return (
		<div className='ml-3 mr-3'>
			<div className='container-fluid'>
				<div className='row rounded-lg' style={brockaiBg}>
					<div className='col'>
						<h3 className='pt-2 inline-flex items-center' style={textColorStyle}>
							<Icon
								icon='verified_user'
							/>
							&nbsp;&nbsp;AI BOM Check
						</h3>
					</div>
					<div className='col-auto'>
						<div className="row pt-2 pr-4">
							<Button
								size="sm"
								color='light'
								isOutline
							>
								Prototype
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeHeader;
