import { Interface } from 'readline';
import Razorpay from './razorpay';

const razorpay = new Razorpay(process.env.key_id||"", process.env.key_secret||"");

interface Order{
  amount: Number;
  currency: string;
  receipt: string;
}
const orderData = {
  amount: 50000,
  currency: "INR",
  receipt: "receipt#1",
  notes: {
    key1: "value3",
    key2: "value2"
  }
};

export const createOrder = (orderData:Order) => {
  return razorpay.createOrder(orderData);
};
