import React from 'react'
import { stripe } from '../../instances/stripe';

const create_checkout = async () => {
    const session = await stripe.createCheckoutSession({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'https://example.com/success',
        cancel_url: 'https://example.com/cancel',
    });
    // window.location.href = session;
}

export default create_checkout;