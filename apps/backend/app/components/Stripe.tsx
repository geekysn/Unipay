"use client"

import React from 'react'
import Stripe from '../utils/stripe/stripe'
import { stripe } from '../instances/stripe';
import create_checkout from '../utils/stripe/create_checkout';

const StripePay = () => {
    // console.log(process.env.STRIPE_SECRET_KEY);
    return (
        <div>
            <h1>Stripe Payment</h1>
            <button onClick={create_checkout}>
                Pay with Stripe
            </button>
        </div>
    )
}

export default StripePay