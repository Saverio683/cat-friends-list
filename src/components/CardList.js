import React from 'react';
import Card from './Card';

const CardList = ({kitties}) => {
	return (
		<div className='container' style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 3fr))'}}>
			{
				kitties.map((usr, i) => {
					return (
						<Card
						key={i} 
						id={kitties[i].id} 
						name={kitties[i].name} 
						username={kitties[i].username}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;