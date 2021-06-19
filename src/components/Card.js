import React from 'react';

const Card = ({id, name, username, email}) => {
	return (
		<div className='bg-silver dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
			<img alt='user' src={`https:robohash.org/${id}?set=set4&size=100x100`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
				<p>{username}</p>
			</div>
		</div>
	);
}

export default Card;