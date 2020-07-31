import React from 'react';
import classes from  './Person.css';

const Person = (props) => {
	return (
		<div className={classes.Person}>
		   <p  onClick={props.clicked} >My name is {props.name} and age is {props.age}</p>
		   <input type="text" onChange={props.changed} value={props.name} />
		</div>
		)
}

export default Person;