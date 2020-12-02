import React from 'react';

export const DiaryEntry = () => {
	return (
		<div className='diary__entry pointer'>
			<div
				className='diary__entry-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage:
						'url(https://www.dzoom.org.es/wp-content/uploads/2017/07/via-lactea-lightpainting-810x540.jpg)',
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
