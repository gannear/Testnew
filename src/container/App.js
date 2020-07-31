 import React , {Component} from 'react';
 import Persons from '../component/Persons/Persons';
 import Cockpit from '../component/Cockpit/Cockpit';
 import classes from './App.css';

 class App extends Component {
  state = {
    persons : [
            {id:1,name:'ganesh',age:24},
            {id:2,name:'suchita',age:27},
            {id:3,name:'Viraj',age:4}
    ],
    showdata : false
  }
  clickhandler = () => {
    console.log("fddfd");
    const isshow = this.state.showdata;
    this.setState({
      showdata:!isshow
    })
  }
  deletehandler= (index) => {
   const person_delete = [...this.state.persons];
    person_delete.splice(index,1);
    this.setState({
      persons:person_delete
    })

  }

  namechangehandler = (event,id) => {
    const personindex = this.state.persons.findIndex(p =>
      p.id===id
    )
    //alert(personindex);
    const person = {
      ...this.state.persons[personindex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personindex] = person;
    this.setState({
      persons:persons
    })
  }

  render(){

    let data = null;
    let btncss = '';
    if(this.state.showdata){
      data = (
            <Persons 
             pdata={this.state.persons}
             click ={this.deletehandler}
             changed ={this.namechangehandler}
             />
        );
      btncss = classes.Red;
    }
    return(
      <div className={classes.App}>
         
      <Cockpit toggleclick={this.clickhandler} showpersondata={this.state.showdata}/>
         {data}
      </div>
      )
  }
 }

 export default App;