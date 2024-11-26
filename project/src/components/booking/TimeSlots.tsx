import { format } from 'date-fns';
import Button from '../ui/Button';

interface TimeSlotsProps {
  selectedDate: Date;
  onTimeSelect: (time: string) => void;
  selectedTime: string | null;
}

const TimeSlots = ({ selectedDate, onTimeSelect, selectedTime }: TimeSlotsProps) => {
  // In a real app, these would be fetched from an API based on availability
  const availableSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00'
  ];

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">
        Available times for {format(selectedDate, 'MMMM d, yyyy')}
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {availableSlots.map((time) => (
          <Button
            key={time}
            variant={selectedTime === time ? 'primary' : 'outline'}
            onClick={() => onTimeSelect(time)}
            className="w-full"
          >
            {time}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;