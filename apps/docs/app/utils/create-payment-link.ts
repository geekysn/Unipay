import axios from 'axios';
import base64 from 'base-64';
import { not } from 'mathjs';

// Define your key and secret
const apiKey = process.env.key_id;
const apiSecret = process.env.key_secret;

// Razorpay API endpoint for creating a customer
const url = 'https://api.razorpay.com/v1/payment_links';

// Customer data
const UPIPaymentDetails = {
  upi_link: false,
  amount: 500*100,

  currency: "INR",


  first_min_partial_amount: 100,

  description: "For Demo purspose",

  customer: {

    name: "Rudra Kumar",

    email: "tinkusharmarock@gmail.com",

    contact: "+917027037173"
  },
  notify: {
    sms: true,
    email: true,
  },
}

// Encode the API key and secret in base64
const authHeader = 'Basic ' + base64.encode(`${apiKey}:${apiSecret}`);

// Send the POST request with Basic Authentication
export const createStandardLink=()=>{
    axios.post(url, UPIPaymentDetails, {
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log("Customer created successfully:", response.data);
      })
      .catch(error => {
        console.error("Failed to create customer:", error.response);
      });
}