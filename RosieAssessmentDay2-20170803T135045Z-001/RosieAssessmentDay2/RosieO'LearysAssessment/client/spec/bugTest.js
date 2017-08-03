describe("The computer", function() {
	var Table = require('./../src/components/BugTable.jsx');
	var AppStore = require('./../src/store/AppStore.js');

  it("should be able order the ids in ascending order", function() {
    Table.setState({orderid:true});
	Table.orderIDArray;
	
    expect(Table.state.bugsArray[0].id).toEqual(0);
  });
  
  it ('should be able the order the ids in descending order', function(){
	  Table.setState({orderid:false});
	  Table.orderIDArray;
	  
	  expect(Table.state.bugsArray[0].id).toEqual(6);
  }); 
	
  it ('should be able to fetch from the api to get all the bugs', function(){
	  AppStore.loadData();
	  const bugs = AppStore.getBug();
	  
	  expect(bugs[0].id).toEqual(AppStore.bugs);
	  
  });
});
