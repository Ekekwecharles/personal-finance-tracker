// import emailjs from "@emailjs/browser";

export function formatUSD(value: number) {
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // minimumFractionDigits: 0,
  }).format(value);

  return formattedValue;
}

// export function sendTokenByEmail(
//   token: number,
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>,
//   setStep: React.Dispatch<React.SetStateAction<number>>,
//   bank: string,
//   accountNum: number,
//   accountName: string,
//   amount: number
// ) {
//   setLoading(true);
//   const formattedAmount = amount.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//   });
//   const templateParams = {
//     to_email: "mr.thankyouuu@gmail.com",
//     message: `
//     Dear Customer,

// You are about to initiate a transaction with the following details:

// - **Bank Name**: ${bank}
// - **Account Number**: ${accountNum}
// - **Account Name**: ${accountName}
// - **Amount**: ${formattedAmount}

// To proceed, please use the verification token below:

// **Verification Token**: ${token}

// If you did not request this transaction, please disregard this email. For any assistance, contact our support team.

// Thank you for banking with us.

// Best regards,
// Secure Savings Team
//     `,
//   };

//   emailjs
//     .send(
//       "service_i23yaw9",
//       "template_fbxw3dk",
//       templateParams,
//       "2R3kOXz53eC0SL3JV"
//     )
//     .then(
//       () => {
//         alert(
//           "A verification token has been sent to your registered email with this bank. Please use this token to complete your transaction."
//         );
//         setLoading(false);
//         setStep(2);
//       },
//       (error) => {
//         alert("An error occurred while sending the token.");
//         console.error("Error sending token:", error);
//       }
//     );

//   setLoading(false);
//   setStep(2);
// }
