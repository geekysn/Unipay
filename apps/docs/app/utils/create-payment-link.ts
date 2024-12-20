"use server"
import { custom } from 'zod';
import Razorpay from './razorpay';

const razorpay = new Razorpay(process.env.key_id||"", process.env.key_secret||"");

interface Customer {
  name: string;
  email: string;
  contact: string;
}
const paymentLinkData = {
  upi_link: false,
  currency: "INR",
  customer:{} as Customer,    
  amount:0 as Number,
  first_min_partial_amount: 100,
  description: "For Demo purpose",
  notify: {
    sms: true,
    email: true,
  },
};

export const createStandardLink = (customer:Customer,amount:Number) => {
  paymentLinkData.customer = customer;
  paymentLinkData.amount = amount;
  console.log("Creating standard payment link");
  return razorpay.createPaymentLink(paymentLinkData);
};