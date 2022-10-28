import React from "react";

function Light({ color, activelight, handleChange }) {
		const handleClick = (color) => {
			handleChange(color);
		};
	return (
	<div 
	className="light"
	style={{backgroundColor: activelight === color ? color : "grey"}}
	onClick={() => handleClick(color)}
	/>
	);
}

export default Light;