import React, { FC } from 'react';
import PropTypes from 'prop-types';
import bmellogo from '../assets/logos/bmellogo.png';

interface ILogoProps {
	height?: number;
}

const Logo: FC<ILogoProps> = ({ height }) => {
	return (
		<div></div>
		// <div>
		// 	<img src={bmellogo} alt="Logo" height={height} />
		// </div>
	);
};

Logo.propTypes = {
	height: PropTypes.number,
};
Logo.defaultProps = {
	height: 854,
};

export default Logo;
