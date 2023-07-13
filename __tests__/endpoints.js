const Client = require('../index.js');

// Create an instance of the Client class with the authorization token
const client = new Client('YOUR_AUTH_TOKEN');

// Test the getFact() method
client.getFact()
  .then((fact) => {
    console.log('Fact:', fact);
  })
  .catch((error) => {
    console.error('Error retrieving fact:', error);
  });

// Test the getWaifu() method
client.getWaifu()
  .then((waifu) => {
    console.log('Waifu:', waifu);
  })
  .catch((error) => {
    console.error('Error retrieving waifu:', error);
  });
