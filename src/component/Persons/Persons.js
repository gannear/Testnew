import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
	return(
		<div>
		    {props.pdata.map((p,index) => 
		    	  <Person 
		    	  name={p.name} 
		    	  age={p.age} 
		    	  key={p.id}  
		    	  clicked ={() => props.click(index)}
		    	  changed = {(event) => props.changed(event,p.id)}
		    	   />
		    )
		  
		    }
		</div>
		)
}

export default Persons;