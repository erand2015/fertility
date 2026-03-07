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
          // KETU U SHTUA PIKEPYETJA PAS payer
          const name = details.payer?.name?.given_name || "Blerës";
          alert(`Pagesa u krye me sukses nga ${name}!`);
          window.location.reload(); 
        }
      }}
      onError={(err) => {
        console.error("PayPal Error:", err);
        alert("Pati një problem me pagesën. Provo përsëri.");
      }}
    />
  );
}