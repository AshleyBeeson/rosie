function fetchBugs(cb){//connects to the api/bugs to 'fetch' the information from the database
console.log('bugs have been fetched');
	return fetch(`/api/bugs`, {
    accept: "application/json"
	
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
	
}
function fetchBugActions(cb){//connects to the bug actions api, fetching the information
console.log('bugs have been fetched');
	return fetch('/api/bugActions', {
    accept: "application/json"
	
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
	
}

function checkStatus(response) {//watches any call for the fetch functions and prints out the an error in fetching
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  return response.json();
}
const Client = {fetchBugs, fetchBugActions};

export default Client;//exports functions
