"use client";
import { createCustomer } from "./utils/create-customer";
import { createOrder } from "./utils/create-order";
import { getCustomers } from "./utils/get-customers";
import { createStandardLink } from "./utils/create-payment-link";
import { createQRCode } from "./utils/create-qr";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Home() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    contact: ""
  });
  const [amount, setAmount] = useState(0);
  const [paymentLink, setPaymentLink] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCreatePaymentLink = async () => {
    try {
      const res = await createStandardLink(customer, amount);
      setPaymentLink(res.short_url);
      setShowModal(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8">Razorpay Integration</h1>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-2 border border-gray-300 rounded"
          value={customer.name}
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          className="px-4 py-2 border border-gray-300 rounded"
          value={customer.email}
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact"
          className="px-4 py-2 border border-gray-300 rounded"
          value={customer.contact}
          onChange={(e) => setCustomer({ ...customer, contact: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          className="px-4 py-2 border border-gray-300 rounded"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={handleCreatePaymentLink}
        >
          Create Payment Link
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Payment Link Created</h2>
            <p className="mb-4">{paymentLink}</p>
            <CopyToClipboard text={paymentLink}>
              <button className="px-5 py-2 text-white bg-green-500 rounded hover:bg-green-700">
                Copy to Clipboard
              </button>
            </CopyToClipboard>
            <button
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 mt-4"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}