"use server";
import Razorpay from './razorpay';

const razorpay = new Razorpay(process.env.key_id||"", process.env.key_secret||"");

export const getCustomers = () => {
  razorpay.getCustomers();
};