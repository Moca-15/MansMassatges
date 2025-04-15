import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const selectedCamera = location.state?.selectedCamera;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cameraUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here it should send the data to backend
    console.log('Form submitted:', formData);
  };

    // for JPEG/PNG Image URL (static cameras): 
  useEffect(() => {
    const interval = setInterval(() => {
      const img = document.getElementById("trafficCamera");
      if (img) {
        img.src = `${formData.cameraUrl}?t=${new Date().getTime()}`;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [formData.cameraUrl]);

  return (
    <div className="checkout-container flex gap-8 mx-auto p-6">
      {/* Left side - Form */}
      <div className="flex-1">
        <h1 className="text-2xl text-black font-bold mb-6">Checkout</h1>
        {/* {selectedCamera && (
          <div className="selected-product mb-4">
            <h2 className="text-xl">Selected Product: {selectedCamera}</h2>
          </div>
        )} */}
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>Personal Information</h2>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-section">
            <h2>Shipping Address</h2>
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="zipCode"
              placeholder="ZIP Code"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-section">
            <h2>Payment Information</h2>
            <input
              type="number"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="cameraUrl"
            value={formData.cameraUrl}
            onChange={handleChange}
            placeholder="Enter camera URL"
            className="w-full p-2 rounded mb-4 text-white"
            required
          />

          <button type="submit" className="submit-button">
            Complete Purchase
          </button>
        </form>
      </div>

      {/* Right side - Video Preview & Order Summary */}
      <div className="w-[400px] sticky top-6 h-fit">
        <div className="bg-black rounded-lg overflow-hidden">
          <p className="my-2"></p>
          <div className="aspect-video bg-black relative">
            <img 
              id="trafficCamera" 
              src={formData.cameraUrl} 
              alt="Please provide a valid URL" 
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-sm text-white my-2">
            Live preview of your camera feed
          </p>
        </div>
        <div className="bg-gray-200 rounded-md mt-5">
            <p className='text-sm text-black'>order summary here</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
