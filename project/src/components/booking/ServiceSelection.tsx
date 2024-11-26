interface Service {
  id: string;
  name: string;
  duration: string;
  price: string;
}

interface ServiceSelectionProps {
  selectedService: string | null;
  onServiceSelect: (serviceId: string) => void;
}

const ServiceSelection = ({ selectedService, onServiceSelect }: ServiceSelectionProps) => {
  const services: Service[] = [
    { id: '1', name: 'Classic Haircut', duration: '45 min', price: '$35' },
    { id: '2', name: 'Beard Trim & Shape', duration: '30 min', price: '$25' },
    { id: '3', name: 'Premium Package', duration: '75 min', price: '$65' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Select Service</h3>
      <div className="space-y-2">
        {services.map((service) => (
          <label
            key={service.id}
            className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
              selectedService === service.id
                ? 'border-black bg-gray-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="service"
                value={service.id}
                checked={selectedService === service.id}
                onChange={() => onServiceSelect(service.id)}
                className="h-4 w-4 text-black border-gray-300 focus:ring-black"
              />
              <div className="ml-3">
                <p className="font-medium text-gray-900">{service.name}</p>
                <p className="text-sm text-gray-500">{service.duration}</p>
              </div>
            </div>
            <span className="text-gray-900 font-medium">{service.price}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;