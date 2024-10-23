import axios from 'axios';
import base64 from 'base-64';

// Define your key and secret
const apiKey = process.env.key_id;
const apiSecret = process.env.key_secret;
// Razorpay API endpoint for creating a customer
const url = 'https://api.razorpay.com/v1/customers';

// Customer data
const customerData = {
  name: "John Doe",
  email: "rohan@..doe@example.com",
  contact: "9876533210"
};

// Encode the API key and secret in base64
const authHeader = 'Basic ' + base64.encode(`${apiKey}:${apiSecret}`);

// Send the POST request with Basic Authentication
export const getCustomers=()=>{
    console.log("Fetching customers...");
    axios.get(url, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log("Customes fetched successfully:", response.data);
      })
      .catch(error => {
        console.error("Failed to fetch customers:", error);
      });
}