import React from 'react';

export const DiaryEntry = () => {
	return (
		<div className='diary__entry pointer'>
			<div
				className='diary__entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://lh3.googleusercontent.com/proxy/FPTNkwDGKwvrjnwx4RQYGVDKI8l89vDXCj5y1IfRlzGyKWtVHrcPlsdDrGgq9kW9c9qHUblW9SQNRrDgjed-Pl7GefNyKvrovrcTr-pZsy6fN01XgnX4FA1JKrTEp8wESmV56tZWpDNhKFODJRkLSNymt_yNnKnKRSTYc7bEig15mGZ0)',
				}}
			></div>
			<div className='diary__entry-body'>
				<p className='diary__entry-title'>New day</p>
				<p className='diary__entry-content'>
					Esse sint consectetur elit Lorem.
				</p>
			</div>
			<div className='diary__entry-date-box'>
				<span>Sunday</span>
				<h4>10</h4>
			</div>
		</div>
	);
};
