import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
	return (
		<div>
			<input 
			className='pa3 ba b--violet bg-yellow'
			type='Search' 
			placeholder='Search cats' 
			onChange={searchChange}
			/> 
		</div>
	);
}

export default Searchbox;