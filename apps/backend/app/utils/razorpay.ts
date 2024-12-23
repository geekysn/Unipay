import axios from 'axios';
import base64 from 'base-64';
import { re } from 'mathjs';

class Razorpay {
  private apiKey: string;
  private apiSecret: string;
  private authHeader: string;

  constructor(apiKey: string, apiSecret: string) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.authHeader = 'Basic ' + base64.encode(`${apiKey}:${apiSecret}`);
  }

  private getHeaders() {
    return {
      'Authorization': this.authHeader,
      'Content-Type': 'application/json'
    };
  }

  public async createCustomer(customerData: any) {
    const url = 'https://api.razorpay.com/v1/customers';
    try {
      const response = await axios.post(url, customerData, {
        headers: this.getHeaders()
      });
      console.log("Customer created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to create customer:", error);
    }
  }

  public async getCustomers() {
    const url = 'https://api.razorpay.com/v1/customers';
    try {
      const response = await axios.get(url, {
        headers: this.getHeaders()
      });
      console.log("Customers fetched successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch customers:", error);
    }
  }

  public async createOrder(orderData: any) {
    const url = 'https://api.razorpay.com/v1/orders';
    try {
      const response = await axios.post(url, orderData, {
        headers: this.getHeaders()
      });
      console.log("Order created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to create order:", error);
    }
  }

  public async createPaymentLink(paymentLinkData: any) {
    const url = 'https://api.razorpay.com/v1/payment_links';
    try {
      const response = await axios.post(url, paymentLinkData, {
        headers: this.getHeaders()
      });
      console.log("Payment link created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to create payment link:", error);
    }
  }

  public async createQRCode(qrCodeData: any) {
    const url = 'https://api.razorpay.com/v1/payments/qr_codes';
    try {
      const response = await axios.post(url, qrCodeData, {
        headers: this.getHeaders()
      });
      console.log("QR Code created successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to create QR Code:", error);
    }
  }
}

export default Razorpay;