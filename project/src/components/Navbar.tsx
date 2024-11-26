import { Menu, X, Scissors } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#services';
      return;
    }
    
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Scissors className="h-8 w-8" />
              <span className="font-bold text-xl">Modern Cuts</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
            <a href="#services" onClick={scrollToServices} className="text-gray-700 hover:text-black">Services</a>
            <Link to="/booking" className="text-gray-700 hover:text-black">Book Now</Link>
            <Button>Make Appointment</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-black">Home</Link>
            <a href="#services" onClick={scrollToServices} className="block px-3 py-2 text-gray-700 hover:text-black">Services</a>
            <Link to="/booking" className="block px-3 py-2 text-gray-700 hover:text-black">Book Now</Link>
            <div className="px-3 py-2">
              <Button className="w-full">Make Appointment</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;