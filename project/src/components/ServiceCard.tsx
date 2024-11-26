import { FC } from 'react';
import Button from './ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, price, duration, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">{price}</span>
            <span className="ml-2 text-sm text-gray-500">{duration}</span>
          </div>
          <Button variant="outline">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;