import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('bkash');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [amount, setAmount] = useState('99'); // Default amount
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Basic validation
    if (!phoneNumber) {
      setError('Please enter your phone number');
      setLoading(false);
      return;
    }

    if (selectedMethod !== 'cod' && !transactionId) {
      setError('Please enter transaction ID');
      setLoading(false);
      return;
    }

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message
      setSuccess(true);
      
      // Redirect to dashboard after 3 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    } catch (err) {
      setError('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const paymentMethods = [
    {
      id: 'bkash',
      name: 'bKash',
      icon: '💰',
      description: 'Pay with your bKash mobile wallet'
    },
    {
      id: 'rocket',
      name: 'Rocket',
      icon: '🚀',
      description: 'Pay with your Rocket mobile wallet'
    },
    {
      id: 'nagad',
      name: 'Nagad',
      icon: '💳',
      description: 'Pay with your Nagad mobile wallet'
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      icon: '💵',
      description: 'Pay cash when you receive the course materials'
    }
  ];

  return (
    <div className="payment-page">
      <div className="container">
        <div className="payment-card">
          <h2 className="payment-title">Complete Your Payment</h2>
          <p className="payment-subtitle">Select a payment method to complete your enrollment</p>
          
          {error && <div className="alert alert-danger">{error}</div>}
          {success && (
            <div className="alert alert-success">
              Payment successful! Redirecting to your dashboard...
            </div>
          )}
          
          <form onSubmit={handlePayment} className="payment-form">
            <div className="payment-methods">
              <h3>Payment Methods</h3>
              <div className="methods-grid">
                {paymentMethods.map(method => (
                  <div 
                    key={method.id} 
                    className={`method-card ${selectedMethod === method.id ? 'selected' : ''}`}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                    <div className="method-icon">{method.icon}</div>
                    <div className="method-info">
                      <h4>{method.name}</h4>
                      <p>{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="payment-details">
              <h3>Payment Details</h3>
              
              <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input
                  type="text"
                  id="amount"
                  value={`$${amount}`}
                  readOnly
                  className="form-control"
                />
              </div>
              
              {selectedMethod !== 'cod' && (
                <>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">
                      {selectedMethod === 'bkash' && 'bKash'} 
                      {selectedMethod === 'rocket' && 'Rocket'} 
                      {selectedMethod === 'nagad' && 'Nagad'} 
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter your mobile number"
                      className="form-control"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="transactionId">Transaction ID</label>
                    <input
                      type="text"
                      id="transactionId"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                      placeholder="Enter transaction ID"
                      className="form-control"
                    />
                  </div>
                  
                  <div className="instructions">
                    <h4>How to Pay:</h4>
                    <ol>
                      {selectedMethod === 'bkash' && (
                        <>
                          <li>Dial *247# on your mobile</li>
                          <li>Select "Send Money"</li>
                          <li>Enter merchant number: 01XXXXXXXXX</li>
                          <li>Enter amount: ${amount}</li>
                          <li>Enter reference: COURSE123</li>
                          <li>Enter your PIN</li>
                          <li>Copy the transaction ID and paste above</li>
                        </>
                      )}
                      {selectedMethod === 'rocket' && (
                        <>
                          <li>Dial *322# on your mobile</li>
                          <li>Select "Send Money"</li>
                          <li>Enter merchant number: 01XXXXXXXXX</li>
                          <li>Enter amount: ${amount}</li>
                          <li>Enter reference: COURSE123</li>
                          <li>Enter your PIN</li>
                          <li>Copy the transaction ID and paste above</li>
                        </>
                      )}
                      {selectedMethod === 'nagad' && (
                        <>
                          <li>Dial *167# on your mobile</li>
                          <li>Select "Send Money"</li>
                          <li>Enter merchant number: 01XXXXXXXXX</li>
                          <li>Enter amount: ${amount}</li>
                          <li>Enter reference: COURSE123</li>
                          <li>Enter your PIN</li>
                          <li>Copy the transaction ID and paste above</li>
                        </>
                      )}
                    </ol>
                  </div>
                </>
              )}
            </div>
            
            <button 
              type="submit" 
              disabled={loading || success}
              className="btn btn-primary payment-btn"
            >
              {loading ? 'Processing Payment...' : 'Complete Payment'}
            </button>
          </form>
          
          <div className="payment-footer">
            <p>By completing your payment, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;