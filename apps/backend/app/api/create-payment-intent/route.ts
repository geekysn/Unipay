import { NextRequest, NextResponse } from "next/server";
import StripePayment from "../../utils/StripePayment";

const stripePayment = new StripePayment(process.env.STRIPE_SECRET_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();
    console.log("reached here");
    const response = await stripePayment.createPaymentIntent(amount);
    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}