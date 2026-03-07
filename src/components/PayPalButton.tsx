"use client"
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalButton({ amount }: { amount: number }) {
  return (
    <PayPalButtons
      style={{ layout: "vertical", color: "gold", shape: "rect", label: "checkout" }}
      createOrder={(data, actions) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                value: amount.toString(),
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        if (actions.order) {
          const details = await actions.order.capture();
          alert(`Pagesa u krye me sukses nga ${details.payer.name?.given_name}!`);
          window.location.reload(); // Rifresko faqen pas blerjes
        }
      }}
      onError={(err) => {
        console.error("PayPal Error:", err);
        alert("Pati një problem me pagesën. Provo përsëri.");
      }}
    />
  );
}