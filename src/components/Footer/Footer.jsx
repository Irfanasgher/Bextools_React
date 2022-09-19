import React from 'react';
import Image from 'react-bootstrap/Image';

import './Footer.scss';
const Footer = () => {
	return (
		<div id='footer'>
			<div className='footer-container d-md-flex align-items-center justify-content-between px-5 py-3'>
				<div className='d-flex align-items-center'>
					<Image
						src='/images/telegram.png'
						alt='Telegram'
						className='ml-0'
						style={{ width: '32px', height: '32px', borderRadius: '16px' }}
					/>
					<Image
						src='/images/twitter.svg'
						alt='Twitter'
						className='ml-3'
						style={{ width: '32px', height: '32px', borderRadius: '16px'  }}
					/>
				</div>
				<p className='copyright'>© BEXTOOLS.io Copyrights 2021 - info@bextools.io</p>
			</div>
		</div>
	);
};

export default Footer;
