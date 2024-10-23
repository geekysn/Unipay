// "use client"
import styles from "./page.module.css";
import {createCustomer} from "./utils/create-customer";
import {createOrder} from "./utils/create-order";
import { getCustomers } from "./utils/get-customers";
import { createStandardLink } from "./utils/create-payment-link";
import { create } from "domain";
export default function Home() {
  // getCustomers();
  createStandardLink();
  return (
    <div className={styles.page}>
      {/* <button onClick={createOrder} >Create Order</button>
      <button onClick={createCustomer} >Create Customer</button> */}
    </div>
  );
}
