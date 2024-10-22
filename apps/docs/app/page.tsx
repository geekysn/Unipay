"use client"
import styles from "./page.module.css";
import {createCustomer} from "./utils/create-customer";
import {createOrder} from "./utils/create-order";
export default function Home() {
  const handleOrder = () => {
    const res=createOrder();
  };
  return (
    <div className={styles.page}>
    </div>
  );
}
