import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import './SideNav.scss';

import Image from 'react-bootstrap/Image';

const { Sider } = Layout;

const items = [
	{
		key: '/bextools-board',
		label: 'BexTools Board',
		icon: '/images/home.svg'
	},
	{
		key: '/pair-explorer',
		label: 'Pair Explorer',
		icon: '/images/home.svg'
	},
	{
		key: '/big-swap-explorer',
		label: 'Big Swap Explorer',
		icon: '/images/telescope.svg'
	},
	{
		key: '/multi-swap',
		label: 'MultiSwap',
		icon: '/images/multiple-files.svg'
	},
	{
		key: '/wallet-info',
		label: 'Wallet Info',
		icon: '/images/wallet.svg'
	}
];

const SideNav = () => {
	const location = useLocation();
	const history = useHistory();
	const onClickMenu = (item) => {
		const clicked = items.find((_item) => _item.key === item.key);
		history.push(clicked.key);
	};
	return (
		<div id='sidenav'>
			<Sider
				breakpoint='lg'
				collapsedWidth='0'
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}>
				<div className='logo' style={{ width: '100%', textAlign: 'center' }}>
					<Image src='/images/favicon.svg' alt='logo' />
					<p>BEXTOOLSBOARD</p>
				</div>
				<Menu
					theme='dark'
					mode='inline'
					defaultSelectedKeys={[location.pathname]}
					selectedKeys={[location.pathname]}
					onClick={onClickMenu}>
					<Menu.Item
						key='/bextools-board'
						icon={<Image src='/images/home.svg' style={{ height: '14px' }} alt='link' />}>
						BexTools Board
					</Menu.Item>
					<p className='sub-title'>UNISWAP</p>
					{items.slice(1).map((item, index) => (
						<Menu.Item
							key={item.key}
							icon={<Image src={item.icon} style={{ height: '14px' }} alt='link' />}>
							{item.label}
						</Menu.Item>
					))}
				</Menu>
			</Sider>
		</div>
	);
};
export default SideNav;
