describe("User", function() {
  var Table = require('../src/components/BugTable');


  it("should be able order the ids in ascendingOrder", function() {
    Table.setState({orderid:true})
	Table.orderIDArray;
	
    expect(Table.state.bugsArray[0].id).toEqual(0);
  });
});
