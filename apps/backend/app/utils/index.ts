import Razorpay from "./razorpay";
import StripePayment from "./StripePayment";

type Provider = 'stripe' | 'razorpay';

class Unipay {
    private gateway: {
        stripe: StripePayment | null;
        razorpay: Razorpay | null;
    }

    constructor(config : {
        StripeApiKey?: string;
        RazorpayApiKey?: string;
        RazorpayApiSecret?: string;
    }){
        this.gateway = {
            stripe: config.StripeApiKey ? new StripePayment(config.StripeApiKey) : null,

            razorpay: config.RazorpayApiKey && config.RazorpayApiSecret ? new Razorpay(config.RazorpayApiKey, config.RazorpayApiSecret) : null    
        };
    }

    async createCheckoutSession({amount, currency, returnUrl, cancelUrl, provider}:{
        amount: number,
        currency: string,
        returnUrl: string,
        cancelUrl: string,
        provider: Provider[]
    }){
        if(provider.includes('stripe') && this.gateway.stripe){
            const lineItems = [{price_data: {currency, product_data: {name: 'Product'}, unit_amount: amount}, quantity: 1}];
            return await this.gateway.stripe.createCheckoutSession(returnUrl, cancelUrl, lineItems)
        }
        if(provider.includes('razorpay') && this.gateway.razorpay){
            // return await this.gateway.razorpay.createPaymentLink();
            // todo
        }
        else{
            throw new Error('Invalid provider');
        }
    }

    async createPaymentIntent({amount, currency, provider}:{
        amount: number,
        currency: string,
        provider: Provider[]
    }){
        if(provider.includes('stripe') && this.gateway.stripe){
            return await this.gateway.stripe.createPaymentIntent(amount, currency);
        }
        if(provider.includes('razorpay') && this.gateway.razorpay){
            // return await this.gateway.razorpay.;
            // todo
        }
        else{
            throw new Error('Invalid provider');
        }
    }

    async confirmPayment({clientSecret, paymentMethodId, provider}:{
        clientSecret: string,
        paymentMethodId: string,
        provider: Provider[]
    }){
        if(provider.includes('stripe') && this.gateway.stripe){
            return await this.gateway.stripe.confirmPayment(clientSecret, paymentMethodId);
        }
        if(provider.includes('razorpay') && this.gateway.razorpay){
            // return await this.gateway.razorpay.;
            // todo
        }
        else{
            throw new Error('Invalid provider');
        }
    }
}

export default Unipay;