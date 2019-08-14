import React from 'react';
import { useStateValue } from '../context/state';

const Footer = () => {
	const [{ config }] = useStateValue();
	return <footer>
		<p>{config.footerMsg || 'Htm Jest Reporter'}</p>
		<small>v - 2.0</small>
	</footer>
}

export default Footer