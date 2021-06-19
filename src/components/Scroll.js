import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '1.5px solid black', height: '420px', marginTop: '30px', backgrounColor: 'pink'}}>
			{props.children}
		</div>
	)
}


export default Scroll;