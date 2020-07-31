import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
	let btncss = '';
        if(props.showpersondata){
    	btncss = classes.Red;
        }
	return (
		<div className={classes.Cockpit}>
		   <h1>React App</h1>
           <button className={btncss} onClick={props.toggleclick}>Toggle</button>
		</div>
		)
}
export default Cockpit;