import React, { useState } from 'react';
import './PaymentPage.css';

function PaymentPage() {
  const [showImage, setShowImage] = useState(false);

  const displayGPayImage = () => {
    setShowImage(true);
  };

  return (
    <div className="payment-container">
      <div className="payment-methods">
        <h2>Select Payment Method</h2>
        <div
          className="payment-method"
          onClick={displayGPayImage}
        >
          <img
            className="payment-icon"
            src="https://static.vecteezy.com/system/resources/previews/021/672/629/non_2x/google-pay-logo-transparent-free-png.png"
            alt="Google Pay"
          />
          Google Pay
        </div>
      </div>

      {showImage && (
        <div>
          <img
            className="payment-image"
            src="/Pay.jpg"
            alt="Pay Image"
          />
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
