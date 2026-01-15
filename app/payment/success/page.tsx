export default function PaymentSuccessPage() {
  return (
    <div className="container">
      <h1>Payment Completed</h1>
      <p>Thank you for your application!</p>

      <p>
        A confirmation email has been sent.  
        Results will be announced on the official website.
      </p>

      <a href="/" className="btn-primary">Back to Home</a>
    </div>
  );
}
