"use server";
import Razorpay from './razorpay';

const razorpay = new Razorpay(process.env.key_id||"", process.env.key_secret||"");

interface Customer {
  name: string;
  email: string;
  contact: string;
}

export const createCustomer = (customerData:Customer) => {
  return  razorpay.createCustomer(customerData);
};
