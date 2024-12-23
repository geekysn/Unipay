"use server"
import Razorpay from './razorpay';

const razorpay = new Razorpay(process.env.key_id||"", process.env.key_secret||"");


const qrCodeData = {
  type: "upi_qr",
  name: "Store Front Display",
  usage: "single_use",
  fixed_amount: true,
  payment_amount: 300,
  description: "For Store 1",
  customer_id: "cust_HKsR5se84c5LTO",
  notes: {
    purpose: "Test UPI QR Code notes"
  }
};

export const createQRCode = () => {
  razorpay.createQRCode(qrCodeData);
};