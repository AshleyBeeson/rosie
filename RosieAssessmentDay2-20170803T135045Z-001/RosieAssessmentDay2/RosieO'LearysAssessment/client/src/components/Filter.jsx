import React from 'react';
import appStore from '../store/AppStore';

export default class Filter extends React.Component{
	
	constructor(props){
		super(props);
		this.bugsArray = [];
		this.initialbugsArray=[];
		this.mediumSeverity= [];
		this.highPriority=[];
		this.lowSeverity=[];
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
		
		this.bugsArray= this.props.bugs;

	}
	getMediumSeverityBugs(e){
		this.bugsArray= this.initialbugsArray;
		this.mediumSeverity=[];
		const mediumSeverity = this.mediumSeverity;
		
		const bugsArray = this.bugsArray;
		
		for (let i =0; i<bugsArray.length; i++){
			if (bugsArray[i].severity==='MEDIUM')
			{
				mediumSeverity.push(bugsArray[i]);
			}
		}
		console.log(mediumSeverity);
		this.bugsArray= mediumSeverity;					//filters through the array and passes up data to be passed down to the booking table component
		this.sendPropsOn(e);
		
	}
	getHighPriorityBugs(e){
		this.bugsArray= this.initialbugsArray;
		this.highPriority=[];
		const bugsArray = this.bugsArray;
		const highPriority= this.highPriority;
		
		for (let i= 0; i<bugsArray.length; i++){
			if (bugsArray[i].highPriority==='TRUE'){
				highPriority.push(bugsArray[i])
			}
		}
		this.bugsArray = highPriority;
		this.sendPropsOn(e);
	}
	getLowSeverityBug(e){
		this.bugsArray= this.initialbugsArray;
		this.lowSeverity=[];
		const bugsArray = this.bugsArray;
		const lowSeverity= this.lowSeverity;
		
		for (let i= 0; i<bugsArray.length; i++){
			if (bugsArray[i].severity==='LOW'){
				lowSeverity.push(bugsArray[i])
			}
		}
		this.bugsArray = lowSeverity;
		this.sendPropsOn(e);
	}
	sendPropsOn(e){
		this.props.onArrayChange(this.bugsArray);
	}
	resetArray(e){
		
		this.props.onArrayChange(this.initialbugsArray);
	}
	
	
	
	
	render(){
		return(
			<div className='element center'>
			
					<button className='element mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick= {this.getMediumSeverityBugs.bind(this)}>Medium Severity</button>
					<button className='element mdl-button mdl-js-button mdl-button--raised mdl-button--colored'onClick={this.getHighPriorityBugs.bind(this)}>High Priority</button>
					<button className='element mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick={this.getLowSeverityBug.bind(this)}>Low Severity</button>
					<button className='element mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick={this.resetArray.bind(this)}>Reset</button>
	
			</div>);
	}
}