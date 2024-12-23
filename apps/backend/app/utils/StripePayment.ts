import Stripe from 'stripe';

class StripePayment {
  private stripe: Stripe;

  constructor(secretKey: string) {
    this.stripe = new Stripe(secretKey);
  }

  async createPaymentIntent(amount: number, currency: string = 'usd') {
    console.log(typeof(amount), amount, currency);
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount,
        currency,
        automatic_payment_methods: { enabled: true },
      });
      return { clientSecret: paymentIntent.client_secret };
    } catch (error: any) {
      console.error("Error in Stripe Payment Intent: ", error);
      throw new Error(`Internal server error: ${error.message}`);
    }
  }

  async confirmPayment(clientSecret: string, paymentMethodId: string) {
    try {
      const paymentIntent = await this.stripe.paymentIntents.confirm(clientSecret, {
        payment_method: paymentMethodId,
      });
      return paymentIntent;
    } catch (error) {
      console.error('Error confirming payment:', error);
      throw error;
    }
  }

  async createCheckoutSession(successUrl: string, cancelUrl: string, lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]) {
    try {
      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: successUrl,
        cancel_url: cancelUrl,
      });
      return session;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      throw error;
    }
  }
}

export default StripePayment;
