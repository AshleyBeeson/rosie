import React from 'react';
import Client from '../api/Client';
import EditForm from './EditForm';
import appStore from '../store/AppStore';
export default class BugTable extends React.Component{
	

	constructor(){
		super();
		this.actions= [],
		this.state={
			bugsArray: [],
			actionAct: false,
			orderid:true,
			orderdate:true,
			orderIssue:true,
			editbug:0,
			editActive:false,
			activeAction:false
			
		};
		this.actionArray= [];
	}
	componentDidMount(){
		appStore.on('DATALOADED',()=>{this.setState({
			bugsArray: this.props.bugs,
			activeAction:this.props.activeAction
		});
		})
		console.log('BugData Mounted');
		console.log(this.state.bugsArray);
	}
	componentWillUnmount(){
		console.log(this.state.bugs);
		appStore.removeListener('DATALOADED', ()=>{

		this.setState({
			bugs: appStore.getBugs()});
	});
		console.log('Removing Listener');
	}
	componentWillReceiveProps(newProps){
		this.setState({
			bugsArray: this.props.bugs,
		});
	}
	componentWillUpdate(){
		if (this.props.ActiveAction!==this.state.ActiveAction){
			this.props.actionChange(this.state.ActiveAction);
		}
	}
	
	
	orderIDArray(e){												// these order functions utilise a sort() function built into js which compares each of the ascii values of 
																	//each value depending whether the return is negative or positive
	if(this.state.orderid===true){									//for descending order I switched the values around
		const orderedBugArray = this.state.bugsArray;				//If I had more time i would have changed all the values to lowercase just in case
		const orderedBugArray1=orderedBugArray.sort(function(a,b) {
        if(a.id < b.id) {
            return -1;
        }
        else {
            return 1;
        }
    });

		this.setState({bugsArray: orderedBugArray1,
						orderid:false});
	}
	else{
		const orderedBugArray = this.state.bugsArray;
		const orderedBugArray1=orderedBugArray.sort(function(a,b) {
        if(a.id < b.id) {
            return 1;
        }
        else {
            return -1;
        }
    });
		this.setState({bugsArray: orderedBugArray1,
						orderid:true});}
	}
	orderDateArray(e){
	if(this.state.orderdate===true){
		const orderedBugArray = this.state.bugsArray;
		const orderedBugArray1=orderedBugArray.sort(function(a,b) {
        if(a.dateCreated < b.dateCreated) {
            return -1;
        }
        else {
            return 1;
        }
    });;
		this.setState({bugsArray: orderedBugArray1,
			orderdate:false});
	}
	else{
		const orderedBugArray = this.state.bugsArray;
		const orderedBugArray1=orderedBugArray.sort(function(a,b) {
        if(a.dateCreated < b.dateCreated) {
            return 1;
        }
        else {
            return -1;
        }
    });
		this.setState({bugsArray: orderedBugArray1,
						orderdate:true});}
	}
	orderIssueArray(e){
	if(this.state.orderIssue===true){
		const orderedBugArray = this.state.bugsArray;
		const orderedBugArray1=orderedBugArray.sort(function(a,b) {
        if(a.issueId < b.issueId) {
            return -1;
        }
        else {
            return 1;
        }
    });
		this.setState({bugsArray: orderedBugArray1,
						orderIssue:false});
	}
	else{
		const orderedBugArray = this.state.bugsArray;
		const orderedBugArray1=orderedBugArray.sort(function(a,b) {
        if(a.issueId < b.issueId) {
            return 1;
        }
        else {
            return -1;
        }
    });
		this.setState({bugsArray: orderedBugArray1,
						orderIssue:true});}
	}
	/* setEditId(e){
		console.log(e.target.value);
		this.setState({
			editbug: e.target.value
		});

	} */
	seeAction(e){
		if (!this.state.activeAction){
			this.setState({activeAction:true})
		}
		if (!this.state.activeAction){
			this.setState({activeAction:false})
		}
	}
	render(){
	var bugsArray = this.state.bugsArray;
		return(
			<div>
				<table className="element mdl-data-table mdl-data-js-table mdl-data-table--selectable mdl-shadow--2dp ">
				<thead>
					<tr className="mdl-data-table__cell--non-numeric">
						<th>
							<button className= 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored'onClick={this.orderIDArray.bind(this)}>ID</button>
						</th>
						<th >
							<button className= 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick={this.orderIssueArray.bind(this)}>Issue ID</button>
						</th>
						<th>
							<button className= 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' onClick= {this.orderDateArray.bind(this)}>Date created</button>
						</th>
						<th className="mdl-data-table__cell--non-numeric">
							Summary
						</th>
						<th>
							Description
						</th>
						<th>
							High priority
						</th>
						<th>
							Severity
						</th>
						<th>
							Reporter
						</th>
						<th>
							Assigned user
						</th>
						<th>
							Status
						</th>
					</tr>
					</thead>
					<tbody>
					{bugsArray.map((data,index)=>(				//iterates through the array and fills rows with corresponding data
						<tr key ={index}>
							<td id={bugsArray[index].id}  value={bugsArray[index].id}>
								{bugsArray[index].id}
							</td><td  value ={bugsArray[index].issueId}>
								{bugsArray[index].issueId}
							</td>
							<td value ={bugsArray[index].dateCreated}>
								{bugsArray[index].dateCreated}
							</td>
							<td value={bugsArray[index].summary}>
								{bugsArray[index].summary}
							</td>
							<td value={bugsArray[index].description} >
								{bugsArray[index].description}
							</td>
							<td value={bugsArray[index].highPriority}>
								{bugsArray[index].highPriority}
							</td>
							<td value={bugsArray[index].severity}>
								{bugsArray[index].severity}
							</td>
							<td value={bugsArray[index].reporter}>
								{bugsArray[index].reporter}
							</td>
							<td value={bugsArray[index].assignedUser}>
								{bugsArray[index].assignedUser}
							</td>
							<td value={bugsArray[index].status}>
								{bugsArray[index].status}
							</td>

						</tr>))}
					</tbody>
					
				</table>
				
			
			</div>
				
			
		);
	}
	
}
//<EditForm editbug= {this.state.editbug}/>



/* <table>
					<thead>
						<tr>
						<th>
							Bug ID
						</th>
						<th>
							Actions taken
						</th>
						</tr>
					</thead>
					
					<tbody>
					{bugsArray.map((data, index)=>{
							<tr key = {index}>
								<td value= {bugsArray[index].id}>
									{bugsArray[index].id}
								</td>
								<td value = {bugsArray[index].id}>
									{bugsArray[index].actions.map((data,index)=>{
										<div value={bugsArray[index].actions[index].user}>{bugsArray[index].actions[index].user}</div>
										<div value={bugsArray[index].actions[index].dateCreated}>{bugsArray[index].actions[index].dateCreated}</div>
									})}
								</td>
							</tr>
					})}
					</tbody>
				</table> */