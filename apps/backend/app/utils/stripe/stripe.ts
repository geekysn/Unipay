import { Stripe as StripeSDK } from 'stripe';

class Stripe {
    private stripe : StripeSDK;

    constructor(private apiKey: string, config?: StripeSDK.StripeConfig){
        this.stripe = new StripeSDK(apiKey, config);
    }

    public async createCheckoutSession(sessionParams: StripeSDK.Checkout.SessionCreateParams): Promise<StripeSDK.Checkout.Session> {
        const session = await this.stripe.checkout.sessions.create(sessionParams);
        return session;
    }
}

export default Stripe;