import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import Button from '../components/ui/Button';
import { CreditCard } from 'lucide-react';

interface BookingState {
  date: Date;
  time: string;
  serviceId: string;
}

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const bookingDetails = location.state as BookingState;

  const services = {
    '1': { name: 'Classic Haircut', price: 35 },
    '2': { name: 'Beard Trim & Shape', price: 25 },
    '3': { name: 'Premium Package', price: 65 },
  };

  const selectedService = services[bookingDetails.serviceId as keyof typeof services];

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/success');
    }, 2000);
  };

  if (!bookingDetails || !selectedService) {
    navigate('/booking');
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Service</span>
            <span className="font-medium">{selectedService.name}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Date</span>
            <span className="font-medium">
              {format(new Date(bookingDetails.date), 'MMMM d, yyyy')}
            </span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Time</span>
            <span className="font-medium">{bookingDetails.time}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Total</span>
            <span className="text-xl font-bold">${selectedService.price}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <input
              type="text"
              placeholder="4242 4242 4242 4242"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVC
              </label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
        </form>
      </div>

      <Button
        className="w-full"
        size="lg"
        onClick={handlePayment}
        disabled={isProcessing}
      >
        <CreditCard className="mr-2 h-5 w-5" />
        {isProcessing ? 'Processing...' : `Pay $${selectedService.price}`}
      </Button>
    </div>
  );
};

export default Checkout;