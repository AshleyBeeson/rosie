import React from 'react';
import Client from '../api/Client';
import appStore from '../store/AppStore';

export default class BugActionsTable extends React.Component{//this component does not work because of the object actions in the array
															//I was going to add a button from BugTable.jsx that would pass up a value of true or false
															//whether the table should appear.
	
	constructor(){
		super();
		this.state={
			bugActions: [],
			activeAction: false,
			
		}
		this.ActionsArray=[];
		
	}
	
	componentDidUpdate(){
		if(this.props.bugActions!==this.state.bugActions){
			this.setState({
				bugActions: this.props.bugActions
			});
			
		}
		else{
			this.ActionsArray= [];
			var ActionsArray= this.ActionsArray;
			var bugActions= this.state.bugActions;
			for (let i = 0; i <bugActions.length; i++) {
			ActionsArray.push({
					id: bugActions[i].id,
					actions: {user: bugActions[i].actions.user,
							action: bugActions[i].actions.action }
				})
			}
			console.log(ActionsArray);
			this.ActionsArray = ActionsArray;
		}
		
	}
	
	componentDidMount(){
		appStore.on('DATALOADED',()=>{
			this.setState({
				bugsActions: this.props.bugActions,

			});
		});
		
		console.log('Bug Actions Mounted');

	}
	componentWillUnmount(){
		appStore.removeListener('DATALOADED',()=>{
			this.setState({
				bugsActions: this.props.bugActions,
			});
		});
		console.log('Removing Listener');
	}
	
	
	
	
	render(){

	console.log(this.state.bugActions);
	var ActionsArray= this.ActionsArray;

		return(<div>
					<div>
						<table className="mdl-data-table mdl-data-js-table">
							<thead>
								<tr>
									<th>
										Bug Id
									</th>
									<th>
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								{this.state.bugActions.map((data,index)=>{
									<tr key = {index}>
		
										<td  value={this.state.bugActions[index].id}>
											{this.state.bugActions[index].id}
										</td>
										<td value = {this.state.bugActions[index].actions.user}>
											{this.state.bugActions[index].actions.user}
										</td>
								
	
									</tr>
								})}
							</tbody>
						</table>
					</div>
				</div>
		);
	}
}

