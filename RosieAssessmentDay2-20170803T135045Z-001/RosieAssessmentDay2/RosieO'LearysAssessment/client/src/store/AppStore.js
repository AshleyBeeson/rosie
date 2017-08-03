import {EventEmitter} from "events";
import Client from "../api/Client";

class AppStore extends EventEmitter {// a store of methods mainly used for fetching the data from the api
									// it brings in functions from the fetching API file 'Client.js'
									//and emits to tell the App and other components they can begin setting states
	constructor(){
		super();
		this.bugs= [];
		this.bugActions=[];
		
	}
	loadData(){
		let thisStore=this;
		Client.fetchBugs(bugs => {//sets api information to data
			this.bugs = bugs;
		});
		Client.fetchBugActions(bugActions => {
			this.bugActions = bugActions;
			setTimeout(function(){thisStore.emit('DATALOADED')},300);
		});
		
	}
	getBugs(){
		console.log(this.bugs);//returns data 
		return this.bugs;
	}
	getBugActions(){
		console.log(this.bugActions);
		return this.bugActions;
		
	}
	
	
	
}
const appStore = new AppStore();
export default appStore;

