import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../components/booking/Calendar';
import TimeSlots from '../components/booking/TimeSlots';
import ServiceSelection from '../components/booking/ServiceSelection';
import Button from '../components/ui/Button';

const Booking = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleBooking = () => {
    if (!selectedService || !selectedTime) return;
    
    // In a real app, this would make an API call to create the booking
    // For now, we'll just navigate to a success page
    navigate('/checkout', {
      state: {
        date: selectedDate,
        time: selectedTime,
        serviceId: selectedService,
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book an Appointment</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <ServiceSelection
            selectedService={selectedService}
            onServiceSelect={setSelectedService}
          />
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />
        </div>
        
        <div className="space-y-8">
          <TimeSlots
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onTimeSelect={setSelectedTime}
          />
          
          <div className="mt-8">
            <Button
              className="w-full"
              size="lg"
              disabled={!selectedService || !selectedTime}
              onClick={handleBooking}
            >
              Continue to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;