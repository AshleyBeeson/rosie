import React from 'react';
import appStore from '../store/AppStore';

export default class Search extends React.Component{//this was started without much time left so functionality is not right
	
	constructor(props){
		super(props);
		this.bugsArray = [];
		this.initialbugsArray=[];
	}
	componentWillMount(){
		appStore.on('DATALOADED',()=>{
			this.bugsArray= this.props.bugs;
			this.initialbugsArray= this.props.bugs;
	
		})
	}
	componentWillUnmount(){
		console.log(this.state.bugs);
		appStore.removeListener('DATALOADED', ()=>{

		this.setState({bugs: appStore.getBugs()});
		console.log('Data Loaded');
	});
		console.log('Removing Listener');
	}
	componentWillReceiveProps(newProps){
		
		this.bugsArray= this.props.bugs;// once a prop is changed, the component is ready for a the new one and will update

	}
	filterBugs(e){//functionality isnt working but the idea was to run through every part of the information and see if the lowercase versions match
		const bugs = this.bugsArray;
		const filteredArray = [];
		 for(let i= 0 ; i < filteredArray.length; i++){
			if (!filteredArray[i].summary.toLowerCase().includes(e.target.value.toLowerCase)){
				filteredArray.push(bugs[i]);
			}
			else if (filteredArray[i].description.toLowerCase().includes(e.target.value.toLowerCase)){
				filteredArray.push(bugs[i]);
			}
			else if (filteredArray[i].dateCreated.includes(e.target.value.toLowerCase)){
				filteredArray.push(bugs[i]);
			}
			else if (filteredArray[i].id.includes(e.target.value.toLowerCase)){
				filteredArray.push(bugs[i]);
			}
			else if (filteredArray[i].issueId.toLowerCase().includes(e.target.value.toLowerCase)){
				filteredArray.push(bugs[i]);
			}
			else if (filteredArray[i].reporter.toLowerCase().includes(e.target.value.toLowerCase)){
				filteredArray.push(bugs[i]);
			}
			else if (filteredArray[i].assignedUser.toLowerCase().includes(e.target.value.toLowerCase)){
				filteredArray.push(bugs[i]);
			}
		} 
		if (filteredArray[0]===''){
			this.props.onArrayChange(this.initialbugsArray);
		}
		else{
		this.props.onArrayChange(filteredArray);}
	}
	
	render(){
		return(
			<div>
					<input className='element mdl-textfield__input' placeholder= 'Search' onChange={this.filterBugs.bind(this)}/>
			</div>);
	}
}