import React from 'react';

import { Row, Col, Input, Tooltip, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Image from 'react-bootstrap/Image';
import LayoutWrapper from '../../LayoutWrapper';

import './BexToolsBoard.scss';

const UNISWAP = () => {
	const toolsData = [
		{
			id: 1,
			img: '/images/linkYellow.svg',
			heading: 'Pair Explorer'
		},
		{
			id: 2,
			img: '/images/swap.svg',
			heading: 'Big Swap Explorer'
		},
		{
			id: 3,
			img: '/images/multiple-swap.svg',
			heading: 'MultiSwap'
		},
		{
			id: 4,
			img: '/images/walletYellow.svg',
			heading: 'Wallet Info'
		}
	];

	const polkData = [
		{
			id: 1,
			heading: 'Mod',
			currency: '$20770717',
			success: false
		},
		{
			id: 2,
			heading: 'Super',
			currency: '$20770717',
			success: false
		},
		{
			id: 3,
			heading: 'Mod',
			currency: '$20770717',
			success: true
		},
		{
			id: 4,
			heading: 'ID',
			currency: '$20770717',
			success: true
		},
		{
			id: 5,
			heading: 'Mod',
			currency: '$20770717',
			success: false
		},
		{
			id: 6,
			heading: 'Lpool',
			currency: '$20770717',
			success: true
		},
		{
			id: 7,
			heading: 'Mod',
			currency: '$20770717',
			success: true
		},
		{
			id: 8,
			heading: 'POLS',
			currency: '$20770717',
			success: false
		},
		{
			id: 9,
			heading: 'Mod',
			currency: '$20770717',
			success: true
		},
		{
			id: 10,
			heading: 'VSP',
			currency: '$20770717',
			success: true
		},
		{
			id: 11,
			heading: 'Mod',
			currency: '$20770717',
			success: false
		}
	];
	return (
		<LayoutWrapper>
			<div id='uniswap'>
				<Row gutter={30}>
					<Col lg={14} md={24} sm={24}>
						<div className='tools p-4'>
							<h1 className='swap-tools'>
								Uniswap <span>Tools</span>
							</h1>
							<Row gutter={30}>
								{toolsData.map((item, index) => {
									return (
										<Col lg={12} md={24} sm={24} xs={24} className='mt-4' key={index}>
											<div className='tool-container py-5'>
												<Image src={item.img} height='50px' alt='pair' />
												<h2 className='pair-explorer mt-3'>{item.heading}</h2>
											</div>
										</Col>
									);
								})}
							</Row>
						</div>

						<div className='tools p-4 mt-4'>
							<h1 className='swap-tools'>
								Hot <span>Pairs</span>
							</h1>
							<div className='polk p-lg-5 p-3 d-flex justify-content-between align-items-end'>
								<h2 className='polkamar'>
									POLK <br /> <span>Polkamarkets</span>
								</h2>
								<p className='currency'>$20770717</p>
								<Image src='/images/swap.svg' className='pair-image' height='50px' alt='pair' />
							</div>

							<div className='rowData p-4'>
								{polkData.map((item, index) => {
									return (
										<div>
											<Row className='mt-1' key={index}>
												<Col md={11} sm={11} xs={8}>
													<h2 className='mod'>{item.heading}</h2>
												</Col>
												<Col md={8} sm={8} xs={12}>
													<p
														className={`${
															item.success ? 'currency-green' : 'currency-red'
														}`}>
														{' '}
														{item.currency}{' '}
													</p>
												</Col>
												<Col md={5} sm={5} xs={4} className='text-md-right'>
													<Image src='/images/swap.svg' className='inner-image' alt='pair' />
												</Col>
											</Row>
											<hr />
										</div>
									);
								})}
							</div>
						</div>
					</Col>
					<Col lg={10} md={24} sm={24} className='mt-lg-0 mt-4'>
						<div className='d-flex align-items-center justify-content-between input-field'>
							<Input
								size='large'
								placeholder='large size'
								prefix={<SearchOutlined />}
								style={{ width: '90%' }}
							/>
							<Tooltip title='search'>
								<Button shape='circle' type='primary' icon={<SearchOutlined />} />
							</Tooltip>
						</div>
						<div className='tools p-4 mt-4'>
							<h1 className='swap-tools'>
								Hot <span>News</span>
							</h1>
							<div className='d-flex justify-content-between'>
								<div className='d-flex align-items-center'>
									<span className='token-info ng-star-inserted'>
										<img
											width='22'
											height='22'
											className='logo'
											style={{
												display: 'inline-block',
												borderRadius: '50%'
											}}
											src='/images/mod.png'
										/>
										<span className='symbol ml-2' style={{ color: '#cacedb', fontWeight: '600' }}>
											MOD
										</span>
										<a
											href='#'
											className='fa fa-wpexplorer fa-2x token-action ng-star-inserted ml-2'
											style={{ fontSize: '20px' }}></a>
									</span>
								</div>
								<span className='created'>2021-02-18, 04:26</span>
							</div>
							<h3 className='title mt-3 mb-1 ng-star-inserted-heading'>
								{' '}
								Modefi is now listed on CoinMarketCap!{' '}
							</h3>
							<p className='p-0 mt-4 description ng-star-inserted text-white'>
								Just in the last 36 hours! <br />
								<br /> 📈 $40M Volume <br />
								🏆 #1 trending on DEXTools
								<br />
								<br /> ✅ Coingecko
								<br /> ✅ TrustWallet
								<br /> ✅ Uniswap <br />✅ Etherscan
								<br /> ✅ CoinMarketCap{' '}
								<a
									// target='_blank'
									className='news-link'>
									<i className='fa ml-2 fa-external-link'></i>
								</a>
							</p>
							<hr />
							<div className='d-flex justify-content-between'>
								<div className='d-flex align-items-center'>
									<span className='token-info ng-star-inserted'>
										<img
											width='22'
											height='22'
											className='logo'
											style={{
												display: 'inline-block',
												borderRadius: '50%'
											}}
											src='/images/mod.png'
										/>
										<span className='symbol ml-2' style={{ color: '#cacedb', fontWeight: '600' }}>
											MOD
										</span>
										<a
											href='#'
											className='fa fa-wpexplorer fa-2x token-action ng-star-inserted ml-2'
											style={{ fontSize: '20px' }}></a>
									</span>
								</div>
								<span className='created'>2021-02-18, 04:26</span>
							</div>
							<h3 className='title mt-3 mb-1 ng-star-inserted-heading'>
								{' '}
								Modefi is now listed on CoinMarketCap!{' '}
							</h3>
							<p className='p-0 mt-4 description ng-star-inserted text-white'>
								Just in the last 36 hours! <br />
								<br /> 📈 $40M Volume <br />
								🏆 #1 trending on DEXTools
								<br />
								<br /> ✅ Coingecko
								<br /> ✅ TrustWallet
								<br /> ✅ Uniswap <br />✅ Etherscan
								<br /> ✅ CoinMarketCap{' '}
								<a
									// target='_blank'
									className='news-link'>
									<i className='fa ml-2 fa-external-link'></i>
								</a>
							</p>
						</div>

						<div className='tools p-4 mt-4'>
							<h1 className='swap-tools'>
								Faetured <span>Sponsors</span>
							</h1>
							<div className='sponsor-principal d-flex align-items-center'>
								<img
									className='logo-next ng-star-inserted'
									alt='NEXT Sponsor Logo'
									src='/images/next.png'
								/>
								<div className='ml-2'>
									<h4 className='sponsor-info mb-0' style={{ color: 'rgb(0, 61, 128)' }}>
										<span className='align-middle token-name mr-2'>NEXT</span>
										<a className='link-pair-explorer ng-star-inserted' href='#'>
											<i className='fa fa-wpexplorer'></i>
										</a>
									</h4>
									<h5 className='extra-info'>
										<span className='mr-2 text-white'>Next.Chain</span>
										<span className='d-inline-block mt-1 links'>
											<a className='link-sponsor-web ng-star-inserted'>
												<i className='fa fa-home mr-2'></i>
											</a>
											<a className='link-sponsor-twitter ng-star-inserted'>
												<i className='fa fa-twitter mr-2'></i>
											</a>
											<a className='link-sponsor-telegram ng-star-inserted'>
												<i className='fa fa-telegram mr-2'></i>
											</a>
										</span>
									</h5>
								</div>
							</div>
							<p className='text-white'>
								The Next.chain is a lightning fast blockchain with assets and smart contracts built on
								bitcoin core technology. Mainnet and live since 2019 with 200 masternode validators.
							</p>
							<hr />
							<div className='sponsor-principal d-flex align-items-center'>
								<img
									className='logo-next ng-star-inserted'
									alt='NEXT Sponsor Logo'
									src='/images/next.png'
								/>
								<div className='ml-2'>
									<h4 className='sponsor-info mb-0' style={{ color: 'rgb(0, 61, 128)' }}>
										<span className='align-middle token-name mr-2'>NEXT</span>
										<a className='link-pair-explorer ng-star-inserted' href='#'>
											<i className='fa fa-wpexplorer'></i>
										</a>
									</h4>
									<h5 className='extra-info'>
										<span className='mr-2 text-white'>Next.Chain</span>
										<span className='d-inline-block mt-1 links'>
											<a className='link-sponsor-web ng-star-inserted'>
												<i className='fa fa-home mr-2'></i>
											</a>
											<a className='link-sponsor-twitter ng-star-inserted'>
												<i className='fa fa-twitter mr-2'></i>
											</a>
											<a className='link-sponsor-telegram ng-star-inserted'>
												<i className='fa fa-telegram mr-2'></i>
											</a>
										</span>
									</h5>
								</div>
							</div>
							<p className='text-white'>
								The Next.chain is a lightning fast blockchain with assets and smart contracts built on
								bitcoin core technology. Mainnet and live since 2019 with 200 masternode validators.
							</p>
						</div>
					</Col>
				</Row>
			</div>
		</LayoutWrapper>
	);
};
export default UNISWAP;
