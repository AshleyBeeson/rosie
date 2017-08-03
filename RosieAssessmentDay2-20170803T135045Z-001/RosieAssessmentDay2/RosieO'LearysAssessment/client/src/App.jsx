import React from 'react';
import Search from './components/Search.jsx';
import Filter from './components/Filter.jsx';
import BugTable from './components/BugTable.jsx';
import BugActionsTable from './components/BugActionsTable.jsx';
import {EventEmitter} from 'events';
import appStore from './store/AppStore';

export default class App extends React.Component{
	constructor(){

		super();
		appStore.loadData();
		this.state={
			bugs: [],
			bugActions: [],
			activeAction:false
		}
		console.log('Constructor');
	}
	
	
	
	componentWillMount(){
		appStore.on('DATALOADED', ()=>{//once the data has been fetched from the in the AppStore it emits 'DATALOADED'telling this function to start setting states with all the 
										//information retrieved

		this.setState({
			bugs: appStore.getBugs(),
			bugActions: appStore.getBugActions()
		});
		
	});
		
		console.log('Listening');
		
	}
	componentWillUnmount(){//once page has been left the listener will be removed
		console.log(this.state.bugs);
		appStore.removeListener('DATALOADED', ()=>{

		this.setState({
			bugs: appStore.getBugs(),
			bugActions: appStore.getBugActions()}
			);
	});
		console.log('Removing Listener');
	}
	
	handleChange(bugArray){
		this.setState({bugs: bugArray});// from a 'lifted up' prop the state bugs has been reset from its original value
	} 
	actionChange(actionact){
		this.setState({activeAction: actionact})			//uses css from MDL
	}
														//all the information needed for the application is mounted with the parent App and passed down to its children
	render(){
		return(
			<div>
				<ul><h1 className='mdl-color-text--blue-grey-300'>Bug Tracking Display Table</h1></ul>
				<h2 className='mdl-color-text--blue-grey-300'>Search through bugs</h2>
				<Search bugs={this.state.bugs} onArrayChange = {this.handleChange.bind(this)}/>
				<h2  className='mdl-color-text--blue-grey-300'>Filter by</h2>
				<Filter bugs={this.state.bugs} onArrayChange={this.handleChange.bind(this)}/>
				<h2  className='mdl-color-text--blue-grey-300'>Bug Table</h2>
				<BugTable bugs={this.state.bugs} activeAction= {this.state.activeAction} actionChange={this.actionChange.bind(this)}/>
			</div>
		);
	}
}
//<BugActionsTable bugActions={this.state.bugActions} activeAction= {this.state.activeAction}/>			

