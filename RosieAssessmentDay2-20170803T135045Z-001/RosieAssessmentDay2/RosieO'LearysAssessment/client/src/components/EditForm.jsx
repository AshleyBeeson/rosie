import React from 'react';

export default class EditForm extends React.Component{//was going to start but I knew it was going to take to much time
	
	constructor(props){
		super(props);
		this.state={
			bugId: this.props.editbug
		}
		console.log(this.state.bugId);
	}
	
	render(){
		return(
			<form>
				<input placeholder= {this.state.bugid}/>
				<input placeholder= 'User'/>
				<input placeholder= 'Date'/>
				
			</form>);
	}
}