// app/api/checkout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  // TODO: 後で本物の決済処理（Stripe / PayPal など）を実装する
  return NextResponse.json({ ok: true });
}
