import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const Success = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
      <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for choosing Modern Cuts. We've sent a confirmation email with your booking details.
      </p>
      <div className="space-y-4">
        <Link to="/">
          <Button variant="outline" className="w-full">
            Return to Home
          </Button>
        </Link>
        <Link to="/booking">
          <Button className="w-full">
            Book Another Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;