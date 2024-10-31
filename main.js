//TASK 2 Fetch Tickets Using Async/Await and Handle Errors:

//using the aysnc function to fetch the tickets from the api
async function fetchTickets() {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';

    try {
        //fetch the data from the api 
        const response = await fetch(apiURL);

        //if the response is not working, implement error
        if (!response.ok) {
            throw new Error('Network response was not working');
        }

        //use JSON data from the response 
        const tickets = await response.json();

        //if no tickets are found, throw a new custom error
        if (tickets === 0) {
            throw new Error('No unresolved tickets available');
        }
    

  }  } 
  