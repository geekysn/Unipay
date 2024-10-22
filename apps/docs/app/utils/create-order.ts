import axios from 'axios';
import base64 from 'base-64';

// Define your key and secret
const apiKey = 'rzp_test_yKtDZBgQecVeqk';
const apiSecret = '0C6iXbkOrXcE9gZKwKpciuNl';

// Razorpay API endpoint for creating a customer
const url = 'https://api.razorpay.com/v1/orders';

// order data
const orderData ={
    amount: 50000,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "value3",
      key2: "value2"
    }
  };

// Encode the API key and secret in base64
const authHeader = 'Basic ' + base64.encode(`${apiKey}:${apiSecret}`);

// Send the POST request with Basic Authentication
export const createOrder=()=>{
    // console.log("Order created successfully:", orderData);
    axios.post(url, orderData, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log("Order created successfully:", response.data);
      })
      .catch(error => {
        console.error("Failed to create customer:", error.response);
      });
}