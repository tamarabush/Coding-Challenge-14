document.addEventListener('DOMContentLoaded', fetchTickets);

// TASK 2 - Fetch Tickets Using Async/Await and Handle Errors:

//using the async function to fetch the tickets from the API
async function fetchTickets() {
    const apiURL = 'https://jsonplaceholder.typicode.com/posts';

    try {
        console.log('Fetching data from API...');
        //fetch the data from the API
        const response = await fetch(apiURL);

        //if the response is not working, implement error
        if (!response.ok) {
            throw new Error('Network response was not working');
        }

        //use JSON data from the response
        const tickets = await response.json();
        console.log('Data fetched:', tickets);

        //if no tickets are found, throw a new custom error
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets available');
        }

        //call the function to display tickets
        displayTickets(tickets);
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('error-message').textContent = `Error: ${error.message}`;
    // TASK 4 - Use finally to Ensure Cleanup
    } finally {
        console.log('Fetch attempt finished');
    }
}

// TASK 3 - Display Tickets Dynamically on the Page:

function displayTickets(tickets) {
    const container = document.getElementById('ticket-container');
    console.log('Displaying tickets...');

    //using forEach method to iterate over the tickets
    tickets.forEach(ticket => {
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

    console.log('Tickets displayed.');
}
