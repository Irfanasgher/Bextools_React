import React from 'react';
import { NavDropdown, Image } from 'react-bootstrap';

import './Navbar.scss';
const Navbar = () => {
	return (
		<div id='navbar1'>
			<div className='d-flex align-items-center justify-content-between'>
				<div className='d-flex align-items-center'>
                <Image src='/images/BTLogo.png' alt='logo' width='140px' />
					<p className='list'>Home</p>
					<p className='list'>
						Pools
					</p>
					<p className='list mr-2'>Pairs</p>
					<NavDropdown title='More' id='basic-nav-dropdown' className='custom-dropdown'>
						<NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
						<NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
					</NavDropdown>
				</div>
				<div className='d-md-block d-none mr-3'>
					<div className='d-flex align-items-center connect'>
						<Image src='/images/wellet.svg' alt='logo' height="15"/>
						<p className='wallet ml-3'>Connect Wallet</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

