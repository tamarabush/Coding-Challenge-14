document.addEventListener('DOMContentLoaded', fetchTickets);
//TASK 2 - Fetch Tickets Using Async/Await and Handle Errors:

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
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets available');
        }

        displayTickets(tickets);
    } catch (error) {
        document.getElementById('error-message').textContent = `Error: ${error.message}`;
    //TASK 4 - Use finally to Ensure Cleanup
    } finally {
        console.log('Fetch attempt finished');
    }
}


//TASK 3 - Display Tickets Dynamically on the Page:

function displayTickets(tickets) {
    const container = document.getElementById('ticket-container');

    tickets.forEach(ticket => {
        //using for each method to iterate over the tickets 
        //using innerHTML to create HTML elements for each element
        const ticketElement = document.createElement('div');
        ticketElement.innerHTML = `
            <h2>Ticket ID: ${ticket.id}</h2>
            <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
            <p><strong>Issue Description:</strong> ${ticket.title}</p>
            <p><strong>Details:</strong> ${ticket.body}</p>
            <hr>
        `;
        container.appendChild(ticketElement);
    });
}
